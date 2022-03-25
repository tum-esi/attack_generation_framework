<script type="text/javascript">
	import Table from '$lib/Table/index.svelte';
	import AutoPilot from '$lib/AutoPilot/index.svelte';
	import { onMount } from 'svelte';
    import Toast from '$lib/Toast.svelte';
    import { notifications } from '$lib/notifications.js';
    import { xmlReadRequest, xmlWriteRequest, getFile2 } from '$lib/requests.js';
    import { scenarioStore, scenarioConfigsStore, scenarioTypeStore } from '$lib/store.js'
    import { onDestroy } from 'svelte';
    import ImageModal from '$lib/ImageModal/index.svelte';

	let imageModalComponent;

    let scenarios = [];
    let scenario_configurations = {};
    let scenario_type = "";
    const unsubscribe = scenarioStore.subscribe(value => {scenarios = value;});
    const unsubscribe2 = scenarioConfigsStore.subscribe(value => {scenario_configurations = value;});
    const unsubscribe4 = scenarioTypeStore.subscribe(value => {scenario_type = value;});

    // stores websocket connections that connect over controller proxy to container ws
    let websockets = [];
    let static_websocket = [];

    onDestroy(() => {
        unsubscribe();
        unsubscribe2();
        unsubscribe4();

        for (let i = 0; i < websockets.length; i++) {
        	websockets[i].close();
        }
        for (let i = 0; i < static_websocket.length; i++) {
        	static_websocket[i].close();
        }
    });

    // communication data
    let activeScenario = "Please create and select a scenario before starting the simulation.";
    let scenarioExist = false;
    let numberContainers = 0;
    // every time ws sends a status message, index field gets updated
    let container_status = [];
    // dictionary mapping index to data of socket connection
    let ws_data = {};
    let results = ["event1", "event2", "event3"];
	let refs = [];
	let array_counter = 0;

	// static data
	let staticData = [];

	// driving simulation data
	let drivesimData = [];

    onMount(async() => {

    	console.log("scenarios", scenarios, "scenario_configurations", scenario_configurations, "scenario_type", scenario_type)

    	let url = "";
    	for (let i = 0; i < scenarios.length; i++) {
    		if (scenarios[i].activated) {
    			activeScenario = scenarios[i].name;
    			scenarioExist = true;
    			url = "/api/db1/scenario_configurations/ref-"+scenarios[i]["_id"];
    		}
    	}

    	pullConfigs(url, function() {

    		if (scenario_configurations["type"] == "Communication") {
		    	if ("configurations" in scenario_configurations) {
		    		numberContainers = scenario_configurations["configurations"].length;
		    	}

		    	// generate one websocket client to monitor every container
		    	for (var i = 0; i < numberContainers; i++) {

		    		// reset data
		    		ws_data[i.toString()] = [];

		    		// websocket connection
		    		let url = "ws://localhost:8000/simulation/comm/ws/"+i.toString();
		    		let ws = new WebSocket(url);

				    ws.onopen = function() {
				      	window.console.log("Successfully connected to the echo websocket server...");
				    };
				    ws.onmessage = function(evt) {

						let jsonData = JSON.parse(evt.data);
						console.log(jsonData, "printing JSON now")

						// index should be part of every message down to browser ws
						let index = jsonData["client_index"];
						let containerData = JSON.parse(jsonData["data"]);

						if ("status" in containerData) {
						container_status[index] = containerData["status"];
						} else {
							ws_data[index] = [...ws_data[index], containerData];
						}

				    };
				    websockets.push(ws);
		    	}
    		}

    		if (scenario_configurations["type"] == "Static") {
    			console.log("hello static sample")
    			let url = "ws://localhost:8000/simulation/static/ws";
	    		let ws = new WebSocket(url);
	    		ws.onopen = function() {
			      	window.console.log("static simulation websocket");
			    };
			    ws.onmessage = function(evt) {

					let jsonData = JSON.parse(evt.data);
					// console.log("static simulation websocket:", jsonData)
					staticData = [...staticData, jsonData]
			    };
			    static_websocket.push(ws);
    		}

    		if (scenario_configurations["type"] == "Communication") {
    			console.log("hello driving scenario")
    		}

    	})
    });

    function pullConfigs(url, callback) {
    	xmlReadRequest(url, function(xhr) {
            let tmp = JSON.parse(xhr.response);
            if (tmp.data) {
                if (tmp.data.length > 0) {
                	scenarioConfigsStore.set(tmp.data[0]);
                	callback();
                }
            }
        });
    }

    function resetLogs() {
    	for (const [key, value] of Object.entries(ws_data)) {
    		ws_data[key] = [];
		}
    }

	// handle start of all services via the backend, just provide configuration data with post request
	async function activateSimulation(command) {
		if (!scenarioExist) {
			notifications.danger("please create and activate a scenario first.")
			return
		}

		// reset local fields
		if (command == "start") {
			resetLogs();
		}

		// console.log("start or stop simulation");
		let data = {"command": command, "configs": scenario_configurations}
		xmlWriteRequest("/simulation/comm", "POST", data, function(response) {
			if (response.data) {
				notifications.success("simulation started.")
				console.log("response of simulation", response.data)
			}
		})
	}

	function resetWsConnection() {
		for (var i = 0; i < websockets.length; i++) {
			ws = websockets[i];
			ws.close()
		}
	}

	function staticSimulation() {
		let data = {"configs": scenario_configurations}
		xmlWriteRequest("/simulation/static", "POST", data, function(response) {
			if (response.data) {
				notifications.success("simulation started.")
				console.log("response of simulation", response.data)
			}
		})
	}

	function deleteFiles() {
		let data = {"configs": scenario_configurations}
		xmlWriteRequest("/simulation/static", "DELETE", data, function(response) {
			if (response.data) {
				notifications.success("Delete successful.")
				staticData = [];
				console.log("response of simulation", response.data)
			}
		})
	}

	function exportFiles() {
		xmlReadRequest("/simulation/static", function(xhr) {
			let tmp = JSON.parse(xhr.response);
            if (tmp.data) {
				notifications.success("Download successful.")
				console.log("response of export files ...", tmp.data)
			}
		})
	}

	function loadImage() {
	    let filename = this.innerText;
	    getFile2("/simulation/static", 'POST', {"configs": scenario_configurations, "filename": filename}, function(xhr) {
	    	if (xhr) {
				let blob = new Blob([xhr.response], {type: "octet/stream"});
				let urlCreator = window.URL || window.webkitURL;
				let imageUrl = urlCreator.createObjectURL( blob );
	    		imageModalComponent.changeImage(imageUrl, filename);
	    	}
		});
  	}

