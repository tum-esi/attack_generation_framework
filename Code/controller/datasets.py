from tornado import gen, web
import mymongo
import json
from scapy.all import *
from scapy.layers.http import *
load_layer("http")
import cv2
import numpy as np
import matplotlib.pyplot as plt
import queue
import statistics
import math
import glob
import pickle
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix
import sys


class GridFs(web.RequestHandler):

    def get(self, *args, **kwargs):
        """
            - handling /download/db/collection/objectid objctid eg "6027241a2ffce167a3e37e5f"
        """
        data = mymongo.allFiles()
        return self.finish({"error": False, "data": data })

    def post(self, *args, **kwargs):
        url_parts = [x for x in self.request.path.split("/") if x]

        if url_parts[1] == "download":

            data = json.loads(self.request.body.decode('utf-8'))
            filename = data["filename"]
            file = mymongo.getFile({"filename": filename})
            data = file.read()
            
            self.set_header('Content-Type', 'application/octet-stream')
            self.set_header('Content-Disposition', 'attachment;filename=' + filename)
            self.write(data)
            
            return self.finish({"error": False, "data": "File has been downloaded." })

        if url_parts[1] == "upload":
            data = self.request.files['media'][0]["body"]
            filename = json.loads(self.request.files['metadata'][0]['body'].decode('utf-8'))["filename"]
            ret = mymongo.insertFile(data, filename, content_type="text/csv", encdng='utf-8')

            return self.finish({"error": False, "data": "Upload has been completed." })

        else:
            return self.finish({"error": True, "data": "either edit or download" })

    def delete(self, *args, **kwargs):
        data = json.loads(self.request.body.decode('utf-8'))
        filename = data["filename"]
        # res = mymongo.getData("db_gridfs", "fs.files", {"filename": filename})
        res = mymongo.getFile({"filename": filename})
        # for x in res:
        #     print(x, flush=True)
        print(res._id, flush=True)

        crsr = mymongo.deleteFile(res._id)
        if crsr != None:
            return self.finish({'error': True, 'data': "Failed to delete gridfs resource."})

        return self.finish({"error": False, "data": "Deletion successful." })

class CapFiles(web.RequestHandler):
    plist = []

    def get(self, *args, **kwargs):
        try:
            import glob
            paths = glob.glob("/tmp/*.cap")
            # dirs = [{"name": x.path.split("/")[-1]} for x in os.scandir("/repositories")]
            return self.finish({'error': False, 'data': paths})
        except:
            return self.finish({'error': True, 'data': None})

    def post(self, *args, **kwargs):
        url_parts = [x for x in self.request.path.split("/") if x]
        data = json.loads(self.request.body.decode('utf-8'))
        filepath = data["filepath"]

        if url_parts[1] == "download":
            filename = data["filepath"].split("/")[-1]

            self.set_header('Content-Type', 'application/octet-stream')
            self.set_header('Content-Disposition', 'attachment; filename=' + filename)

            with open(filepath, 'rb') as fin:
                self.write(fin.read())
            return self.finish()

        if url_parts[1] == "edit":

            packets = rdpcap(filepath)
            return_data = []
            for packet in packets:
                packet_dict = {}
                for line in packet.show2(dump=True).split('\n'):
                    if '###' in line:
                        layer = line.strip('#[] ')
                        packet_dict[layer] = {}
                    elif '=' in line:
                        key, val = line.split('=', 1)
                        packet_dict[layer][key.strip()] = val.strip()
                return_data.append(packet_dict)

                # print(packet.show(dump=True))
                # layers = packet.payload.layers()

            return self.finish({'error': False, 'data': return_data})

        else:
            return self.finish({'error': True, 'data': None})


