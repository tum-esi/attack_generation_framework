<!-- <script context="module">
	export async function load({ page, fetch }) {
		const url1 = "/api/db2/snapshots";
		const url2 = "/checkpoints";
		const url3 = "/api/db2/logfiles";

		const res1 = await fetch(url1);
		const res2 = await fetch(url2);
		const res3 = await fetch(url3);

		if (res1.ok && res2.ok && res3.ok) {
			return {
				props: {
					snapshots: await res1.json().data,
					checkpoints: await res2.json().data,
					logfiles: await res3.json().data,
				}
			};
		}

		return {
			status: res1.status,
			error: new Error(`Could not load ${url1},${url2},${url3}.`)
		};
	}

</script> -->


<script>
	import { getFile, xmlReadRequest, xmlWriteRequest, Request3 } from '$lib/requests.js';
	import Toast from '$lib/Toast.svelte';
    import { notifications } from '$lib/notifications.js';
    import Table from '$lib/Table/index.svelte';
   	import { onMount } from 'svelte';

    let snapshots = []; // you can create snapshots from checkpoints
    let logfiles = [];
    let checkpoints = [];
    let cpConfigs = [];
    let containers = [];
    let images =  [];
    let recoverydata = [];
    let json_sample = {};
    let create_sample = "{}";
    let update_sample = "{}";

    function loadLogfiles() {
    	xmlReadRequest("/api/db2/logfiles", function(res) {
    		console.log("result from fetch", res)
    		let resp = JSON.parse(res.response);
    		if (resp.data) {
    			logfiles = resp.data;
    			console.log("fetched logfiles:", logfiles);
    		}
    	});
    }

    function loadCheckpoints() {
    	xmlReadRequest("/checkpoints", function(res) {
    		console.log("result from fetch checkpoints", res)
    		let resp = JSON.parse(res.response);
    		if (resp.data) {
    			checkpoints = resp.data;
    			console.log("fetched checkpoints:", checkpoints);
    		}
    	});
    }

    function loadCheckpointConfigs() {
    	xmlReadRequest("/api/db2/checkpoints", function(res) {
    		console.log("result from fetch", res)
    		let resp = JSON.parse(res.response);
    		if (resp.data) {
    			cpConfigs = resp.data;
    			console.log("fetched cpConfigs:", cpConfigs);
    		}
    	});
    }

    function loadContainers() {
    	xmlReadRequest("/containers", function(xhr) {
			let tmp = JSON.parse(xhr.response);
			if (tmp.data) {
				containers = tmp.data;
			}
		});
    }

    function loadImages() {
    	xmlReadRequest("/images", function(xhr) {
			let tmp = JSON.parse(xhr.response);
			if (tmp.data) {
				images = tmp.data;
			}
		});
    }

    function loadSnapshots() {
    	xmlReadRequest("/snapshots/files", function(res) {
    		console.log("result from fetch", res)
    		let resp = JSON.parse(res.response);
    		if (resp.data) {
    			snapshots = resp.data;
    			console.log("fetched snapshots:", snapshots);
    		}
    	});
    }

    function loadRecoveryData() {
    	xmlReadRequest("/data/db2/recoverydata/all", function(res) {
    		console.log("result from fetch", res)
    		let resp = JSON.parse(res.response);
    		if (resp.data) {
    			let fulldata = [];
    			for (let i = 0; i < resp.data.length; i++) {
    				fulldata.push({"_id": resp.data[i]["_id"], "data": resp.data[i]});
    			}
    			recoverydata = fulldata;
    			console.log("fetched recoverydata:", recoverydata);
    		}
    	});
    }

    async function reloadAll() {
    	loadLogfiles();
    	loadCheckpoints();
    	loadCheckpointConfigs();
    	loadContainers();
    	loadImages();
    	loadSnapshots();
    	loadRecoveryData();
    }

    onMount(async() => {
    	reloadAll();
    });

	function snapshotContainer() {
		// container to image
		// takes container name and stores it as .tar image
		let containerName = document.getElementById("snapshotContainer").value;
		let imagetag = document.getElementById("snapshotImageTag").value;
		if ( containerName == "" || imagetag == "" ) {
			notifications.danger("Please specify a container and image-tag name.");
			return 
		}
		if (!imagetag.includes("-")) {
			notifications.danger("Please separate image name and version by dash due to url parameter passing.");
			return 
		}
		let url = "/snapshots/container/"+containerName+"/"+imagetag;
        // scenario table
        var t0 = performance.now()
        xmlWriteRequest(url, "POST", {}, function(res) {
        	var t1 = performance.now()
			console.log("Container to Image took " + (t1 - t0) + " milliseconds.")
        	reloadAll();
            notifications.success('Snapshot creation success.');
        });
	}

	function exportSnapshot() {
		// image to tar file 
		let imagetag = document.getElementById("exportSnapshot").value;
		let tarfilename = document.getElementById("exportSnapshotTar").value;
		if ( imagetag == "" || tarfilename == "" ) {
			notifications.danger("Please specify a imagetag and tarfile name.");
			return 
		}
		if (!imagetag.includes("-")) {
			notifications.danger("Please separate image name and version by dash due to url parameter passing.");
			return 
		}
		let url = "/snapshots/export/"+tarfilename+"/"+imagetag;
        // scenario table
        var t0 = performance.now()
        xmlWriteRequest(url, "POST", {}, function(res) {
        	var t1 = performance.now()
			console.log("Image to Tar took " + (t1 - t0) + " milliseconds.")

        	reloadAll();
            notifications.success('Snapshot export success.');
        });
	}

	function importSnapshot() {
		// tar file to image: import from existing tar name, looking in /tars folder and then moves it to gridfs
		let tarfilename = document.getElementById("importSnapshotTar").value;
		// let imagetag = document.getElementById("importSnapshot").value;
		if ( tarfilename == "" ) {
			notifications.danger("Please specify a tarfile name.");
			return 
		}
		// if (!imagetag.includes("-")) {
		// 	notifications.danger("Please separate image name and version by dash due to url parameter passing.");
		// 	return 
		// }
		let url = "/snapshots/import/"+tarfilename;
        // scenario table

        var t0 = performance.now()
        xmlWriteRequest(url, "POST", {}, function(res) {
        	var t1 = performance.now()
			console.log("Tar to Image took " + (t1 - t0) + " milliseconds.")

        	reloadAll();
            notifications.success('Snapshot import success.');
        });
	}

	function backupSnapshot() {
		// tar file to image: import from existing tar name, looking in /tars folder and then moves it to gridfs
		let tarfilename = document.getElementById("backupSnapshot").value;
		if ( tarfilename == "" ) {
			notifications.danger("Please specify a tarfilename name.");
			return 
		}
		let url = "/snapshots/backup/"+tarfilename;
        // scenario table
        var t0 = performance.now()
        xmlWriteRequest(url, "POST", {}, function(res) {
        	var t1 = performance.now()
			console.log("Tar to GridFS took " + (t1 - t0) + " milliseconds.")

        	reloadAll();
            notifications.success('Snapshot import success.');
        });
	}

	function recoverContainer() {
		let tarfilename = document.getElementById("recoverContainerTar").value;
		// let containername = document.getElementById("recoverContainer").value;
		if ( tarfilename == "" ) {
			notifications.danger("Please specify a .tar name.");
			return 
		}
		let url = "/recovery/"+tarfilename;
        // scenario table
        var t0 = performance.now()
        xmlWriteRequest(url, "POST", {}, function(res) {
        	var t1 = performance.now()
			console.log("Container Recovery took " + (t1 - t0) + " milliseconds.")

        	reloadAll();
            notifications.success('Recovery of container successful.');
        });
	}

	async function downloadSnapshot() {
		let filename = document.getElementById("downloadSnapshotTar").value;
		console.log(filename);
		var t0 = performance.now()
		xmlReadRequest("/download/snapshots/"+filename, function(xhr) {
    		let blob = new Blob([xhr.response], {type: "octet/stream"});
            let filename = decodeURIComponent(xhr.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]);  // file name
			downloadFile(blob, filename);

			var t1 = performance.now()
			console.log("Snapshot GridFS Tar Download took " + (t1 - t0) + " milliseconds.")
    	});
	}

	async function downloadCheckpoint() {
		let filename = document.getElementById("downloadCheckpointTar").value;
		// location.href = "/tars/"+filename; // this line works as well!!
		// let url = "/tars/"+filename; // working
		let url = "/download/tars/"+filename;
		var t0 = performance.now()
		xmlReadRequest(url, function(xhr) {
    		let blob = new Blob([xhr.response], {type: "octet/stream"});
			downloadFile(blob, filename);
			var t1 = performance.now()
			console.log("Checkpoint FS Tar Download took " + (t1 - t0) + " milliseconds.")
    	});
	}

	async function uploadCheckpoint() {
		// more information on formData: https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects#creating_a_formdata_object_from_scratch

		var formData = new FormData();
		let fileExist2 = false;
		let filename = "";
		let extraParameters = {}
		this.querySelectorAll("input").forEach(function(el) {
			if (el.name != "submitbtn") {
				if (el.name != "") {
					if (el.name == "file") {
						formData.append(el.name, el.files[0]);
						fileExist2 = true;
					} else {
						extraParameters[el.name] = el.value;
					}
				}
			}
		})
		console.log("extra Params:", extraParameters);
		formData.append('metadata', new Blob([JSON.stringify(extraParameters)], { type: 'application/json' }));
		if (!fileExist2) {
			notifications.danger("please select a file.");
			return
		}
		let url = "/checkpoints";
		let method = "POST";

	    var request = new XMLHttpRequest();
	    request.open(method, url);

	    var t0 = performance.now()
	    // request.setRequestHeader("Content-Type", "multipart/form-data")
	    request.onreadystatechange = function() {
	        if (request.readyState === 4 && request.status === 200) {
	        	let data = JSON.parse(request.response)

	        	var t1 = performance.now()
				console.log("Checkpoint Upload Tar and Configs (configs to MDB, Tar to FS) took " + (t1 - t0) + " milliseconds.")

	        	// logfiles = [...logfiles, data.data];
	            // callback([request.response]);
	            console.log("response from checkpoint:", data);
	            notifications.success("uploaded tar file to checkpoint")
	        } else {
	            return false;
	        }
	    }
	    request.send(formData);
	}

	function deleteLogfile() {

		let identifier = document.getElementById("deleteLogfileInput").value;
		// check if identifier in logfiles array
		let idExist = false;
		let item;
		for (let i = 0; i < logfiles.length; i++) {
			if (identifier == logfiles[i]["_id"]) {
				idExist = true;
				item = logfiles[i];
			}
		}
		if (!idExist) {
			notifications.danger('Please specify an LogID.');
			return 
		}
		let url = "/gridfs/db2/logfiles";
        // scenario table

        var t0 = performance.now()
        xmlWriteRequest(url, "DELETE", item, function(res) {
        	var t1 = performance.now()
			console.log("CSV Logfile delete took " + (t1 - t0) + " milliseconds.")

        	logfiles = logfiles.filter(m => m["_id"] !== identifier);
            notifications.success('Logfile deleted successfully.');
        });
	}

	async function uploadCSV() {
		// more information on formData: https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects#creating_a_formdata_object_from_scratch

		var formData = new FormData();
		let fileExist2 = false;
		let filename = "";
		this.querySelectorAll("input").forEach(function(el) {
			if (el.name != "") {
				if (el.name == "file") {
					console.log(el.files[0])
					formData.append(el.name, el.files[0]);
					filename = el.files[0].name;
					fileExist2 = true;
				}
			}
		})
		let url = "/logfiles/"+filename;
		let method = "POST";

		if (!fileExist2) {
			notifications.danger("please select a file.");
			return
		}

	    var request = new XMLHttpRequest();
	    request.open(method, url);

	    var t0 = performance.now()
	    // request.setRequestHeader("Content-Type", "multipart/form-data")
	    request.onreadystatechange = function() {
	        if (request.readyState === 4 && request.status === 200) {
	        	var t1 = performance.now()
				console.log("CSV Logfile upload took " + (t1 - t0) + " milliseconds.")

	        	let data = JSON.parse(request.response)
	        	logfiles = [...logfiles, data.data];
	            // callback([request.response]);
	            console.log("response from checkpoint:", [request.response]);
	        } else {
	            return false;
	        }
	    }
	    request.send(formData);
	}

	function downloadLogfile() {
		let identifier = document.getElementById("downloadLogfile").value;
		let idExist = false;
		console.log("download logfile", logfiles)
		for (let i = 0; i < logfiles.length; i++) {
			if (parseInt(identifier) == parseInt(logfiles[i]["_id"])) {
				idExist = true;
			}
		}
		if (!idExist) {
			notifications.danger('Please specify an LogID.');
			return 
		}
		let url = "/download/db2/logfiles/"+identifier;

		var t0 = performance.now()
		xmlReadRequest(url, function(xhr) {
            let blob = new Blob([xhr.response], {type: "octet/stream"});  // binary large object
        	// blob = new Blob([response], {type: "text/csv"});
            let filename = decodeURIComponent(xhr.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]);  // file name
			downloadFile(blob, filename);
			var t1 = performance.now()
			console.log("CSV Logfile download took " + (t1 - t0) + " milliseconds.")
    	});
	}

	function downloadFile(blob, filename) {
		// Hidden hyperlink
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        // Respond to data as a binary large object
        let url = window.URL.createObjectURL(blob);  // Create a URL object
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);  // Release URL object
	}

	function createData() {
		let url = "/data/db2/recoverydata";
		var t0 = performance.now()
		xmlWriteRequest(url, "POST", JSON.parse(create_sample), function(res) {
			var t1 = performance.now()
			console.log("JSON upload took " + (t1 - t0) + " milliseconds.")

        	loadRecoveryData();
            notifications.success('Create data success.');
        });
	}

	function updateData() {
		let identifier = document.getElementById("updateDataId").value;
		let url = "/data/db2/recoverydata/"+identifier;
		var t0 = performance.now()
		xmlWriteRequest(url, "PUT", JSON.parse(update_sample), function(res) {
			var t1 = performance.now()
			console.log("JSON update took " + (t1 - t0) + " milliseconds.")

        	loadRecoveryData();
            notifications.success('Update data success.');
        });
	}

	function deleteData() {
		let identifier = document.getElementById("deleteDataId").value;
		let url = "/data/db2/recoverydata/"+identifier;
		console.log("deleting", url);
		var t0 = performance.now()
		xmlWriteRequest(url, "DELETE", {}, function(res) {
			var t1 = performance.now()
			console.log("JSON delete took " + (t1 - t0) + " milliseconds.")

        	loadRecoveryData();
            notifications.success('Delete data success.');
        });
	}

	function updateShowSample() {
		let idx = this.getAttribute("index"); 
		console.log(this)
		for (var i = 0; i < recoverydata.length; i++) {
			if (parseInt(idx) == i) {
				json_sample = JSON.stringify(recoverydata[i]["data"], undefined, 4);
				i = recoverydata.length;
			}
		}
	}

	function prettyPrint() {
		let obj = JSON.parse(json_sample);
    	json_sample = JSON.stringify(obj, undefined, 4);
	}

