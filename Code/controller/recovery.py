from tornado import web, httputil
import os.path, random, string, mymongo, sys, json, tarfile, io, docker, time
from bson.objectid import ObjectId
import settings


class Data(web.RequestHandler):
    """
        - recovery data api
        - handlers /data/db/collection/
    """
    def get(self, *args, **kwargs):
        """
            - handles /data/db/collection/all
            - handles /data/db/collection/objectid
        """
        url_parts = [x for x in self.request.path.split("/") if x]
        if len(url_parts) < 4:
            return self.finish({'error': True, 'data': "url fields missing, require 4."})

        db = url_parts[1]
        collection = url_parts[2]
        identifier = url_parts[3]

        cursor = None
        if identifier == "all":
            cursor = mymongo.getData(db, collection, {})
        else:
            cursor = mymongo.getData(db, collection, {"_id": ObjectId(identifier)} )

        if cursor != None:
            resp_data = []
            for document in cursor:
                document['_id'] = str(document['_id'])
                resp_data.append(document)

            return self.finish({'error': False, 'data': resp_data})
        else:
            return self.finish({'error': True, 'data': []})

    def post(self, *args, **kwargs):
        """
            - handles /data/db/collection, with body containing content
        """
        url_parts = [x for x in self.request.path.split("/") if x]
        if len(url_parts) < 3:
            return self.finish({'error': True, 'data': "url fields missing, require 3."})

        db = url_parts[1]
        collection = url_parts[2]

        data = json.loads(self.request.body.decode('utf-8'))
        return_data = mymongo.insertData(db, collection, data)

        return self.finish({'error': False, 'data': return_data})

    def put(self, *args, **kwargs):
        """
            - handles /data/db/collection/objectid, contains new data in body
        """
        url_parts = [x for x in self.request.path.split("/") if x]
        if len(url_parts) < 4:
            return self.finish({'error': True, 'data': "url fields missing, require 4."})

        db = url_parts[1]
        collection = url_parts[2]
        identifer = url_parts[3]

        data = json.loads(self.request.body.decode('utf-8'))

        if "_id" in data:
            del data["_id"]
        
        result = mymongo.updateData(db, collection, {"_id": ObjectId(identifer)}, data)
        
        print("updated", data, flush=True)

        if result != None:
            if result.acknowledged:
                return self.finish({'error': False, 'data': ""})
        return self.finish({'error': True, 'data': "update failed"}) 

    def delete(self, *args, **kwargs):
        """
            - handles /data/db/collection/objectid
        """
        url_parts = [x for x in self.request.path.split("/") if x]
        if len(url_parts) < 4:
            return self.finish({'error': True, 'data': "url fields missing, require 4."})

        db = url_parts[1]
        collection = url_parts[2]
        identifier = url_parts[3]

        cursor = mymongo.deleteData(db, collection, {"_id": ObjectId(identifier)})
        
        print("deleted", identifier, flush=True)

        if cursor != None:
            return self.finish({'error': False, 'data': "deletion success."})
        else:
            return self.finish({'error': True, 'data': "failed to delete resource."})



class RollBack(web.RequestHandler):
    """
        - loads .tar to image and bootstraps container with configs
        - handles /recovery/tarfilename
    """
    def get(self):
        return self.finish({"data": "recovery endpoint."})

    def post(self, *args, **kwargs):
        url_parts = [x for x in self.request.path.split("/") if x]
        tarfilename = url_parts[1]

        # print(containername, tarfilename)


        # get configs from checkpoint configuration database
        query = mymongo.getData("db2", "checkpoints", {"name_latest": tarfilename} )[0]

        print(query, "§")

        repo_version = query["repo_version"].split(":")
        repo = repo_version[0]
        tag = repo_version[1]
        try:
            with open("/tars/"+tarfilename, 'rb') as f:
                settings.client.images.load(f)
            # settings.client.api.import_image("/tars/"+tarfilename, repository=repo, tag=tag)

        except docker.errors.APIError as e:
            return self.finish({'error': True, 'data': str(e)})

        # start new container based on newly created image
        image = repo+":"+tag
        privilege = False
        if query["containerprivilege"] == "yes":
            privilege = True

        try:
            print("try running:", image)
            settings.client.containers.run(image, name=query["containername"], network=query["containernetworks"], volumes=query["containervolumes"], detach=True, privileged=privilege) # ports=query["containerports"] needs conversion to  include tcp and must be map....

        except docker.errors.APIError as e:
            return self.finish({'error': True, 'data': str(e)})

        return self.finish({"error": False, "data": "Container recovery success."})


