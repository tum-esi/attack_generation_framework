import sys, os
import glob
import settings
settings.init(sys.argv)
import requests
from tornado import ioloop, web, options, websocket
from datetime import datetime
from datetime import timedelta
import threading
import container_handlers as ch
import database as db
import simulation as sim
import recovery as rec
import datasets as ds
import local as tst
import threading
import asyncio

# testMode = True switches the adresses to local host
testMode = False

options.define("port", default=settings.configs["http_port"], help="Run on the given port", type=int)
staticFolder = "frontend/build"
frontendPath = os.path.abspath(os.path.dirname(__file__))+'/'+staticFolder

class StaticHandler(web.StaticFileHandler):

    def get(self, path, include_body=True):
        self.absolute_path = os.path.abspath(os.path.join(self.root, path))

        mimetype = path.split(".")[-1]
        if mimetype == "css":
            self.set_header("Content-Type", "text/css")
        if mimetype =="js":
            self.set_header("Content-Type", "text/javascript")
        if mimetype == "png":
            self.set_header("Content-Type", "image/png")
        if mimetype == "svg":
            self.set_header("Content-Type", "image/svg+xml")

        with open(frontendPath +"/"+ path, 'rb') as file:
            self.write(file.read())


class RootHandler(web.RequestHandler):

    def get(self):
        with open(frontendPath + "/index.html", 'r') as file:
            self.write(file.read())


def createHandlers():
    return [
        web.url(r'/',                              RootHandler),

        web.url(r'/images',                        ch.Images),
        web.url(r'/containers',                    ch.Containers),
        web.url(r'/containers/(.*)',               ch.ContainerHandler),
        web.url(r'/networks',                      ch.Networks),
        web.url(r'/volumes',                       ch.Volumes),
        web.url(r'/repositories',                  ch.Repositories),
        web.url(r'/staticfiles',                   ch.StaticFiles),

        web.url(r'/localservices',                 tst.Repos),
        web.url(r'/localservices/(.*)',            tst.Configs),

        web.url(r'/api/(.*)',                      db.API),
        web.url(r'/allapi',                        db.GetDBCollections),

        web.url(r'/simulation/comm',               sim.CommSimulation),
        web.url(r'/simulation/comm/ws/(.*)',       sim.CommWebSocket),

        web.url(r'/simulation/static',             sim.StaticSimulation),
        web.url(r'/simulation/static/ws',          sim.StaticWebSocket),

        web.url(r'/simulation/drivesim',           sim.DrivesimSimulation),
        web.url(r'/simulation/drivesim/ws/(.*)',   sim.DrivesimWebSocket),

        web.url(r'/datasets/(.*)',                 ds.GridFs),
        web.url(r'/capfile/(.*)',                  ds.CapFiles),
        web.url(r'/staticfolders/(.*)',            ds.StaticDatasetsModels),
        web.url(r'/staticanalysis/(.*)',           ds.AnalysisLDA),

        web.url(r'/checkpoints',                   rec.CheckPoints),
        web.url(r'/snapshots/(.*)',                rec.SnapShots),
        web.url(r'/logfiles/(.*)',                 rec.LogFiles),
        web.url(r'/gridfs/(.*)',                   rec.GridFs),
        web.url(r'/download/(.*)',                 rec.Download),
        web.url(r'/tars/(.*)',                     web.StaticFileHandler, {'path': "/tars"}),
        web.url(r'/recovery/(.*)',                 rec.RollBack),
        web.url(r'/data/(.*)',                     rec.Data),

        web.url(r'/(.*)',                          StaticHandler, {'path': staticFolder}),
    ]

def start_webserver(web_app, port, addr, carla_webserver):

    asyncio.set_event_loop(asyncio.new_event_loop())

    # Startup server listening on specified port
    web_app.listen(port, addr)
    print("Tornado listen port: ", port, ", address: ", addr)

    # change instance to current if data controller loop starts in advance
    ioloop.IOLoop.instance().start()

if __name__ == "__main__":

    # arg parsing
    options.parse_command_line()
    port = options.options.port
    web_addr = settings.configs["http_address"]

    # Turn debug on to have Tornado restart when you change this file
    # Recommended when you're developing. Dont forget to remove it
    # when you put this in production
    handlers = createHandlers()
    web_app = web.Application(handlers, debug = True)
    web_app.sim = sim.WebSocketProxy()

    # bridge to carla configs
    path = "/home/jpfw/Code/github.com/carla-simulator/carla/PythonAPI/carla/dist/carla-0.9.11-py3.7-linux-x86_64.egg"
    sys.path.append(glob.glob(path)[0])

    # bridge classes
    import bridge.carla.core.DataController as carlaDC
    import bridge.carla.api.APIController as carlaAPI
    c = carlaDC.DataController("0.0.0.0", 2000)
    carla_webserver = carlaAPI.APIController(c, web_app)
    
    # bridge handlers
    import bridge.carla.api.ConfigHandler as CH
    import bridge.carla.api.VehicleControlHandler as VCH
    web_app.add_handlers(r"(.*?)", [(r'/config', CH.ConfigHandler, dict(controller=carla_webserver))])
    web_app.add_handlers(r"(.*?)", [(r'/control', VCH.VehicleControlHandler, dict(controller=carla_webserver))])
    
    # launch bridge threat
    c.start_simulation()

    # launch webserver threat
    webserver_thread = threading.Thread(target=start_webserver(web_app, port, web_addr, carla_webserver), daemon=True)
    webserver_thread.start()
