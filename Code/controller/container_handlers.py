import json
import threading
from tornado import gen, web
import os
import settings
import docker
import subprocess
import glob

class StaticFiles(web.RequestHandler):

    def get(self):
        try:
            dir_path = os.path.dirname(os.path.realpath(__file__))
            static_path = dir_path+"/../static_files/camera1/argoverse/argoverse-tracking/train1/6f153f9c-edc5-389f-ac6f-40705c30d97e/*"
            return_data = []
            for path in glob.glob(static_path):
                folder = path.split("/")[-1]
                if ".json" not in folder:
                    number_files = str(len(glob.glob(path+"/*")))
                    return_data.append(folder+":"+number_files)
            return self.finish({'error': False, 'data': return_data})
        except:
            return self.finish({'error': True, 'data': None})


class Worker(threading.Thread):
   def __init__(self, callback=None, arguments=None, *args, **kwargs):
        super(Worker, self).__init__(*args, **kwargs)
        self.callback = callback
        self.arguments = arguments

   def run(self):
        print(self.arguments, flush=True)
        response = [line for line in settings.client.images.build(path="/repositories/"+self.arguments[0], rm=True, tag=self.arguments[1]+":"+self.arguments[2])]
        self.callback(response)


class Images(web.RequestHandler):

    def get(self):
        images = settings.client.images.list()
        data = []
        for image in images:
            tag = "no-tag"
            if len(image.tags) > 0:
                tag = image.tags[0]
            data.append({'short_id': image.short_id, 'tag': tag})
        return self.finish({'error': False, 'data': data})

    def worker_done(self, value):
        # store result in build database as log
        pass

    @gen.coroutine
    def post(self):
        data = json.loads(self.request.body.decode('utf-8'))
        Worker(callback=self.worker_done, arguments=[data["repo"], data["tag"], data["version"]]).start()
        return self.finish({'error': False, 'data': "image build running."})

    def delete(self):
        data = json.loads(self.request.body.decode('utf-8'))
        try:
            settings.client.images.remove(data["short_id"])
            return self.finish({'error': False, 'data': None})
        except docker.errors.APIError as e:
            return self.finish({'error': True, 'data': str(e)})


class Networks(web.RequestHandler):

    def get(self):
        networks = settings.client.networks.list()
        data = []
        for net in networks:
            data.append({'short_id': net.short_id, 'name': net.name})
        return self.finish({'error': False, 'data': data})

    def post(self):
        data = json.loads(self.request.body.decode('utf-8'))
        try:
            settings.client.networks.create(data["name"], driver=data["driver"], attachable=data["attachable"])
            return self.finish({'error': False, 'data': None})
        except docker.errors.APIError as e:
            return self.finish({'error': True, 'data': str(e)})

    def delete(self):
        data = json.loads(self.request.body.decode('utf-8'))
        try:
            net = settings.client.networks.get(data["short_id"])
            net.remove()
            return self.finish({'error': False, 'data': None})
        except docker.errors.APIError as e:
            return self.finish({'error': True, 'data': str(e)})


class Volumes(web.RequestHandler):

    def get(self):
        volumes = settings.client.volumes.list()
        data = []
        for vol in volumes:
            data.append({'short_id': vol.short_id, 'name': vol.name})
        return self.finish({'error': False, 'data': data})

    def post(self):
        data = json.loads(self.request.body.decode('utf-8'))
        try:
            print("try creating volume", flush=True)
            settings.client.volumes.create(data["name"])
            return self.finish({'error': False, 'data': None})
        except docker.errors.APIError as e:
            return self.finish({'error': True, 'data': str(e)})

    def delete(self):
        data = json.loads(self.request.body.decode('utf-8'))
        try:
            vol = settings.client.volumes.get(data["short_id"])
            vol.remove()
            return self.finish({'error': False, 'data': None})
        except docker.errors.APIError as e:
            return self.finish({'error': True, 'data': str(e)})


