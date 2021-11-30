<script>
	import Table from '$lib/Table/index.svelte';
	import Modal from '$lib/Modal/index.svelte';
	import { onMount } from 'svelte';
	import { xmlReadRequest } from '$lib/requests.js';

	let data;
	let images=[];
	let images_header = ["short_id", "tag"];
	let img_create;
	let img_delete;
	let cont_start;
	let cont_start_stop;
	let cont_delete;
	let vol_create;
	let vol_delete;
	let net_create;
	let net_delete;
	let image_form_create = [
		{
			"label": "Repository to Build",
			"name": "repo",
			"type": "select",
			"options": []
		},
		{
			"label": "Tag Name",
			"name": "tag",
			"type": "text"
		},
		{
			"label": "Version (e.g. latest or 0.2)",
			"name": "version",
			"type": "text"
		}
	];
	let image_form_delete = [{
			"label": "Image Short ID",
			"name": "short_id",
			"type": "text"
		}
	];

	// ENTRYPOINT and CMD should be specified in Dockerfile (compose does not overwrite here)
	let container_form_start = [
		{
			"label": "Join Network",
			"name": "network",
			"type": "select",
			"options": []
		},
		{
			"label": "Select Image",
			"name": "image",
			"type": "select",
			"options": []
		},
		{
			"label": "Attach Volumes (e.g. vol_name:/path/to/container_folder, if using multiple -> use comma separated)",
			"name": "volumes",
			"type": "text"
		},
		{
			"label": "Port Mapping (please use format e.g. 80:80 or 443:443 or 8080:8080, if using multiple 80:80,443:443,...)",
			"name": "ports",
			"type": "text"
		},
		{
			"label": "Name",
			"name": "name",
			"type": "text"
		},
		{
			"label": "Privileged",
			"name": "privileged",
			"type": "checkbox"
		}
	];
	let container_form_start_stop = [
		{
			"label": "Container Short ID or Name",
			"name": "short_id",
			"type": "text"
		}
	];
	let container_form_delete = [
		{
			"label": "Container Short ID",
			"name": "short_id",
			"type": "text"
		}
	];
	let volume_form_create = [
		{
			"label": "Name",
			"name": "name",
			"type": "text"
		}
	];
	let volume_form_delete = [
		{
			"label": "Volume Short ID",
			"name": "short_id",
			"type": "text"
		}
	];
	let network_form_create = [
		{
			"label": "Name",
			"name": "name",
			"type": "text"
		},
		{
			"label": "Driver (e.g. bridge or overlay)",
			"name": "driver",
			"type": "text"
		},
		{
			"label": "Attachable",
			"name": "attachable",
			"type": "checkbox"
		}
	];
	let network_form_delete = [
		{
			"label": "Network Short ID",
			"name": "short_id",
			"type": "text"
		}
	];
	let containers=[];
	let containers_header = ["short_id", "name", "ports"];
	let networks=[];
	let networks_header = ["short_id", "name"];
	let volumes=[];
	let volumes_header = ["short_id", "name"];
	let repositories=[];
	let repositories_header = ["name"];

	async function updateTables() {
		// status fetches active images
		xmlReadRequest("/images", function(xhr) {
			let tmp = JSON.parse(xhr.response);
			if (tmp.data) {
				images = tmp.data;
				let tag_strings = [];
				for (var i=0; i < images.length; i++) {
					tag_strings.push(images[i]["tag"]);
				}
				container_form_start[1]["options"] = tag_strings;
			}
		});

		// container status fetches active containers
		xmlReadRequest("/containers", function(xhr) {
			let tmp = JSON.parse(xhr.response);
			if (tmp.data) {
				containers = tmp.data;
			}
		});

		// container status fetches active networks
		xmlReadRequest("/networks", function(xhr) {
			let tmp = JSON.parse(xhr.response);
			if (tmp.data) {
				networks = tmp.data;
				let network_strings = [];
				for (var i=0; i < networks.length; i++) {
					network_strings.push(networks[i]["name"]);
				}
				container_form_start[0]["options"] = network_strings;
			}
		});

		// container status fetches active volumes
		xmlReadRequest("/volumes", function(xhr) {
			let tmp = JSON.parse(xhr.response);
			if (tmp.data) {
				volumes = tmp.data;
			}
		});

		// container status fetches active repositories
		xmlReadRequest("/repositories", function(xhr) {
			let tmp = JSON.parse(xhr.response);
			if (tmp.data) {
				repositories = tmp.data;
				let repo_strings = [];
				for (var i=0; i < repositories.length; i++) {
					repo_strings.push(repositories[i]["name"]);
				}
				image_form_create[0]["options"] = repo_strings;
			}
		});
	}

	onMount(async() => {

		updateTables()
		setTimeout(function() {
			img_create = image_form_create;
			img_delete = image_form_delete;
			cont_start = container_form_start;
			cont_start_stop = container_form_start_stop;
			cont_delete = container_form_delete;
			vol_create = volume_form_create;
			vol_delete = volume_form_delete;
			net_create = network_form_create;
			net_delete = network_form_delete;
		}, 500)

		// 3s interval
		// var intervalId = setInterval(function() {
		// }, 3000);

	});

	function closeAccordion(id) {
		var x = document.getElementById(id);
		if (x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
		} else { 
			x.className = x.className.replace(" w3-show", "");
		}
	}

