import sys, os
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


if __name__ == "__main__":

    options.parse_command_line()

    io_loop = ioloop.IOLoop.instance()
    handlers = [
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

    # Turn debug on to have Tornado restart when you change this file
    # Recommended when you're developing. Dont forget to remove it
    # when you put this in production

    application = web.Application(handlers, debug = True)
    application.sim = sim.WebSocketProxy()
    application.listen(options.options.port, settings.configs["http_address"])
    print("Tornado has started at port: ", options.options.port, " and address: ", settings.configs["http_address"])
    ioloop.IOLoop.instance().start()
