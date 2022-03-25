from tornado import web, gen, httpclient, websocket, ioloop, locks
import json
import settings
import cv2
import numpy as np
import glob
import os
import shutil
# to fix a cv2 bug have a look to https://github.com/PyCQA/pylint/issues/2426

class CommSimulation(web.RequestHandler):

    async def proxy_loop(self, conn, ws_client):

        idx = 0
        for i, client in enumerate(self.application.sim.ws_clients):
            if (client is ws_client):
                idx = i

        while True:
            msg = await conn.read_message()
            print("controller ws:", msg, "client_index:", idx, flush=True)
            if msg is None:
                print("breaking", flush=True)
                break

            return_data = {"client_index": str(idx), "data": msg}
            await ws_client.write_message(return_data)
            # await self.write_message(return_data)

    @gen.coroutine
    def post(self):
        """
            - starts containers and returns list of active containers
            - browser client start subscribing to active container streams via websockets 
        """

        client = httpclient.AsyncHTTPClient()
        headers = {"Content-Type": "application/json"}
        data = json.loads(self.request.body.decode('utf-8'))
        configs = data["configs"]["configurations"]
        return_data = []
        method = "POST"

        for i, config in enumerate(configs):

            if len(self.application.sim.ws_clients) <= i:
                return self.finish(
                    {'error': True, 'data': "not enough ws clients."})
            
            name = "localhost"
            if not settings.configs["testing"]:
                name = config["container_info"]["name"]
            port = config["container_info"]["ports"].split(",")[
                0].split("/")[0]

            ws_url = "ws://"+name+":"+port+"/ws"
            http_url = "http://"+name+":"+port+"/timer"
            if "capfile" in config["configs"]:
                http_url = "http://"+name+":"+port+"/capture"

            if data["command"] == "stop":

                response = yield client.fetch(
                    http_url,
                    method="DELETE",
                    headers=headers,
                )
                json_data = json.loads(response.body)
                return_data.append(json_data)

            elif data["command"] == "start":

                # setup websocket connection
                conn = yield websocket.websocket_connect(ws_url)
                ws_client = self.application.sim.ws_clients[i]
                ioloop.IOLoop.instance().add_callback(
                    callback=lambda: self.proxy_loop(conn, ws_client))

                try:
                    response = yield client.fetch(
                        http_url,
                        method=method,
                        headers=headers,
                        allow_nonstandard_methods=True,
                        body=json.dumps({}),
                    )
                    json_data = json.loads(response.body)
                    return_data.append(json_data)
                except:
                    print("catching error: services stopped")
            else:
                return self.finish(
                    {'error': True, 'data': "command not found"})

        return self.finish({'error': False, 'data': return_data})


class WebSocketProxy():
    def __init__(self):
        self.ws_clients = []

    def add_ws_clients(self, client, client_index):
        if len(self.ws_clients) != int(client_index):
            print("adding ws client has wrong index", len(
                self.ws_clients), client_index, flush=True)
        self.ws_clients.append(client)

    def remove_ws_clients(self, client):
        self.ws_clients.remove(client)


class CommWebSocket(websocket.WebSocketHandler):

    async def open(self, *args, **kwargs):
        url_parts = [x for x in self.request.path.split("/") if x]
        client_index = url_parts[3]
        self.application.sim.add_ws_clients(self, client_index)
        return

    def on_message(self, message):
        print("controller simulation received: ", message, flush=True)

    def on_close(self):
        self.application.sim.remove_ws_clients(self)


