from tornado import web, gen, httpclient
import socket
import json

class Repos(web.RequestHandler):

    @gen.coroutine
    def get(self):
        return_data = []

        for port in range(8010, 8040):
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                if s.connect_ex(('localhost', port)) == 0:

                    client = httpclient.AsyncHTTPClient()
                    response = yield client.fetch(
                        "http://localhost:"+str(port)+"/servicename",
                        method='GET',
                        headers={"Content-Type": "application/json"},
                    )

                    json_data = json.loads(response.body)
                    return_data.append({"short_id": str(port), "ports": str(port), "name": json_data["data"]["servicename"]})

        return self.finish({'error': True, 'data': return_data})


class Configs(web.RequestHandler):
    ''' /localservices/service_name/service_port/handler '''

    @gen.coroutine
    def get(self, *args, **kwargs):
        url_parts = [x for x in self.request.path.split("/") if x]
        handler = url_parts[-1]
        name = url_parts[1]
        port = url_parts[2]

        client = httpclient.AsyncHTTPClient()
        response = yield client.fetch(
            "http://localhost:"+port+"/"+handler,
            method='GET',
            headers={"Content-Type": "application/json"},
        )
        json_data = json.loads(response.body)
        print(json_data)
        self.finish({'error': True, 'data': json_data})

    @gen.coroutine
    def put(self, *args, **kwargs):
        # if data = json.loads(self.request.body.decode('utf-8')), make sure to json.dumps() when sending in body of new async http request
        url_parts = [x for x in self.request.path.split("/") if x]
        handler = url_parts[-1]
        port = url_parts[2]

        client = httpclient.AsyncHTTPClient()
        response = yield client.fetch(
            "http://localhost:"+port+"/"+handler,
            method='PUT',
            headers={"Content-Type": "application/json"},
            body=self.request.body
        )
        json_data = json.loads(response.body)
        print(json_data)
        self.finish({'error': True, 'data': json_data})