</script>

<Toast />

<hr>
<div class="w3-panel w3-blue">
    <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
    <b>Recovery Handlers</b></h1>
</div>
<hr>


<h2>Upload Checkpoint</h2>
<form class="w3-container w3-card-4" enctype="multipart/form-data" on:submit|preventDefault={uploadCheckpoint}> <!-- action="/upload" method="post" -->
	<p>
		<label><b>Image Repository-Version (e.g. ubuntu:latest, ubuntu:16.04)</b></label>
		<input class="w3-input w3-border" name="repo_version" type="text">
	</p>
	<p>
		<label><b>Container Name</b></label>
		<input class="w3-input w3-border" name="containername" type="text">
	</p>
	<p>
		<label><b>Container Ports (8080:8080,443:443)</b></label>
		<input class="w3-input w3-border" name="containerports" type="text">
	</p>
	<p>
		<label><b>Container Networks</b></label>
		<input class="w3-input w3-border" name="containernetworks" type="text">
	</p>
	<p>
		<label><b>Container Volumes</b></label>
		<input class="w3-input w3-border" name="containervolumes" type="text">
	</p>
	<p>
		<label><b>Container Privileged (yes, no)</b></label>
		<input class="w3-input w3-border" name="containerprivilege" type="text">
	</p>
	<p>
		<label class="w3-text-blue"><b>File</b></label>
	    <input class="w3-input w3-border" type="file" name="file" />
    </p>
    <p>
	    <input class="w3-col w3-input w3-border w3-margin-bottom" name="submitbtn" type="submit" value="upload" />
    </p>