class StaticDatasetsModels(web.RequestHandler):

    def get(self, *args, **kwargs):
        url_parts = [x for x in self.request.path.split("/") if x]
        dir_path = os.path.dirname(os.path.realpath(__file__))

        if url_parts[1] == "models":
            input_path = dir_path+"/../static_files/camera1/argoverse_models/*.sav"
            models = glob.glob(input_path)
            return_data = []
            for model in models:
                return_data.append({"model": model.split("/")[-1]})
            return self.finish({'error': False, 'data': return_data})

        if url_parts[1] == "datasets":
            input_path = dir_path+"/../static_files/camera1/argoverse_results"
            dirs = [{"name": x.path.split("/")[-1]} for x in os.scandir(input_path)]
            return self.finish({'error': False, 'data': dirs})


class AnalysisLDA(web.RequestHandler):

    def initialize(self):

        # True Train_mode trains a new model. False a already trainde model is loaded
        self.Train_mode = False
        self.LDA_model = None
        self.model_name = ""
        self.input_path = ""
        self.total_size = -1
        self.attack_samples = -1

        self.img_chrom_hist_history = []
        self.img_chrom_result_history = []
        self.D_between_img_chrom_hist_difference = []
        self.img_L1R_hist_history = []
        self.img_L1R_result_history = []
        self.D_between_img_L1R_hist_difference = []
        self.img_gradient_hist_history = []
        self.img_gradient_result_history = []
        self.D_between_img_gradient_hist_difference = []

        self.D_long_img_chrom_hist_difference = []
        self.D_long_img_L1R_hist_difference = []
        self.D_long_img_gradient_hist_difference = []
        self.D_norm_img_chrom_hist_difference = []
        self.D_norm_img_L1R_hist_difference = []
        self.D_norm_img_gradient_hist_difference = []
        self.Tempering_detected = []

        self.picture_number = 0
        self.input_bins = 80 # maximum 256, used to b 100
        self.short_size = 5 # round(10 / 1.1) # 10s records / time between samples, used to b 5
        self.long_size = 25 # round(50 / 1.1) # 50s records / time between samples, used to b 30
        self.ground_truth = None

        # queues difference
        self.queue_short_chrom_hist_difference = queue.Queue(self.short_size)
        self.queue_long_chrom_hist_difference = queue.Queue(self.long_size)
        self.queue_short_L1R_hist_difference = queue.Queue(self.short_size)
        self.queue_long_L1R_hist_difference = queue.Queue(self.long_size)
        self.queue_short_gradient_hist_difference = queue.Queue(self.short_size)
        self.queue_long_gradient_hist_difference = queue.Queue(self.long_size)

        # queues short and long
        self.queue_short_chrom_hist = queue.Queue(self.short_size)
        self.queue_long_chrom_hist = queue.Queue(self.long_size)
        self.queue_short_L1R_hist = queue.Queue(self.short_size)
        self.queue_long_L1R_hist = queue.Queue(self.long_size)
        self.queue_short_gradient_hist = queue.Queue(self.short_size)
        self.queue_long_gradient_hist = queue.Queue(self.long_size)

        # queues dif
        self.Betweeen_queue_chrom_temp_difference = queue.Queue(self.short_size*self.long_size)
        self.Betweeen_queue_L1R_temp_difference = queue.Queue(self.short_size*self.long_size)
        self.Betweeen_queue_gradient_temp_difference = queue.Queue(self.short_size*self.long_size)
        self.Long_queue_chrom_temp_difference = queue.Queue(self.long_size*(self.long_size-1)/2)
        self.Long_queue_L1R_temp_difference = queue.Queue(self.long_size*(self.long_size-1)/2)
        self.Long_queue_gradient_temp_difference = queue.Queue(self.long_size*(self.long_size-1)/2)

        self.img_chrom_hist_difference = []
        self.img_L1R_hist_difference = []
        self.img_gradient_hist_difference = []

    def open_picture(self, picture_number, input_path):
        return cv2.imread(input_path+"{:010d}".format(picture_number)+'.png')

    def queue_handler(self, new_value, short_FIFO, long_FIFO):

        # if long_FIFO is not full do nothing (wait biss filled in next step), otherwise
        if long_FIFO.full():
            # if long_FIFO is full throw oldest value away and get place fot new value
            long_FIFO.get()

        if short_FIFO.full():
            # long_FIFO full
            long_FIFO.put(short_FIFO.get())

        # put new value in to short FIFO
        short_FIFO.put(new_value)

    def prepare_buffer(self, img_old):

        img_old_aa = np.array(img_old)
        img_old = img_old_aa.astype(float)
        img_input_dim_y, img_input_dim_x, img_input_dim_z = np.shape(img_old)
        # print(np.shape(img_old))

        red_map = img_old[:, :, 2]/(img_old[:, :, 0]+img_old[:, :, 1]+img_old[:, :, 2])
        green_map = img_old[:, :, 1]/(img_old[:, :, 0]+img_old[:, :, 1]+img_old[:, :, 2])
        # print(np.shape(red_map))

        red_map_vector = red_map.reshape(img_input_dim_x*img_input_dim_y)
        green_map_vector = green_map.reshape(img_input_dim_x*img_input_dim_y)
        # print("red_map_vector", np.shape(red_map_vector), red_map_vector)

        # replace nan and inf 
        red_map_vector = np.nan_to_num(red_map_vector, nan=0, posinf=1, neginf=0)
        green_map_vector = np.nan_to_num(green_map_vector, nan=0, posinf=1, neginf=0)

        # create chomaticity histogram 
        h_chrom, xedges_chrom, yedges_chrom, image_chrom_result = plt.hist2d(red_map_vector, green_map_vector, bins=(self.input_bins, self.input_bins), cmap=plt.cm.jet)
        # print("shape h_chrom", np.shape(h_chrom), image_chrom_result)

        # calculate L1R difference
        # calculate L1 average
        pre_L1 = (img_old[:, :, 0]+img_old[:, :, 1]+img_old[:, :, 2])/3
        pre_L1_vector = pre_L1.reshape(img_input_dim_x*img_input_dim_y)
        # calculate Range
        pre_R=[]

        ######
        for i in range(img_input_dim_y):
            a = np.array(list(map(max, img_old[i])))
            b = np.array(list(map(min, img_old[i])))
            pre_R.append(a-b)
        pre_R = np.array(pre_R)
        # pre_R_vector = pre_R.reshape(img_input_dim_x*img_input_dim_y)
        ######

        pre_R_vector = pre_R.reshape(img_input_dim_x*img_input_dim_y)
        # create L1R Histogram
        h_L1R, xedges_L1R, yedges_L1R, image_L1R_result = plt.hist2d(pre_L1_vector, pre_R_vector, bins=(self.input_bins, self.input_bins), cmap=plt.cm.jet)

        # Histogram gradient direction difference
        # convert color imgae to gray scale imgage
        img_gray = cv2.cvtColor(src=img_old_aa, code=cv2.COLOR_BGR2GRAY) 
        # convolution with Sobel filter
        grad_x = cv2.Sobel(img_gray, cv2.CV_64F, 1, 0, ksize=3)

        grad_y = cv2.Sobel(img_gray, cv2.CV_64F, 0, 1, ksize=3)

        # trigonomatry gradient
        # nan results in calcuations issue needs to be solved 
        # temp = grad_y/grad_x

        temp = np.nan_to_num(grad_y/grad_x, nan=0)
        grad_trig = np.arctan(temp) # hier müste ggf. eine Fallunterschdiung eingeführt werden

        vector_grad_trig = grad_trig.reshape(img_input_dim_x*img_input_dim_y)

        n_gradient, bins_gradient, patches_gradient = plt.hist(vector_grad_trig, bins=self.input_bins)

        # put values chromaticity, L1R and gradiant hist for actual picture in to the bufffer
        self.queue_handler(h_chrom, self.queue_short_chrom_hist, self.queue_long_chrom_hist)
        self.queue_handler(h_L1R, self.queue_short_L1R_hist, self.queue_long_L1R_hist)
        self.queue_handler(n_gradient, self.queue_short_gradient_hist, self.queue_long_gradient_hist)

        # This only calculates the difference of the pictures following each other
        # calculate Histogram differences
        if np.shape(self.img_chrom_hist_history)[0] > 0:

            # chromaticity Histogram difference calculation
            temp_chrom_result = np.abs(self.img_chrom_hist_history[-1]-h_chrom).sum()
            self.img_chrom_hist_difference.append(temp_chrom_result)
            self.img_chrom_result_history.append(image_chrom_result)
            self.queue_handler(temp_chrom_result, self.queue_short_chrom_hist_difference, self.queue_long_chrom_hist_difference)

            # L1R Hisotogram difference calculation
            temp_L1R_result = np.abs(self.img_L1R_hist_history[-1]-h_L1R).sum()
            self.img_L1R_hist_difference.append(temp_L1R_result)
            self.img_L1R_result_history.append(image_L1R_result)
            self.queue_handler(temp_L1R_result, self.queue_short_L1R_hist_difference, self.queue_long_L1R_hist_difference)

            # gradient direction Histogram difference
            temp_gradient_result = np.abs(self.img_gradient_hist_history[-1]-n_gradient).sum()
            self.img_gradient_hist_difference.append(temp_gradient_result)
            self.queue_handler(temp_gradient_result, self.queue_short_gradient_hist_difference, self.queue_long_gradient_hist_difference)
            # img_gradient_result_history.append(image_gradient_result) # This is a differnt to the other two metixes before, adjust if nessessary

        # create/update image history
        self.img_chrom_hist_history.append(h_chrom)
        self.img_L1R_hist_history.append(h_L1R)
        self.img_gradient_hist_history.append(n_gradient)

        return

    def D_Norm_calculation(self):

        if self.queue_long_chrom_hist.full():

            ## buffers are full start tempering detection steps
            print('FIFOs full tempering detection can start')

            # typecast of queues to array for accesability
            arr_short_chrom_hist = np.array(self.queue_short_chrom_hist.queue)
            arr_long_chrom_hist = np.array(self.queue_long_chrom_hist.queue)
            arr_short_L1R_hist = np.array(self.queue_short_L1R_hist.queue)
            arr_long_L1R_hist = np.array(self.queue_long_L1R_hist.queue)
            arr_short_gradient_hist = np.array(self.queue_short_gradient_hist.queue)
            arr_long_gradient_hist = np.array(self.queue_long_gradient_hist.queue)

            # clear old queues
            self.Betweeen_queue_chrom_temp_difference.queue.clear()
            self.Betweeen_queue_L1R_temp_difference.queue.clear()
            self.Betweeen_queue_gradient_temp_difference.queue.clear()
            self.Long_queue_chrom_temp_difference.queue.clear()
            self.Long_queue_L1R_temp_difference.queue.clear()
            self.Long_queue_gradient_temp_difference.queue.clear()

            # calculate absolute difference between all recods on long and short FIFOs
            for i in range(0, len(arr_short_chrom_hist)):
                for ii in range(0, len(arr_long_chrom_hist)):
                    # print("np.shape(arr_short_chrom_hist[i])", np.shape(arr_short_chrom_hist[i]))
                    self.Betweeen_queue_chrom_temp_difference.put(abs(arr_short_chrom_hist[i]-arr_long_chrom_hist[ii])) # np.absolute
                    self.Betweeen_queue_L1R_temp_difference.put(abs(arr_short_L1R_hist[i]-arr_long_L1R_hist[ii]))
                    self.Betweeen_queue_gradient_temp_difference.put(abs(arr_short_gradient_hist[i]-arr_long_gradient_hist[ii]))

            # calculate absolute difference between all record in long FIFO
            for i in range(0,len(arr_long_chrom_hist)):
                for ii in range(i+1,len(arr_long_chrom_hist)):
                    self.Long_queue_chrom_temp_difference.put(abs(arr_long_chrom_hist[i]-arr_long_chrom_hist[ii]))
                    self.Long_queue_L1R_temp_difference.put(abs(arr_long_L1R_hist[i]-arr_long_L1R_hist[ii]))
                    self.Long_queue_gradient_temp_difference.put(abs(arr_long_gradient_hist[i]-arr_long_gradient_hist[ii]))

            # D_between
            D_between_chrom_result = np.median(self.Betweeen_queue_chrom_temp_difference.queue)
            D_between_L1R_result = np.median(self.Betweeen_queue_L1R_temp_difference.queue)
            D_between_gradient_result = np.median(self.Betweeen_queue_gradient_temp_difference.queue)
            self.D_between_img_chrom_hist_difference.append(D_between_chrom_result)
            self.D_between_img_L1R_hist_difference.append(D_between_L1R_result)
            self.D_between_img_gradient_hist_difference.append(D_between_gradient_result)

            # D_long
            D_long_chrom_result = np.median(self.Long_queue_chrom_temp_difference.queue)
            D_long_L1R_result = np.median(self.Long_queue_L1R_temp_difference.queue)
            D_long_gradient_result = np.median(self.Long_queue_gradient_temp_difference.queue)
            self.D_long_img_chrom_hist_difference.append(D_long_chrom_result)
            self.D_long_img_L1R_hist_difference.append(D_long_L1R_result)
            self.D_long_img_gradient_hist_difference.append(D_long_gradient_result)

            # D_norm
            D_norm_chrom_result = np.nan_to_num(math.log10(D_between_chrom_result/D_long_chrom_result+0.1), nan=0, posinf=1, neginf=0)
            D_norm_L1R_result = math.log10(D_between_L1R_result/D_long_L1R_result+0.1)
            D_norm_gradient_result = math.log10(D_between_gradient_result/D_long_gradient_result+0.1)
            # D_norm_chrom_result = np.nan_to_num(D_norm_chrom_result, nan=0, posinf=1, neginf=0)
            self.D_norm_img_chrom_hist_difference.append(D_norm_chrom_result)
            self.D_norm_img_L1R_hist_difference.append(D_norm_L1R_result)
            self.D_norm_img_gradient_hist_difference.append(D_norm_gradient_result)

            if not self.Train_mode:
                self.Tempering_detection(D_norm_chrom_result, D_norm_L1R_result, D_norm_gradient_result)

        else:
            ## buffers are not full yet tempering detection cannot started
            print('FIFOs not full yet')

    def Tempering_detection(self, D_norm_chrom_result, D_norm_L1R_result, D_norm_gradient_result):
        D_norm_chrom_result = np.nan_to_num(D_norm_chrom_result, nan=0, posinf=1, neginf=0) # new
        D_norm_L1R_result = np.nan_to_num(D_norm_L1R_result, nan=0, posinf=1, neginf=0) # new
        D_norm_gradient_result = np.nan_to_num(D_norm_gradient_result, nan=0, posinf=1, neginf=0) # new

        # model prediction
        y_pred=self.LDA_model.predict([[D_norm_chrom_result, D_norm_L1R_result, D_norm_gradient_result]]) # double backed provides the shape that is needed for the prediction
        self.Tempering_detected.append(y_pred)

        # if (D_norm_chrom_result <- 0.2):
        #     Tempering_detected.append(1)
        # else:
        #     Tempering_detected.append(0)

    def Train_LDA(self):

        # using filled long and short term buffer on rest of input images
        learnigng_array = []
        for i in range(0, len(self.D_norm_img_chrom_hist_difference)):
            learnigng_array.append([self.D_norm_img_chrom_hist_difference[i], self.D_norm_img_L1R_hist_difference[i], self.D_norm_img_gradient_hist_difference[i]])

        # Train test split
        X_train, X_test, y_train, y_test = train_test_split(learnigng_array, self.ground_truth, test_size=0.33)
        # Create and train Model
        self.LDA_model = LinearDiscriminantAnalysis()
        self.LDA_model.fit(X_train, y_train)
        
        # Test model prediction
        y_pred = self.LDA_model.predict(X_test)

        # prediction quality metrices
        print("confusion_matrix:", confusion_matrix(y_test, y_pred), flush=True)
        print("accuracy_score", accuracy_score(y_test, y_pred), flush=True)

        # save model
        pickle.dump(self.LDA_model, open(self.model_path, 'wb'))

        # return scores
        return accuracy_score(y_test, y_pred)

    # analizer, long/short term histo LDA
    def post(self, *args, **kwargs):

        dir_path = os.path.dirname(os.path.realpath(__file__))
        url_parts = [x for x in self.request.path.split("/") if x]
        data = json.loads(self.request.body.decode('utf-8'))
        dataset_data = data["configs"]["dataset"].split(":")
        full_name = dataset_data[0]+"-"+data["configs"]["attack"]
        self.total_size = int(dataset_data[1])
        self.attack_samples = data["configs"]["attack_samples"]
        self.dataset_path = dir_path+"/../static_files/camera1/argoverse_results/"+data["foldername"]+"/"
        self.model_path = dir_path+"/../static_files/camera1/argoverse_models/model-"+full_name+".sav"

        if url_parts[1] == "train":
            self.Train_mode = True

        if url_parts[1] == "detect":
            self.Train_mode = False
        
        # untampered_samples = int(dataset[1])
        # self.total_size = 108
        # attack_samples = data["configurations"]["attack_samples"]
        # self.attack_samples = 14
        # input_path = dir_path+"/../static_files/camera1/argoverse_results/"+dataset[0]+"__1/"
        
        # sample working dataset, works with finalized model .sav
        # input_path = dir_path+"/../static_files/camera1/argoverse_results/data_defocus/"

        natural_img = np.zeros(self.total_size-self.attack_samples, int)
        tempered_img = np.ones(self.attack_samples, int)
        self.ground_truth = np.concatenate((natural_img, tempered_img))
        print("ground_truth1: ", self.ground_truth, np.shape(self.ground_truth))

        # calculate ground truth # needed for learning # needed for plot
        size = self.short_size+self.long_size-1 # -1 here because 0-34 are 35
        print("sizeee:", size)
        self.ground_truth = self.ground_truth[size:]
        print("ground_truth2: ", self.ground_truth, np.shape(self.ground_truth))

        if not self.Train_mode:

            self.LDA_model = pickle.load(open(self.model_path, 'rb'))
            print("- model loaded -", flush=True)

        for x in range(0, self.total_size):
            
            print("reading image nr:", x)
            img_old = self.open_picture(x, self.dataset_path)
            # print("input img size:", np.shape(img_old))

            if not (img_old is None):
                # metric computation and preperation of FIFOs
                self.prepare_buffer(img_old)
                # tempering detection based on FIFOs
                self.D_Norm_calculation()
                print("D_norm calculated", flush=True)

        if self.Train_mode:
            
            print("---------------------------- starting train mode ------------------", flush=True)
            self.D_norm_img_chrom_hist_difference = np.nan_to_num(self.D_norm_img_chrom_hist_difference, nan=0, posinf=1, neginf=0)
            self.D_norm_img_L1R_hist_difference = np.nan_to_num(self.D_norm_img_L1R_hist_difference, nan=0, posinf=1, neginf=0)
            self.D_norm_img_gradient_hist_difference = np.nan_to_num(self.D_norm_img_gradient_hist_difference, nan=0, posinf=1, neginf=0)
            accuracy = self.Train_LDA()
            return self.finish({'error': False, 'data': self.model_path.split("/")[-1]})

        if not self.Train_mode:
            
            print("---------------------------- output mode ------------------", flush=True)
            # dummy figure to prapare environment that the other figures are printed well.
            # plt.figure(1)
            # Gives feedback on the detection quality
            # print("shapes ground_truth and Tempering_detected", np.shape(self.ground_truth), np.shape(self.Tempering_detected))
            print('confusion matrix:', confusion_matrix(self.ground_truth, self.Tempering_detected))
            print('accuracy score:', accuracy_score(self.ground_truth, self.Tempering_detected))

            plt.figure(9)
            plt.plot(self.ground_truth, linewidth=5, label="ground_truth")
            plt.plot(self.Tempering_detected,  linewidth=5, label="Tempering_detected")
            plt.plot(self.D_norm_img_chrom_hist_difference, label="D_norm_img_chrom_hist_difference")
            plt.plot(self.D_norm_img_L1R_hist_difference, label="D_norm_img_L1R_hist_difference")
            plt.plot(self.D_norm_img_gradient_hist_difference, label="D_norm_img_gradient_hist_difference")
            plt.legend(loc="upper left", prop={'size': 20})
            # plt.title('All in one plot')
            plt.title('Evaluation Stats '+'| Video '+str(self.dataset_path.split("/")[-2])+' | short '+str(self.short_size)+' | long '+str(self.long_size)+' | bins '+str(self.input_bins))
            plt.xlabel('Frames after buffer filled')
            plt.ylabel('D_norm values')
            plt.show()

            # print(self.img_chrom_hist_history)
            # print(self.img_chrom_hist_difference)
            # plt.figure(2)
            # plt.plot(self.img_chrom_hist_difference)
            # plt.title('chromaticity historgam differences')

            # plt.figure(3)
            # plt.plot(self.img_L1R_hist_difference)
            # plt.title('L1R historgam differences')

            # plt.figure(4)
            # plt.plot(self.img_gradient_hist_difference)
            # plt.title('gradient historgam differences')

            # plt.figure(5)
            # plt.plot(np.array(self.queue_short_chrom_hist_difference.queue))
            # plt.title('queue_short_chrom_hist_difference')

            # plt.figure(6)
            # plt.plot(self.D_norm_img_chrom_hist_difference)
            # plt.title('D_norm_img_chrom_hist_difference')

            # plt.figure(7)
            # plt.plot(self.D_norm_img_L1R_hist_difference)
            # plt.title('D_norm_img_L1R_hist_difference')

            # plt.figure(8)
            # plt.plot(self.D_norm_img_gradient_hist_difference)
            # plt.title('D_norm_img_gradient_hist_difference')

            path = dir_path+"/../static_files/camera1/charts/"+self.model_path.split("/")[-1].split(".sav")[0]+".png"
            plt.savefig(path, bbox_inches='tight')

            with open(path, 'rb') as fin:
                self.write(fin.read())


            # Print final queues for checking
            print(self.Tempering_detected)
            print(self.D_norm_img_chrom_hist_difference)
            print(self.D_norm_img_L1R_hist_difference)
            print(self.D_norm_img_gradient_hist_difference)
            # print(self.queue_short_chrom_hist.queue)
            # print(self.queue_long_chrom_hist.queue)
            # print(self.queue_short_L1R_hist.queue)
            # print(self.queue_long_L1R_hist.queue)
            # print(self.queue_short_gradient_hist.queue)
            # print(self.queue_long_gradient_hist.queue)

            return self.finish()


# dataset: ring_front_center-blurring__0
# model: model-ring_front_center-blurring.sav
# confusion_matrix: [[99  0]
#  [35  8]]
# accuracy_score 0.7535211267605634

# dataset: front_tram_scenario
# model: model-front_tram_scenario-blurring.sav
# confusion_matrix: [[20  0]
#  [ 1  4]]
# accuracy_score 0.96
