import docker, sys, time
from pymongo import MongoClient
from gridfs import GridFS
import json

def init(args):
    global client, grid_fs, mgo_client, configs

    # time.sleep(5) # if service bootstrapping requires more time

    with open("config.json") as f:
        configs = json.load(f)

    # docker connnection
    try:
        client = docker.from_env()
    except:
        print("no connection to docker client")
        sys.exit(0)

    # mongo connection
    try:
        if configs["testing"]:
            mgo_client = MongoClient("mongodb://localhost:27017", username="user", password="password", authSource="admin")
        else:
            mgo_client = MongoClient("mongodb", username="user", password="password", authSource="admin")
        # ssl=True ssl_certfile='/home/server/certs/cert.pem', ssl_keyfile='/home/server/certs/key.pem'
        db = mgo_client["db_gridfs"]
        grid_fs = GridFS(db)
    except:
        print("no connection to mongo db")
        sys.exit(0)