class ContainerHandler(web.RequestHandler):
    ''' /containers/container_name/container_port/handler '''

    def get(self, *args, **kwargs):
        url_parts = [x for x in self.request.path.split("/") if x]
        handler = "heartbeat"
        if len(url_parts) > 3:
            handler = url_parts[-1]
        container_name = url_parts[1]
        command = "curl -X GET -s http://"+container_name+":"+url_parts[2]+"/"+handler
        
        try:
            container = settings.client.containers.get(container_name)
            res = container.exec_run(command)
            if res.exit_code == 0:
                return self.finish({"error": False, "data": json.loads(res.output.decode("utf-8"))})
            else:
                return self.finish({'error': True, 'data': json.loads(res.output.decode("utf-8"))})
        except docker.errors.APIError as e:
            return self.finish({'error': True, 'data': str(e)})

    def post(self, *args, **kwargs):
        data = json.loads(self.request.body.decode('utf-8'))
        url_parts = [x for x in self.request.path.split("/") if x]
        if len(url_parts) > 3:
            handler = url_parts[-1]
            container_name = url_parts[1]
            command = "curl -X POST -s -H 'Content-Type: application/json' --data '"+json.dumps(data)+"' http://"+container_name+":"+url_parts[2]+"/"+handler
            container = settings.client.containers.get(container_name)
            res = container.exec_run(command)
            if res.exit_code == 0:
                return self.finish({"error": False, "data": json.loads(res.output.decode("utf-8"))})
            else:
                return self.finish({'error': True, 'data': json.loads(res.output.decode("utf-8"))})
        else:
            return self.finish({'error': True, 'data': 'container handler missing'})

    def put(self, *args, **kwargs):
        data = json.loads(self.request.body.decode('utf-8'))
        url_parts = [x for x in self.request.path.split("/") if x]
        if len(url_parts) > 3:
            handler = url_parts[-1]
            container_name = url_parts[1]
            command = "curl -X PUT -s -H 'Content-Type: application/json' --data '"+json.dumps(data)+"' http://"+container_name+":"+url_parts[2]+"/"+handler
            container = settings.client.containers.get(container_name)
            res = container.exec_run(command)
            if res.exit_code == 0:
                return self.finish({"error": False, "data": json.loads(res.output.decode("utf-8"))})
            else:
                return self.finish({'error': True, 'data': json.loads(res.output.decode("utf-8"))})
        else:
            return self.finish({'error': True, 'data': 'container handler missing'})


class Containers(web.RequestHandler):

    def get(self):
        containers = settings.client.containers.list()
        data = []
        for conti in containers:
            ports = ""
            if "Config" in conti.attrs:
                if "ExposedPorts" in conti.attrs["Config"]:
                    for port in conti.attrs['Config']['ExposedPorts'].keys():
                        ports += port+","
            data.append({'short_id': conti.short_id, 'name': conti.name, 'ports': ports})
        return self.finish({'error': False, 'data': data})

    def post(self):
        data = json.loads(self.request.body.decode('utf-8'))

        ports = {}
        port_list = data["ports"].split(",")
        for port in port_list:
            port_map = port.split(":")
            ports[port_map[0]+'/tcp'] = port_map[1]

        volumes = {}
        if data["volumes"] != "":
            vol_list = data["volumes"].split(",")
            for vol in vol_list:
                vol_map = vol.split(":")
                volumes[vol_map[0]] = {"bind": vol_map[1], "mode": "rw"}
        try:
            settings.client.containers.run(data["image"], name=data["name"], network=data["network"], volumes=volumes, ports=ports, detach=True, privileged=data["privileged"])
            return self.finish({'error': False, 'data': None})
        except docker.errors.APIError as e:
            return self.finish({'error': True, 'data': str(e)})

    def put(self):
        data = json.loads(self.request.body.decode('utf-8'))
        try:
            container = settings.client.containers.get(data["short_id"])
            status = container.status
            if status == "running":
                container.stop()
            if status == "exited":
                container.start()
            return self.finish({'error': False, 'data': None})
        except docker.errors.APIError as e:
            return self.finish({'error': True, 'data': str(e)})

    def delete(self):
        data = json.loads(self.request.body.decode('utf-8'))
        try:
            container = settings.client.containers.get(data["short_id"])
            container.stop()
            container.remove()
            return self.finish({'error': False, 'data': None})
        except docker.errors.APIError as e:
            return self.finish({'error': True, 'data': str(e)})


class Repositories(web.RequestHandler):

    def get(self):
        try:
            dirs = [{"name": x.path.split("/")[-1]} for x in os.scandir("/repositories")]
            return self.finish({'error': False, 'data': dirs})
        except:
            return self.finish({'error': True, 'data': None})
