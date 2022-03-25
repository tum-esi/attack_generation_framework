export async function xmlReadRequest(url, callback=null) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        	callback(xhr)
        }
    };
    xhr.open("GET", url, true);
    xhr.send(null);
}
export async function xmlWriteRequest(url, method, data=null, callback=null) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            switch(xhr.status) {
                case 404: 
                    callback({"error": 404});
                    break;
                case 500: 
                    callback({"error": 500});
                    break;
                case 200:
                    callback(JSON.parse(xhr.response));
                    break;
                default:
                    callback({"error": xhr.status});
            };
        };
    };
    if (data != null) {
        data = JSON.stringify(data);
    } 
    xhr.send(data);
}
export async function makeRequest (method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    // xhr.onload = function () {
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) { // && this.status >= 200 && this.status < 300
        switch (xhr.status) {
          case 200:
            resolve(JSON.parse(xhr.response));
          default:
            reject(null);
        }
      }
    };
    xhr.send();
  });
}

export async function getFile(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = 'arraybuffer';
    xhr.dataType = 'blob';
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
            callback([xhr.response]);
      } else {
        return false
      }
    }
    xhr.send(null);
}

export async function getFile2(url, method, data, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.responseType = 'arraybuffer';
    xhr.dataType = 'blob';
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr);
      } else {
        return false
      }
    }
    data = JSON.stringify(data);
    xhr.send(data);
}

export async function postFile(url, callback) {
    var formData = new FormData();

    formData.append("username", "Groucho");
    formData.append("accountnum", 123456); // number 123456 is immediately converted to a string "123456"

    // HTML file input, chosen by user
    formData.append("file", fileInputElement.files[0]);

    // JavaScript file-like object
    // var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
    // var blob = new Blob([content], { type: "text/xml"});

    // formData.append("webmasterfile", blob);

    var request = new XMLHttpRequest();
    request.open("POST", "upload-checkpoint");
    request.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback([xhr.response]);
        } else {
            return false
        }
    }

    request.send(formData);
}


export async function Request3(url, method, params = null, callback = null) {
    var r = new XMLHttpRequest();
    var formData = new FormData();
    formData.append('media', params["Files"]);
    let collectiondata = {}
    for (let key in params) {
        if (key != "Files") {
          collectiondata[key] = params[key]
        }
    }
    let newOobejct = {}
    for (let attribute in params["Files"]) {
        if (["name", "type"].indexOf(attribute) > -1) {
          newOobejct[attribute] = params["Files"][attribute]
        }
    }
    collectiondata["Files"] = [newOobejct]
    formData.append('metadata', new Blob([JSON.stringify(collectiondata)], { type: 'application/json' }));
    r.open(method, url, true);
    r.onreadystatechange = function () {
        if (r.readyState === XMLHttpRequest.DONE && r.status === 200) {
            callback(r)
        }
    };
    r.send(formData)
}