class SnapShots(web.RequestHandler):
    """
        - snapshots can be created if checkpoint already exist for that image, use same configurations as provided by reference checkpoint
    """
    def get(self, *args, **kwargs):
        # gridfs query required here
        cursor = mymongo.allFiles()
        print("cursor in get snapshots", cursor, flush=True)
        if cursor != None:
            return_data = []
            for x in cursor:
                if x.split(".")[-1] == "tar":
                    return_data.append({"gridfs_filename": x})
            return self.finish({'error': False, 'data': return_data})

        return self.finish({'error': True, 'data': str(e)})

    def post(self, *args, **kwargs):
        """
            - mime type is: application/tar
            - handles /snapshots/filename

            - POST /snapshots/container/containerName/imagetag
            - POST /snapshots/export/tarfilename/imagetag
            - POST /snapshots/import/tarfilename/imagetag
            - POST /snapshots/backup/tarfilename
            - POST /snapshots/backupfs/tarfilename

            future actions:
                - logs
                - export (container filesystem as tar)
                - etc...
        """
        url_parts = [x for x in self.request.path.split("/") if x]
        action = url_parts[1]

        if action == "container":
            containerName = url_parts[2]
            imagerepotag = url_parts[3].split("-")
            img_repo = imagerepotag[0]
            img_tag = imagerepotag[1]
            try:
                container = settings.client.containers.get(containerName)
                container.commit(repository=img_repo,tag=img_tag)
                return self.finish({'error': False, 'data': "snapshot image created"})
            except docker.errors.APIError as e:
                return self.finish({'error': True, 'data': str(e)})

        if action == "export":
            tarfilename = url_parts[2]
            imagetag = url_parts[3].replace("-", ":")
            print(imagetag, "printing")

            try:
                # image = settings.client.images.get(imagetag)

                image = settings.client.api.get_image(imagetag) # "busybox:latest"
                f = open('/tars/'+tarfilename, 'wb')
                for chunk in image:
                    f.write(chunk)
                f.close()

                return self.finish({'error': False, 'data': "snapshot created at /tars/"+tarfilename})

            except docker.errors.APIError as e:
                return self.finish({'error': True, 'data': str(e)})

        if action == "import":
            tarfilename = url_parts[2]
            # imagetag = url_parts[3].split("-")
            # image_name = imagetag[0]
            # image_tag = imagetag[1]
            # print(tarfilename, imagetag, image_name, image_tag)
            try:
                # settings.client
                with open("/tars/"+tarfilename, 'rb') as f:
                    settings.client.images.load(f)
                return self.finish({'error': False, 'data': "Import tar to image success."})

            except docker.errors.APIError as e:
                return self.finish({'error': True, 'data': str(e)})

        if action == "backup":
            tarfilename = url_parts[2]
            with open("/tars/"+tarfilename, 'rb') as fin:
                fs_id = mymongo.insertFile(fin.read(), tarfilename, "application/tar", "application/octet-stream")
            return self.finish({"error": False, "data": {"gridfs_id": str(fs_id)}})

        return self.finish({"error": True, "data": "Action not supported."})


