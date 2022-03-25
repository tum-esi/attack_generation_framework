from tornado import web, ioloop, gen, websocket
from datetime import datetime
import socket
import json
import glob
import requests
import time, threading
from tornado.concurrent import run_on_executor
from concurrent.futures import ThreadPoolExecutor
import asyncio

from scapy.all import *
import subprocess
import signal
from collections import Counter
import os

# subprocess.run('whoami') # check for executing user


class ServiceName(web.RequestHandler):

    def get(self):
        return self.finish({"error": False, "data": { "servicename": "receiver" } })


class CaptureManager():
    def __init__(self):
        
        # parameters
        self.hostname = socket.gethostname()
        self.hostIP = socket.gethostbyname(self.hostname)
        self.protocols = ["http"]
        self.received = []

        # capture configuration
        self.interface = "lo" # eth0 or lo or localhost
        self.default_location = "/tmp"
        self.capfile = self.default_location+"/data-receiver.cap"
        self.capfile_limit = 3
        self.ring_buffer_duration = 5 # in seconds
        self.duration_limit = 12 # in seconds

        # detection configuration
        self.activate_detection = False
        self.msg_number_handshake = 8 # number of messages per handshake
        self.tolerance = 2 # in factor

        # detector scheduling
        self.detector_interval = 0.1
        self.counter = 1
        self.detect_scheduler = ioloop.PeriodicCallback(None, self.detector_interval)

    def get(self):
        """
            - return capture folder with list of files to download/show
        """
        capfile_names = [{"name": x.path.split("/")[-1]} for x in os.scandir(self.default_location)]
        return self.finish({'error': False, 'data': capfile_names})

    def post(self):
        """
            - download capture file
            - /campturemanager/filename
        """
        url_parts = [x for x in self.request.path.split("/") if x]
        file_name = url_parts[2]
        # buf_size = 4096
        location = self.default_location+"/"+file_name
        self.set_header('Content-Type', 'application/octet-stream')
        self.set_header('Content-Disposition', 'attachment; filename=' + file_name)

        with open(location, 'rb') as fin:
            # data = io.BytesIO(fin.read())
            self.write(fin.read())
        return self.finish()

class Configs(web.RequestHandler):

    def get(self):
        return self.finish({
            "error": False, 
            "data": 
            {
                "interface": self.application.cm.interface,
                "ring_buffer_duration": self.application.cm.ring_buffer_duration,
                "duration_limit": self.application.cm.duration_limit,
                "capfile": self.application.cm.capfile,
                "capfile_limit": self.application.cm.capfile_limit,

                "activate_detection": self.application.cm.activate_detection,
                "msg_number_handshake": self.application.cm.msg_number_handshake,
                "tolerance": self.application.cm.tolerance,
                "detector_interval": self.application.cm.detector_interval,
            }
        })

    def put(self):
        data = json.loads(self.request.body.decode('utf-8'))
        if "interface" in data:
            self.application.cm.interface = data["interface"]
        if "ring_buffer_duration" in data:
            self.application.cm.ring_buffer_duration = data["ring_buffer_duration"]
        if "duration_limit" in data:
            self.application.cm.duration_limit = data["duration_limit"]
        if "capfile" in data:
            self.application.cm.capfile = data["capfile"]
        if "capfile_limit" in data:
            self.application.cm.capfile_limit = data["capfile_limit"]
        if "activate_detection" in data:
            self.application.cm.activate_detection = data["activate_detection"]
        if "msg_number_handshake" in data:
            self.application.cm.msg_number_handshake = data["msg_number_handshake"]
        if "tolerance" in data:
            self.application.cm.tolerance = data["tolerance"]
        if "detector_interval" in data:
            self.application.cm.detector_interval = data["detector_interval"]
        return self.finish({"error": False, "data": "new values set"})