class StaticSimulation(web.RequestHandler):

    # open picture with automatic odering 
    def open_picture(self, picture_number, path_sorted):
        img_old = cv2.imread(path_sorted[picture_number])
        return img_old

    def save_picture(self, img_write, storage_path):
        cv2.imwrite(storage_path, img_write)

    def store_file(self, path, filename, number_original, number_tampered):
        text_file = open(path+filename, "w")
        text_file.write("natural_img: %s \r" % number_original)
        text_file.write("tempered_img: %s \r" % number_tampered)
        text_file.close()

    # transforms images to black
    def cover_black(self, img_old):
        img_new = img_old*[0]
        return img_new

    # transforms images to black
    def cover_white(self, img_old):
        img_new = img_old*[255]
        return img_new

    # transform image and add blur
    def defocus(self, img_old,ksize):
        img_new = cv2.blur(img_old,(ksize,ksize))
        return img_new

    @gen.coroutine
    def post(self):

        data = json.loads(self.request.body.decode('utf-8'))
        configs = data["configs"]["configurations"][0]
        attack = configs["attack"]
        samples = configs["attack_samples"]
        dataset = configs["dataset"].split(":")
        folder_in = dataset[0]
        number_files = int(dataset[1])

        dir_path = os.path.dirname(os.path.realpath(__file__))
        base_path = dir_path+"/../static_files/camera1/argoverse/argoverse-tracking/train1/6f153f9c-edc5-389f-ac6f-40705c30d97e/"
        folder_path = base_path+folder_in
        output_folder = dir_path+"/../static_files/camera1/argoverse_results/"+folder_in+"-"+attack+"__0/"

        if "filename" in data:

            # download single file
            filename = data["filename"]
            with open(output_folder+filename, 'rb') as fin:
                self.write(fin.read())

            return self.finish({"error": False, "data": "File has been downloaded."})

        else:

            # start simulation
            file_written = False
            while not file_written:
                if not os.path.exists(output_folder):
                    os.makedirs(output_folder)
                    file_written = True
                else:
                    remainder = output_folder.split("__")
                    increment = str(int(output_folder.split("__")[1].split("/")[0])+1)+"/"
                    output_folder = remainder[0]+"__"+increment

            path_sorted = glob.glob(folder_path+'/*.*')

            # is applied as n-by-n
            blurring_filter_size = 50

            # Calculate ground truth
            natural_img = np.zeros(number_files - samples, int) #
            tempered_img = np.ones(samples, int)
            ground_truth = np.concatenate((natural_img, tempered_img))

            for x in range(0, number_files):
                img_old = self.open_picture(x, path_sorted)

                # keep picture or apply tampering (blacking, whitening)
                if not (img_old is None):
                    label = "original"
                    if x < len(natural_img):
                        img_write = img_old
                    else:
                        label = "attacked"
                        if attack == "blacking":
                            img_write = self.cover_black(img_old)
                        if attack == "whitening":
                            img_write = self.cover_white(img_old)
                        if attack == "blurring":
                            img_write = self.defocus(img_old, blurring_filter_size)

                    storage_path = output_folder+"{:010d}".format(x)+'.png'
                    self.save_picture(img_write, storage_path)
                    for client in self.application.sim.ws_clients:
                        filename = storage_path.split("/")[-1]
                        client.write_message({"filename": filename, "label": label})

            # check if we need this
            self.store_file(output_folder, "Info.txt", str(len(natural_img)), str(len(tempered_img)))

            return self.finish({'error': False, 'data': "Simulation ended."})

    def delete(self):

        data = json.loads(self.request.body.decode('utf-8'))
        configs = data["configs"]["configurations"][0]
        attack = configs["attack"]
        dataset = configs["dataset"].split(":")
        folder_in = dataset[0]

        # get paths to all folders
        dir_path = os.path.dirname(os.path.realpath(__file__))
        output_folder = dir_path+"/../static_files/camera1/argoverse_results/"+folder_in+"-"+attack+"__0/"
        # os.removedirs(output_folder)
        shutil.rmtree(output_folder, ignore_errors=True)
        return self.finish({'error': False, 'data': "Folder removed."})


class StaticWebSocket(websocket.WebSocketHandler):

    async def open(self):
        self.application.sim.add_ws_clients(self, 0)
        return

    def on_message(self, message):
        print("controller simulation received: ", message, flush=True)

    def on_close(self):
        self.application.sim.remove_ws_clients(self)


class DrivesimSimulation(web.RequestHandler):

    @gen.coroutine
    def post(self):
        pass


class DrivesimWebSocket(websocket.WebSocketHandler):

    async def open(self, *args, **kwargs):
        url_parts = [x for x in self.request.path.split("/") if x]
        client_index = url_parts[2]
        self.application.sim.add_ws_clients(self, client_index)
        return

    def on_message(self, message):
        print("controller simulation received: ", message, flush=True)

    def on_close(self):
        self.application.sim.remove_ws_clients(self)
