import mymongo
from tornado import web
import json
from bson.objectid import ObjectId
import settings


class API(web.RequestHandler):

    def get(self, *args, **kwargs):
        """
        - /api/db_name/collection_name (optional another /filter_identifier in form of /key-value)
        """
        url_parts = [x for x in self.request.path.split("/") if x]
        query_object = {}

        if len(url_parts) < 3:
            data = getAllDbCollections()
            if data != None:
                return self.finish({"error": False, "data": data})
            else:
                return self.finish({'error': True, 'data': []})

        if len(url_parts) == 4:
            key_val = url_parts[3].split("-")
            query_object = {key_val[0]: key_val[1]}
        
        db_name = url_parts[1]
        collection_name = url_parts[2]
        cursor = mymongo.getData(db_name, collection_name, query_object)
        
        if cursor != None:
            return_data = []
            for document in cursor:
                document['_id'] = str(document['_id'])
                return_data.append(document)
            # return_data = [i for i in cursor]
            return self.finish({'error': False, 'data': return_data})
        
        else:
            return self.finish({'error': True, 'data': []})

    def post(self, *args, **kwargs):
        """ 
        - /api/db_name/collection_name + body with new document to store
        """

        url_parts = [x for x in self.request.path.split("/") if x]
        
        if len(url_parts) < 3:
            return self.finish({'error': True, 'data': 'database handler missing'})
        
        db_name = url_parts[1]
        collection_name = url_parts[2]
        data = json.loads(self.request.body.decode('utf-8'))
        return_data = mymongo.insertData(db_name, collection_name, data)
        
        return self.finish({'error': False, 'data': return_data})

    def put(self, *args, **kwargs):
        """
        - /api/db_name/collection_name/objectid + body with new document to store (remove _id tag of this new document)
        """

        url_parts = [x for x in self.request.path.split("/") if x]
        
        if len(url_parts) < 4:
            return self.finish({'error': True, 'data': 'database handler missing'})
        
        db_name = url_parts[1]
        collection_name = url_parts[2]
        objectID = url_parts[3]
        data = json.loads(self.request.body.decode('utf-8'))
        
        if "_id" in data:
            del data["_id"]
        
        result = mymongo.updateData(db_name, collection_name, {"_id": ObjectId(objectID)}, data)
        
        if result != None:
            if result.acknowledged:
                return self.finish({'error': False, 'data': ""})
        
        else:
            return self.finish({'error': True, 'data': "update failed"})

    def delete(self, *args, **kwargs):
        """ 
        - /api/db_name/collection_name/objectid, objectid in form of key-value
        - 2 url parameters delete the collection
        """

        url_parts = [x for x in self.request.path.split("/") if x]
        
        if len(url_parts) < 4:
            cursor = mymongo.deleteData(url_parts[1], url_parts[2], {}, True)
            if cursor != None:
                return self.finish({'error': False, 'data': "delete all collection entries"})
            else:
                return self.finish({'error': True, 'data': 'database handler missing'})
        
        db_name = url_parts[1]
        collection_name = url_parts[2]
        query_object = {}
        
        if "-" in url_parts[3]:
            key_val = url_parts[3].split("-")
            query_object[key_val[0]] = key_val[1]
        else:
            query_object["_id"] = ObjectId(url_parts[3])
        
        cursor = mymongo.deleteData(db_name, collection_name, query_object)
        if cursor != None:
            return self.finish({'error': False, 'data': "success"})
        else:
            return self.finish({'error': True, 'data': "failed to delete resource"})


class GetDBCollections(web.RequestHandler):

    def get(self):

        d = dict((db, [collection for collection in settings.mgo_client[db].list_collection_names()])
                for db in settings.mgo_client.list_database_names())

        return self.finish({'error': False, "data": json.dumps(d)})