class StartCapture(web.RequestHandler):
    executor = ThreadPoolExecutor(max_workers=4)

    @run_on_executor
    def tshark_capture(self):

        comand = "tshark --autostop duration:"+str(self.application.cm.duration_limit)+" -i "+self.application.cm.interface+" --ring-buffer files:"+str(self.application.cm.capfile_limit)+" --ring-buffer duration:"+str(self.application.cm.ring_buffer_duration)+" -w "+self.application.cm.capfile
        try:
            # self.pid = subprocess.Popen(comand.split(), stdout=subprocess.PIPE, 
                # shell=True, preexec_fn=os.setsid)
            completed_process = subprocess.run(comand.split())
            # self.change_permission()
            return completed_process.returncode
        except subprocess.CalledProcessError as e:
            return str(e)

    @run_on_executor
    def change_permission(self):
        import glob
        # path = self.application.cm.capfile.split(".cap")[0]
        search_string = self.application.cm.capfile.replace(".", "*.")
        paths = glob.glob(search_string)
        results = []
        for path in paths:
            print(path, flush=True)
            # self.application.cm.capfile
            command = 'chmod 777 ' + path
            try:
                completed_process = subprocess.run(command.split())
                results.append(completed_process.returncode)
            except subprocess.CalledProcessError as e:
                results.append(str(e))
        return results

    @gen.coroutine
    def post(self):
        self.application.cm.received = []

        # detector
        if self.application.cm.activate_detection:
            self.application.cm.counter = 1
            self.application.cm.detect_scheduler = ioloop.PeriodicCallback(self.detector_loop, self.application.cm.detector_interval)
            self.application.cm.detect_scheduler.start()

        # capture for duration
        yield self.tshark_capture()


        # change file access rights
        self.change_permission()

        return self.finish({"data": "started/finished capturing service: "+self.application.cm.hostname})

    @gen.coroutine
    def detector_loop(self):
        import glob

        extr_list=[]

        path = self.application.cm.capfile.split(".")[0]

        file_path=glob.glob( path+'_{:0>5}*.cap'.format(self.application.cm.counter))
        file_p1=glob.glob( path+'_{:0>5}*.cap'.format(self.application.cm.counter+1))
        if len(file_p1)>0:
            file_path=file_path[0]

            t = time.time()
            scapy_cap = rdpcap(file_path) # for analysing every captured file

            for packet in scapy_cap:
                try:
                    extr_list.append(packet[IP].src)
                except:
                    pass

            # START implementation O(n)
            # This could be a more efficent way to find dublicates:
            # https://stackoverflow.com/questions/46554866/efficiently-finding-duplicates-in-a-list  
            capture_count = Counter(extr_list)

            # calculate threshold
            thresh = 4*self.application.cm.ring_buffer_duration*self.application.cm.msg_number_handshake*self.application.cm.tolerance
            t_response_ges = 0

            print("threshold:", thresh, flush=True)
            print("capture_count", capture_count, flush=True)
            
            # stop = False
            for i in capture_count: 
                if capture_count[i] > thresh:
                    t_response = time.time()

                    # block IPadress with IPTables
                    # comand = "iptables -I INPUT -s "+str(i)+" -j DROP"
                    # process = subprocess.run(comand.split())
                    # print(str(i) +", attack detected, blocking IP\n", flush=True)
                    
                    t_response_ges = t_response_ges + time.time() - t_response

                    for client in self.application.wsm.ws_clients:
                        time_resp_ms = t_response_ges * 1000
                        print("attack detected: time_resp_ms", time_resp_ms, flush=True)
                        data = {"status": "attack detected", "total_time": time_resp_ms}
                        client.write_message({"origin": "receiver", "receive_time": json.dumps(data)})
                        self.application.cm.detect_scheduler.stop()
            
            delta_time = time.time() - t # detection time

            # increment counter, adjust counter in time if there was an Attack handling of significant length
            self.application.cm.counter += int(1+(delta_time+t_response_ges)/self.application.cm.ring_buffer_duration)

            for client in self.application.wsm.ws_clients:
                time_ms = round(delta_time * 1000)
                time_total_ms = round(t_response_ges * 1000)
                data = { "counter": self.application.cm.counter, "detection time": time_ms, "delta_time": delta_time, "total_time": time_total_ms, "threshold": thresh, "capture_count": len(scapy_cap), "capture counter": capture_count }
                client.write_message({"origin": "receiver", "receive_time": json.dumps(data)})

            # if stop:
            #     # client.write_message({"status": "protocol finished"})
            #     self.application.cm.detect_scheduler.stop()

            return

    # @gen.coroutine
    # def post(self):
    #     res = yield self.resetIpTables()
    #     self.application.cm.counter = 1
    #     self.application.cm.detect_scheduler = ioloop.PeriodicCallback(self.detector_loop, self.application.cm.detector_interval)
    #     self.application.cm.detect_scheduler.start()
    #     for client in self.application.wsm.ws_clients:
    #         client.write_message({"status": "detector started"})
    #     return self.finish({'error': False, "data": "started detector service: "+self.application.cm.hostname})

    @gen.coroutine
    def delete(self):
        self.application.cm.detect_scheduler.stop()
        for client in self.application.wsm.ws_clients:
            client.write_message({"status": "protocol stopped"})
        # res = yield self.resetIpTables()
        # print(res, "reset ip-tables")
        return self.finish({'error': False, "data": "stopped detector service: "+self.application.cm.hostname})
    
    @run_on_executor
    def resetIpTables(self):
        returncode = subprocess.call(['sh', '/tornado/firewall.sh'])
        return returncode


class WebSocketManager():
    def __init__(self):
        self.ws_clients = []

    def add_ws_clients(self, client):
        self.ws_clients.append(client)

    def remove_ws_clients(self, client):
        self.ws_clients.remove(client)


class WebSocket(websocket.WebSocketHandler):

    def open(self):
        self.application.wsm.add_ws_clients(self)

    def on_message(self, message):
        print("receiver ws message: ", message)

    def on_close(self):
        self.application.wsm.remove_ws_clients(self)


class Receive(web.RequestHandler):

    def post(self):
        if len(self.application.wsm.ws_clients) < 1:
            return self.finish({"error": True, "data": "no websocket subscription"})

        data = json.loads(self.request.body.decode('utf-8'))
        arrival = {
            "origin": data["host"],
            "receive_time": datetime.now().strftime("%d-%b-%Y (%H:%M:%S:%f)")
        }
        for client in self.application.wsm.ws_clients:
            client.write_message(arrival)

        self.application.cm.received.append(arrival)
        return self.finish(arrival)


if __name__ == "__main__":

    with open("config.json") as f:
        configs = json.load(f)

    io_loop = ioloop.IOLoop.instance()
    handlers = [
        web.url(r'/servicename',ServiceName),
        web.url(r'/configs',    Configs),
        web.url(r'/capture',    StartCapture),
        web.url(r'/capturemanager/(.*)',   CaptureManager),
        web.url(r'/receive',    Receive),
        web.url(r'/ws',         WebSocket),
    ]

    application = web.Application(handlers, debug=True)
    application.cm = CaptureManager()
    application.wsm = WebSocketManager()
    application.listen(configs["http_port"], configs["http_address"])
    print("Tornado has started at: ", configs["http_port"], " with address: ", configs["http_address"])
    ioloop.IOLoop.instance().start()