</script>

<svelte:head>
	<title>Containers</title>
</svelte:head>


<hr>
<div class="w3-panel w3-blue">
	<h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
	<b>TestNet Container Management</b></h1>
</div>
<hr>

<section class="w3-container">

	<button on:click={updateTables} class="w3-col w3-input w3-border w3-margin-bottom">Update Tables</button>
	<!-- <hr class="dotted"> -->
	<hr>

	<button on:click={() => closeAccordion('imagesAccordion')} class="w3-button w3-block w3-black w3-left-align w3-margin-bottom">Images</button>
	<div id="imagesAccordion" class="w3-hide w3-margin-bottom">
		<Table title="Images" bind:data={ images } headers={images_header}></Table>
	</div>
	<div class="w3-row w3-section">
    	<div class="w3-half">
			<Modal data={image_form_create} id="createImage" method="POST" url="/images" button="Create Image" color="w3-green" color2="w3-text-black"></Modal>
		</div>
    	<div class="w3-half">
			<Modal data={img_delete} id="deleteImage" method="DELETE" url="/images" button="Delete Image" color="w3-red" color2="w3-text-black"></Modal>
		</div>
	</div>


	<!-- <hr class="dotted"> -->
	<hr>
	<button on:click={() => closeAccordion('containersAccordion')} class="w3-button w3-block w3-black w3-left-align w3-margin-bottom">Containers</button>
	<div id="containersAccordion" class="w3-hide w3-margin-bottom">
		<Table title="Containers" bind:data={ containers } headers={ containers_header }></Table>
	</div>
	<div class="w3-row w3-section">
    	<div class="w3-third">
			<Modal data={container_form_start} id="startContainer" method="POST" url="/containers" button="Start Container" color="w3-green" color2="w3-text-black"></Modal>
		</div>
    	<div class="w3-third">
			<Modal data={cont_start_stop} id="startstopContainer" method="PUT" url="/containers" button="Start/Stop" color="w3-amber" color2="w3-text-black"></Modal>
		</div>
    	<div class="w3-third">
			<Modal data={cont_delete} id="deleteContainer" method="DELETE" url="/containers" button="Delete Container" color="w3-red" color2="w3-text-black"></Modal>
		</div>
	</div>


	<!-- <hr class="dotted"> -->
	<hr>
	<button on:click={() => closeAccordion('networksAccordion')} class="w3-button w3-block w3-black w3-left-align w3-margin-bottom">Networks</button>
	<div id="networksAccordion" class="w3-hide w3-margin-bottom">
		<Table title="Networks" bind:data={ networks } headers={networks_header}></Table>
	</div>
	<div class="w3-row w3-section">
    	<div class="w3-half">
			<Modal data={net_create} id="createNetwork" method="POST" url="/networks" button="Create Network" color="w3-green" color2="w3-text-black"></Modal>
		</div>
    	<div class="w3-half">
			<Modal data={net_delete} id="deleteNetwork" method="DELETE" url="/networks" button="Delete Network" color="w3-red" color2="w3-text-black"></Modal>
		</div>
	</div>


	<!-- <hr class="dotted"> -->
	<hr>
	<button on:click={() => closeAccordion('volumesAccordion')} class="w3-button w3-block w3-black w3-left-align w3-margin-bottom">Volumes</button>
	<div id="volumesAccordion" class="w3-hide w3-margin-bottom">
		<Table title="Volumes" bind:data={ volumes } headers={volumes_header}></Table>
	</div>
	<div class="w3-row w3-section">
    	<div class="w3-half">
			<Modal data={vol_create} id="createVolume" method="POST" url="/volumes" button="Create Volume" color="w3-green" color2="w3-text-black"></Modal>
		</div>
    	<div class="w3-half">
			<Modal data={vol_delete} id="deleteVolume" method="DELETE" url="/volumes" button="Delete Volume" color="w3-red" color2="w3-text-black"></Modal>
		</div>
	</div>


	<!-- <hr class="dotted"> -->
	<hr>
	<button on:click={() => closeAccordion('repositoriesAccordion')} class="w3-button w3-block w3-black w3-left-align w3-margin-bottom">Repositories</button>
	<div id="repositoriesAccordion" class="w3-hide w3-margin-bottom">
		<Table title="Repositories" bind:data={ repositories } headers={repositories_header}></Table>
	</div>

	<div class="w3-margin w3-padding"></div>

</section>


<style type="text/css">
	hr.dotted {
	  border-top: 1px dotted red;
	}

	hr {
		border-top: 1px solid white;
	}

</style>