class CheckPoints(web.RequestHandler):
    """
        - postCheckpoint uploads .tar file and stores it in regular fs. reason: docker build requires fs path to load image
            -> stores configuration data in checkpoints table
        - getCheckpoint returns list of available tar files that can be loaded
        - deleteCheckpoint
    """
    def get(self):
        try:
            tars = [{"name": x.path.split("/")[-1]} for x in os.scandir("/tars")]
            return self.finish({'error': False, 'data': tars})
        except:
            return self.finish({'error': True, 'data': "Could not find any .tar files."})

    def post(self):

        data = json.loads(self.request.files["metadata"][0]["body"].decode('utf-8'))
        filename = self.request.files["file"][0]["filename"]
        final_name = "checkpoint_" + filename
        data["name_latest"] = final_name

        output_file = open("/tars/"+final_name, 'wb')
        output_file.write(self.request.files["file"][0]['body'])
        output_file.close()

        _id = mymongo.insertData("db2", "checkpoints", data)

        return self.finish({"filename": final_name, "_id": _id})

    def delete(self):
        pass
        # delete from checkpoint db2 collection and remove from fs


class LogFiles(web.RequestHandler):
    """
        - allows upload of .csv logfile
        - get return collection of logfiles that can be downloaded individually
    """
    def post(self, *args, **kwargs):
        """
            - mime type is: "text/csv"
        """
        file = self.request.files["file"][0]
        filename = file["filename"]
        fs_id = mymongo.insertFile(file["body"], filename)
        document = {"gridfs_id": str(fs_id), "filename": filename}
        _id = mymongo.insertData("db2", "logfiles", document)
        document["_id"] = _id
        return self.finish({"error": False, "data": document})


class GridFs(web.RequestHandler):
    """
        - delete from /grifs/db/collection
        - body contains gridfs_id and _id (objectid)
    """
    def delete(self, *args, **kwargs):
        """
            - handling /gridfs/objectid, body contains element to delete due to gridfs_id
        """
        url_parts = [x for x in self.request.path.split("/") if x]
        db = url_parts[1]
        collection = url_parts[2]

        data = json.loads(self.request.body.decode('utf-8'))
        grid_id = data["gridfs_id"]
        identifier = data["_id"]
        query_object = {"_id": ObjectId(identifier)}

        # delete gridfs
        crsr = mymongo.deleteFile(grid_id)
        if crsr != None:
            return self.finish({'error': True, 'data': "Failed to delete gridfs resource."})
        
        # delete from database
        cursor = mymongo.deleteData(db, collection, query_object)
        if cursor == None:
            return self.finish({'error': True, 'data': "Failed to delete resource"})

        return self.finish({'error': False, 'data': "Success"})


class Download(web.RequestHandler):
    """
        - handling /download/db/collection/objectid objctid eg "6027241a2ffce167a3e37e5f"
        - handling /download/checkpoint(tar folder)/filename
        - handling /download/snapshots/filename (queries gridfs only)
    """
    async def get(self, *args, **kwargs):
        url_parts = [x for x in self.request.path.split("/") if x]

        if url_parts[1] == "tars":
            file_name = url_parts[2]
            buf_size = 4096
            location = "/tars/"+file_name
            self.set_header('Content-Type', 'application/octet-stream')
            self.set_header('Content-Disposition', 'attachment; filename=' + file_name)

            with open(location, 'rb') as fin:
                # data = io.BytesIO(fin.read())
                self.write(fin.read())
            return self.finish()

        # gridfs only (snapshots are put directly into gridfs?)
        if url_parts[1] == "snapshots":

            file = mymongo.getFile({"filename": url_parts[2]})
            data = file.read()
            self.set_header('Content-Type', 'application/octet-stream')
            self.set_header('Content-Disposition', 'attachment;filename=' + url_parts[2])
            self.write(data)
            return self.finish()

        # regular file download (combination of collection information and gridfs)
        query = mymongo.getData(url_parts[1], url_parts[2], {"_id": ObjectId(url_parts[3])} )[0]
        file = mymongo.getFiles(query["gridfs_id"])
        data = file.read()
        self.set_header('Content-Type', 'application/octet-stream')
        self.set_header('Content-Disposition', 'attachment;filename=' + query["filename"])
        self.write(data)
        return self.finish()