</script>

<svelte:head>
	<title>Simulation</title>
</svelte:head>

<Toast />

<ImageModal bind:this={imageModalComponent} />

<hr>
<div class="w3-panel w3-blue">
    <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
    <b>Simulation</b></h1>
</div>
<hr>

{#if scenario_type == "Communication"}

	<h4>Scenario: {activeScenario} Number of Containers: {numberContainers}.</h4>

	<div class="w3-row w3-section">
		<div class="w3-third">
			<button on:click={() => activateSimulation("start")} class="w3-col w3-input w3-border">Start Simulation</button>
		</div>
		<div class="w3-third">
			<button on:click={() => activateSimulation("stop")} class="w3-col w3-input w3-border">Stop Simulation</button>
		</div>
		<div class="w3-third">
			<button on:click={() => resetWsConnection()} class="w3-col w3-input w3-border">Reset WS Connection</button>
		</div>
	</div>

	<hr>

	<section class="page-headline">
	    <h3>Application Logs</h3>
	</section>

	<button class="w3-col w3-input w3-border w3-button" on:click={resetLogs}>Clear Logs</button>

	{#if "configurations" in scenario_configurations}

		{#if scenario_configurations["configurations"].length > 0}

			{#each scenario_configurations["configurations"] as item, index}

				{#if Object.keys(ws_data).length > 0}

					{#if index.toString() in ws_data}

						{#if ws_data[index.toString()].length > 0}


							<h5>{item["container_info"]["name"]}</h5>

							<Table title={item["container_info"]["name"]} bind:data={ ws_data[index.toString()] } headers={ Object.keys(ws_data[index.toString()][0]) }></Table>

						{/if }

					{/if }

				{/if }

			{/each }

		{/if }

	{/if }

	<br>
	<hr>

{/if }


{#if scenario_type == "Static"}

	<div class="w3-row w3-section">
		<div class="w3-rest">
			<button on:click={staticSimulation} class="w3-col w3-input w3-border">Start Simulation</button>
		</div>
	</div>

	<hr>

	<div class="w3-panel w3-blue">
		<h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
			<b>Edit Files</b>
		</h1>
	</div>

	{#if staticData.length > 0}
		<div class="w3-container">
			<div class="w3-responsive">
				<table class="w3-table-all" style="width:100%">
					<thead>
						<tr class="w3-dark-grey">
							{#each Object.keys(staticData[0]) as header, i}
								<th>{ header }</th>
							{/each }
						</tr>
					</thead>
					{#each staticData as obj, i}
						<tr>
							{#each Object.keys(staticData[0]) as header, i }
								{#if header == "filename"}
									<td on:click={loadImage}>{obj[header]}</td>
								{:else }
									<td>{obj[header]}</td>
								{/if }
							{/each }
						</tr>
					{/each }
				</table>
			</div>
		</div>
		<!-- <Table title={"static simulation data"} bind:data={ staticData } headers={ Object.keys(staticData[0]) }></Table> -->
	{/if }

	<hr>
		<div class="w3-row w3-section">
			<div class="w3-rest">
				<button on:click={deleteFiles} class="w3-col w3-input w3-border">Delete Files</button>
			</div>
		</div>
	<hr>

{/if }


{#if scenario_type == "Driving Simulation"}

	<AutoPilot title={"AutoPilot Component"} bind:input_data={drivesimData} ></AutoPilot>

	<hr>

{/if }

<hr>

<!-- <ul>
	{#each results as item, index}
		<li bind:this={refs[index]}>
			{item}
		</li>
	{/each}
</ul> -->



<style type="text/css">
	hr {
		border-top: 1px solid white;
	}
</style>