</form>

<hr>
<div class="w3-panel w3-blue">
    <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
    <b>Monitoring</b></h1>
</div>
<hr>

<br>
<button on:click={reloadAll} class="w3-col w3-input w3-border w3-margin-bottom">Reload all Tables</button>

<section class="page-headline">
    <h3>Available Checkpoints</h3>
</section>

{#if checkpoints.length > 0}
	<Table title="Checkpoints" bind:data={ checkpoints } headers={ Object.keys(checkpoints[0]) }></Table>
{/if }

<br>

<section class="page-headline">
    <h3>Checkpoint Configurations</h3>
</section>

{#if cpConfigs.length > 0}
	<Table title="Checkpoint Configurations" bind:data={ cpConfigs } headers={ Object.keys(cpConfigs[0]) }></Table>
{/if }

<br>

<section class="page-headline">
    <h3>Snapshot Backups</h3>
</section>

{#if snapshots.length > 0}
	<Table title="Snapshots" bind:data={ snapshots } headers={ Object.keys(snapshots[0]) }></Table>
{/if }

<br>

<section class="page-headline">
    <h3>Running Containers</h3>
</section>

{#if containers.length > 0}
	<Table title="Running Containers" bind:data={ containers } headers={ Object.keys(containers[0]) }></Table>
{/if }

<br>

<section class="page-headline">
    <h3>Images</h3>
</section>

{#if images.length > 0}
	<Table title="Images" bind:data={ images } headers={ Object.keys(images[0]) }></Table>
{/if }

<br>



<hr>
<div class="w3-panel w3-blue">
    <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
    <b>Recovery Actions</b></h1>
</div>
<hr>


<div class="w3-row w3-section">
    <div class="w3-third">
        <button class="w3-col w3-input w3-border w3-button" on:click={snapshotContainer}>Snapshot Container ( create image )</button>
    </div>
    <div class="w3-third">
        <input id="snapshotContainer" class="w3-input w3-border" name="containername" type="text" placeholder="Container Name">
    </div>
    <div class="w3-rest">
        <input id="snapshotImageTag" class="w3-input w3-border" name="imagetag" type="text" placeholder="Image Tag (e.g. myimage-01)">
    </div>
</div>

<div class="w3-row w3-section">
    <div class="w3-third">
        <button class="w3-col w3-input w3-border w3-button" on:click={exportSnapshot}>Export Snapshot ( image to .tar )</button>
    </div>
    <div class="w3-third">
        <input id="exportSnapshot" class="w3-input w3-border" name="imagetag" type="text" placeholder="Image Tag (e.g. myimage-01)">
    </div>
    <div class="w3-rest">
        <input id="exportSnapshotTar" class="w3-input w3-border" name="tarname" type="text" placeholder=".tar Filename">
    </div>
</div>


<div class="w3-row w3-section">
    <div class="w3-half">
        <button class="w3-col w3-input w3-border w3-button" on:click={importSnapshot}>Import Snapshot ( .tar to image )</button>
    </div>
    <div class="w3-half">
    	<input id="importSnapshotTar" class="w3-input w3-border" name="tarname" type="text" placeholder=".tar Filename">
    	<!-- <input id="importSnapshot" class="w3-input w3-border" type="file" name="file" placeholder=".tar file"/> -->
    </div>
    <!-- <div class="w3-third">
    	<input id="importSnapshot" class="w3-input w3-border" name="imagetag" type="text" placeholder="Image Tag (e.g. myimage-01)">
    </div> -->
</div>

<div class="w3-row w3-section">
    <div class="w3-third">
        <button class="w3-col w3-input w3-border w3-button" on:click={backupSnapshot}>Backup Snapshot ( .tar to gridfs )</button>
    </div>
    <div class="w3-rest">
        <input id="backupSnapshot" class="w3-input w3-border" name="tarname" type="text" placeholder=".tar Filename">
    </div>
</div>

<div class="w3-row w3-section">
    <div class="w3-third">
        <button class="w3-col w3-input w3-border w3-button" on:click={downloadSnapshot}>Download Snapshot Backup ( as .tar )</button>
    </div>
    <div class="w3-rest">
        <input id="downloadSnapshotTar" class="w3-input w3-border" name="snapshotname" type="text" placeholder="Snapshot Name">
    </div>
</div>


<div class="w3-row w3-section">
    <div class="w3-third">
        <button class="w3-col w3-input w3-border w3-button" on:click={downloadCheckpoint}>Download Checkpoint/Snapshot ( as .tar )</button>
    </div>
    <div class="w3-rest">
        <input id="downloadCheckpointTar" class="w3-input w3-border" name="checkpointname" type="text" placeholder="Checkpoint Name">
    </div>
</div>

<div class="w3-row w3-section">
    <div class="w3-half">
        <button class="w3-col w3-input w3-border w3-button" on:click={recoverContainer}>Recover Container ( load from .tar )</button>
    </div>
    <!-- <div class="w3-third">
        <input id="recoverContainer" class="w3-input w3-border" name="containername" type="text" placeholder="Container Name">
    </div> -->
    <div class="w3-half">
        <input id="recoverContainerTar" class="w3-input w3-border" name="checkpointname" type="text" placeholder="Checkpoint Name (.tar filename)">
    </div>
</div>


<hr>
<div class="w3-panel w3-blue">
    <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
    <b>Log Files</b></h1>
</div>
<hr>

<form class="w3-container w3-card-4" enctype="multipart/form-data" on:submit|preventDefault={uploadCSV}> <!-- action="/upload" method="post" -->
	<p>
		<label class="w3-text-blue"><b>.csv File</b></label>
	    <input class="w3-input w3-border" type="file" name="file" />
    </p>
    <p>
	    <input class="w3-col w3-input w3-border w3-margin-bottom" type="submit" value="upload" />
    </p>
</form>
<br>

<div class="w3-row w3-section">
    <div class="w3-third">
        <button class="w3-col w3-input w3-border w3-button" on:click={deleteLogfile}>Delete Logfile</button>
    </div>
    <div class="w3-rest">
        <input id="deleteLogfileInput" class="w3-input w3-border" name="logfileid" type="text" placeholder="Logfile ID">
    </div>
</div>

<div class="w3-row w3-section">
    <div class="w3-third">
        <button class="w3-col w3-input w3-border w3-button" on:click={downloadLogfile}>Download Logfile</button>
    </div>
    <div class="w3-rest">
        <input id="downloadLogfile" class="w3-input w3-border" name="logfileid" type="text" placeholder="Logfile ID">
    </div>
</div>

<br>

<section class="page-headline">
    <h3>Available Logfiles</h3>
</section>

{#if logfiles.length > 0}
	<Table title="Logfiles" bind:data={ logfiles } headers={ Object.keys(logfiles[0]) }></Table>
{/if }

<hr>
<div class="w3-panel w3-blue">
    <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
    <b>Data Recovery</b></h1>
</div>
<hr>

<br>
<button on:click={loadRecoveryData} class="w3-col w3-input w3-border w3-margin-bottom">Reload Recovery Table</button>

<br>

{#if recoverydata.length > 0}
	<div class="w3-container">
		<h5>Single Data Samples (JSON)</h5>

		<div class="w3-responsive">

			<table class="w3-table-all" style="width:100%">
				<thead>
				<tr class="w3-dark-grey">
					{#each Object.keys(recoverydata[0]) as header, i}
						<th>{ header }</th>
					{/each }
				</tr>
				</thead>
				{#each recoverydata as obj, i}
					<tr on:click={updateShowSample} index={i}>
						{#each Object.keys(recoverydata[0]) as header, j }
							<td>{obj[header]}</td>
						{/each }
					</tr>
				{/each }
			</table>

		</div>
	</div>
{/if }

<br>
<br>

<textarea id="jsonSampleId" class="textarea w3-input w3-border" placeholder="JSON Data" type="text" bind:value={json_sample}></textarea>
<button class="w3-col w3-input w3-border w3-button" on:click={prettyPrint}>Prettify</button>
<br>

<div class="w3-row w3-section">
    <button class="w3-col w3-input w3-border w3-button" on:click={createData}>Create Data</button>
    <textarea id="createDataArea" class="regular textarea w3-input w3-border" placeholder="JSON Data" type="text" bind:value={create_sample}></textarea>
</div>

<div class="w3-row w3-section">
    <button class="w3-col w3-input w3-border w3-button" on:click={updateData}>Update Data</button>
    <input id="updateDataId" class="w3-input w3-border" name="logfileid" type="text" placeholder="Object Identifier">
    <textarea id="updateDataArea" class="regular textarea w3-input w3-border" placeholder="JSON Data" type="text" bind:value={update_sample}></textarea>
</div>

<div class="w3-row w3-section">
    <button class="w3-col w3-input w3-border w3-button" on:click={deleteData}>Delete Data</button>
    <input id="deleteDataId" class="w3-input w3-border" name="logfileid" type="text" placeholder="Object Identifier">
</div>


<style>
	#jsonSampleId {
		width: 100%;
		min-height: 500px;
	}

	textarea.regular {
		min-height: 300px;
	}

	hr {
		border-top: 1px solid white;
	}
</style>

