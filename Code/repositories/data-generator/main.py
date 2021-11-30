from tornado import web, ioloop, httpclient, gen, websocket
from datetime import datetime, timedelta
from tornado.escape import json_decode, json_encode
import socket
import json
import requests
import subprocess
import argparse
import time
import asyncio

class ServiceName(web.RequestHandler):

    def get(self):
        return self.finish({"error": False, "data": { "servicename": self.application.tm.name } })


class TimeManager():

    def __init__(self, name):
        self.name = name
        
        # server params
        self.hostname = socket.gethostname()
        self.hostIP = socket.gethostbyname(self.hostname)
        self.msg_counter = 0
        self.protocols = ["http"]

        # scheduling configs
        self.duration = 10 # in seconds
        self.interval = 1000 # callback time is in milliseconds, this means: 1000 = 1s
        self.delay = 0 # in seconds, required: delay < duration
        self.jitter = 0 # jitter of 0.1 means allowing a 10% variation in callback time
        self.scheduler = ioloop.PeriodicCallback(None, self.interval, self.jitter) # check if scheduler runs with: scheduler.is_running()
        self.target = "" # example target: http://receiver:8020/receive


class Configs(web.RequestHandler):

    def get(self):
        return self.finish({
            "error": False, 
            "data": 
            {
                "duration": self.application.tm.duration, 
                "target": self.application.tm.target, 
                "interval": self.application.tm.interval, 
                "delay": self.application.tm.delay, 
                "jitter": self.application.tm.jitter,
            } 
        })

    def put(self):
        decoded = self.request.body.decode('utf-8')
        data = json.loads(decoded)
        if "duration" in data:
            self.application.tm.duration = data["duration"]
        if "target" in data:
            self.application.tm.target = data["target"]
        if "interval" in data:
            self.application.tm.interval = data["interval"]
        if "delay" in data:
            self.application.tm.delay = data["delay"]
        if "jitter" in data:
            self.application.tm.jitter = data["jitter"]
        return self.finish({"error": False, "data": "new values set"})


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
        print("datagen server received: ", message)

    def on_close(self):
        self.application.wsm.remove_ws_clients(self)


class Timer(web.RequestHandler):

    async def start_loop(self):
        await asyncio.sleep(self.application.tm.delay)
        self.application.tm.scheduler.start()

    @gen.coroutine
    def post(self):
        """
            - starting periodic timer
            - starting transmission to receivers
            - send status message to websocket clients
        """

        if len(application.wsm.ws_clients) < 1:
            return self.finish({"error": True, "data": "require at least 1 websocket connection"})
        self.application.tm.scheduler = ioloop.PeriodicCallback(self.periodicCallback, self.application.tm.interval, self.application.tm.jitter)
        self.application.tm.msg_counter = 0
        self.application.tm.start_time = datetime.now()
        
        ioloop.IOLoop.instance().add_callback(
            callback=lambda: self.start_loop())

        for client in self.application.wsm.ws_clients:
            client.write_message({"status": "protocol started"})

        return self.finish({"error": False, "data": "started service: "+self.application.tm.hostname})

    def put(self):
        """
            - restart periodic timer
            - restart transmission to receivers
            - send status message to websocket clients
        """

        if len(application.wsm.ws_clients) < 1:
            return self.finish({"error": True, "data": "require at least 1 websocket connection"})
        self.application.tm.msg_counter = 0
        self.application.tm.scheduler.stop()
        self.application.tm.scheduler = ioloop.PeriodicCallback(self.periodicCallback, self.application.tm.interval, self.application.tm.jitter)
        self.application.tm.start_time = datetime.now()
        self.application.tm.scheduler.start()

        for client in self.application.wsm.ws_clients:
            client.write_message({"status": "protocol restarted"})

        return self.finish({"error": False, "data": "restarted service: "+self.application.tm.hostname})

    def delete(self):
        """
            supposed to stop the service
        """
        self.application.tm.msg_counter = 0
        self.application.tm.scheduler.stop()
        self.application.tm.scheduler = ioloop.PeriodicCallback(self.periodicCallback, self.application.tm.interval, self.application.tm.jitter)

        for client in self.application.wsm.ws_clients:
            client.write_message({"status": "protocol finished"})
            client.close()

        return self.finish({"error": False, "data": "stopped service: "+self.application.tm.hostname})

    @gen.coroutine
    def periodicCallback(self):

        # send request to target
        http_client = httpclient.AsyncHTTPClient()
        body = {
            'send_time': datetime.now().strftime("%d-%b-%Y (%H:%M:%S:%f)"),
            'msg_counter': str(self.application.tm.msg_counter),
            'host': self.application.tm.name
        }
        # websocket
        for client in self.application.wsm.ws_clients:
            client.write_message(body)
        
        response = yield http_client.fetch(self.application.tm.target, method='POST', body=json_encode(body))
        json_data = json.loads(response.body)
        self.application.tm.msg_counter += 1
        
        # check timer
        time_delta = (datetime.now()-self.application.tm.start_time).total_seconds()
        if time_delta > self.application.tm.delay:
            if time_delta > self.application.tm.duration:
                self.application.tm.scheduler.stop()
                # close all websocket channels
                for client in self.application.wsm.ws_clients:
                    client.write_message({"status": "protocol finished"})
                    client.close()


if __name__ == "__main__":

    parser = argparse.ArgumentParser()
    parser.add_argument('--config', help='name of config file')
    args = parser.parse_args()

    with open(args.config) as f:
        configs = json.load(f)

    handlers = [
        web.url(r'/servicename',    ServiceName), # dict(name=configs["servicename"])
        web.url(r'/configs',        Configs),
        web.url(r'/timer',          Timer),
        web.url(r'/ws',             WebSocket),
    ]
    application = web.Application(handlers, debug=True)
    application.tm = TimeManager(configs["servicename"])
    application.wsm = WebSocketManager()
    application.listen(configs["http_port"], configs["http_address"])
    print("Tornado has started at: ", configs["http_port"], " with address: ", configs["http_address"])
    ioloop.IOLoop.instance().start()
