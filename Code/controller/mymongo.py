from bson.objectid import ObjectId
import settings

def getAllDbCollections():
    try:
        d = dict((db, [collection for collection in settings.mgo_client[db].list_collection_names()])
                for db in settings.mgo_client.list_database_names())
        return json.dumps(d)
    except:
        return None

# cn=collection_name, document={"something_key": something_value, ...}
def insertData(db, cn, document, many=False):
    try:
        db = settings.mgo_client[db]
        collection = db[cn]
        try:
            if many:
                return [str(i) for i in collection.insert_many(document).inserted_ids]
            else:
                _id = collection.insert(document)
                return str(_id)
        except:
            return None
    except:
        return None

# cn=collection_name, qo=query_object, po=projection_object
def getData(db, cn, qo={}, po=None):
    try:
        db = settings.mgo_client[db]
        collection = db[cn]
        try:
            if po is None:
                return collection.find(qo)
            else:
                return collection.find(qo, po)
        except:
            return None
    except:
        return None

# cn=collection_name, arg=delete_document, del_many=boolean
def deleteData(db, cn, arg, many=False):
    try:
        db = settings.mgo_client[db]
        collection = db[cn]
        try:
            if many:
                return collection.delete_many(arg) # arg = {"_id": {"$in": oid_list}}
            else:
                return collection.delete_one(arg)
        except:
            return None
    except:
        return None

# replace=updateOrReplace, tn=collection_name, filtr=query_filter, upd8=update_document, opts=read_mongodb_docs
def updateData(db, cn, filtr, upd8, replace=True, opts=None):
    try:
        db = settings.mgo_client[db]
        collection = db[cn]
        try:
            if replace:
                if opts is not None:
                    if "upsert" in opts:
                        return collection.replace_one(filtr, upd8, upsert=opts["upsert"])
                    else:
                        return collection.replace_one(filtr, upd8, opts)
                else:
                    return collection.replace_one(filtr, upd8)
            else:
                if opts is not None:
                    if "upsert" in opts:
                        return collection.update_one(filtr, upd8, upsert=opts["upsert"])
                    else:
                        return collection.update_one(filtr, upd8, opts)
                else:
                    return collection.update_one(filtr, upd8)
        except:
            return None
    except:
        return None

# querz gridfs for files
def allFiles():
    return settings.grid_fs.list()

def getFile(qo):
    return settings.grid_fs.find_one(qo)

def getFiles(file_id_string):
    return settings.grid_fs.find_one({"_id": ObjectId(file_id_string)})

def insertFile(data, fname, content_type=None, encdng=None):
    if content_type is not None and encdng is not None:
        return settings.grid_fs.put(data, filename=fname, contentType=content_type, encoding=encdng)
    else:
        return settings.grid_fs.put(data, filename=fname)

def existFile(qo):
    return settings.grid_fs.exists(qo)

def deleteFile(file_id_string):
    settings.grid_fs.delete(ObjectId(file_id_string))
