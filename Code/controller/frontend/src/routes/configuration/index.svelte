<script type="text/javascript">
    import Table from '$lib/Table/index.svelte';
    import { onMount } from 'svelte';
    import Toast from '$lib/Toast.svelte';
    import { notifications } from '$lib/notifications.js';
    import { xmlReadRequest, xmlWriteRequest, makeRequest } from '$lib/requests.js';
    import { scenarioStore, scenarioConfigsStore, testingStore, scenarioTypeStore } from '$lib/store.js';
    import { onDestroy } from 'svelte';

    let scenarios = [];
    let scenario_configurations = {};
    let testing = true;
    let scenario_type = "Communication";
    const unsubscribe = scenarioStore.subscribe(value => {scenarios = value;});
    const unsubscribe2 = scenarioConfigsStore.subscribe(value => {scenario_configurations = value;});
    const unsubscribe3 = testingStore.subscribe(value => {testing = value;});
    const unsubscribe4 = scenarioTypeStore.subscribe(value => {scenario_type = value;});

    onDestroy(() => {
        unsubscribe();
        unsubscribe2();
        unsubscribe3();
        unsubscribe4();
    });

    // onDestroy(unsubscribe);
    let selected_scenario;
    let scenario_type_mapping = {"Communication": "display:block", "Static": "display:none", "Driving Simulation": "display:none"}

    // let containers = [];
    let containers = [{"short_id": "123", "name": "DoS Attack", "ports": "8010"}, {"short_id": "1243", "name": "Replay Attack", "ports": "8020"}, {"short_id": "122", "name": "MitM", "ports": "8030"}];
    let config_containers = [];
    let selected_containers = {};
    let static_folders = [];

    onMount(async() => {

        loadContainers(function() {

            // reads scenarios from database, otherwise keep store value
            if (scenarios.length < 1) {
                xmlReadRequest("/api/db1/scenarios", function(xhr) {
                    let tmp = JSON.parse(xhr.response);
                    if (tmp.data) {
                        for (let i = 0; i < tmp.data.length; i++) {
                            tmp.data[i]["activated"] = false;
                        }
                        scenarioStore.set(tmp.data);
                    }
                });
            } else {

                if (Object.keys(scenario_configurations).length > 0) {
                    
                    let trs = document.getElementById("scenarioConfigTable").getElementsByTagName("tr");
                    for (var i = 0; i < trs.length; i++) {
                        if (trs.item(i).style.backgroundColor != "") {
                            trs.item(i).lastElementChild.firstElementChild.firstElementChild.firstElementChild.click();
                            i = trs.length;
                        }
                    }
                }
            }
        });

        loadStaticFolders();
    });

    async function loadStaticFolders() {
        xmlReadRequest("/staticfiles", function(xhr) {
            let tmp = JSON.parse(xhr.response);
            if (tmp.data) {
                static_folders = tmp.data;
            }
        });
    }

    async function switchType() {
        scenarioTypeStore.set(this.innerText);
        for (let key in scenario_type_mapping) {
            if (key == this.innerText) {
                scenario_type_mapping[key] = "display:block";
            } else {
                scenario_type_mapping[key] = "display:none";
            }
        }
        // reset configs and forms
        resetScenarioConfigs(false);

        let end = document.getElementById("selectContainers").getElementsByTagName("tr").length;
        for (var i = 0; i < end; i++) {
            selected_containers[i] = "";
        }
    }

    async function loadContainers(callback) {
        if (testing) {
            xmlReadRequest("/localservices", function(xhr) {
                let tmp = JSON.parse(xhr.response);
                if (tmp.data) {
                    containers = tmp.data;
                }
                callback()
                // console.log("localservices loaded:", containers);
            });
        } else {
            xmlReadRequest("/containers", function(xhr) {
                let tmp = JSON.parse(xhr.response);
                if (tmp.data) {
                    containers = tmp.data;
                }
                callback()
                // console.log("containers loaded:", containers);
            });
        }
    }

    async function loadContainersConfig() {
        // check if any scenario actiavted, return else
        if (!scenarioActive()) {
            notifications.danger("please create and activate a scenario first.")
            return
        }

        let promises = [];
        for (let i=0;i<scenario_configurations["configurations"].length;i++) {
            let name = scenario_configurations["configurations"][i].container_info.name;
            let port = scenario_configurations["configurations"][i].container_info.ports.split(",")[0].split("/")[0];
            let promise = makeRequest("GET", "/containers/"+name+"/"+port+"/configs");
            promises.push(promise);
        }
        Promise.allSettled(promises).then(function(values) {
            for (let i=0;i<values.length;i++) {
                if (values[i].status == "fulfilled") {
                    scenario_configurations["configurations"][i]["configs"] = values[i].value.data.data;
                }
            }
            scenarioConfigsStore.set(scenario_configurations);
        });
    }

    function readDriveConfigs() {
        let configs = {};
        configs["driving_time"] = parseInt(document.getElementById("driving_time").value);
        configs["driving_attack_time"] = parseInt(document.getElementById("driving_attack_time").value);
        let driveConfigs = document.getElementById("driving_path").getElementsByTagName('label');
        let driveAttacks = document.getElementById("driving_attacks").getElementsByTagName('label');

        for (var i = 0; i < driveConfigs.length; i++) {
            if (driveConfigs.item(i).firstElementChild.checked) {
                configs["driving_path"] = driveConfigs.item(i).innerText;
            }
        }
        for (var i = 0; i < driveAttacks.length; i++) {
            if (driveAttacks.item(i).firstElementChild.checked) {
                configs["driving_attacks"] = driveAttacks.item(i).innerText;
            }
        }
        return configs;
    }

    function readStaticConfigs() {
        let configs = {};
        let datasets = document.getElementById("static_datasets").childNodes;
        let attacks = document.getElementById("static_attacks").getElementsByTagName('label');
        let validate = document.getElementById("static_validation").getElementsByTagName('input');

        for (var i = 0; i < datasets.length; i++) {
            if (datasets[i].hasChildNodes()) {
                if (datasets[i].firstElementChild.checked) {
                    configs["dataset"] = datasets[i].innerText;
                }
            }
        }
        for (var i = 0; i < attacks.length; i++) {
            if (attacks.item(i).firstElementChild.checked) {
                configs["attack"] = attacks.item(i).innerText;
            }
        }

        configs["attack_samples"] = parseInt(document.getElementById("numberImages").value);
        let algorithms = [];
        for (var i = 0; i < validate.length; i++) {
            if (validate[i].checked) {
                algorithms.push(validate[i].nextElementSibling.firstElementChild.innerText);
            }
        }
        configs["validations"] = algorithms;

        return configs;
    }

    async function saveConfigs() {

        // check if any scenario actiavted, return else
        if (!scenarioActive()) {
            notifications.danger("please create and activate a scenario first.")
            return
        }

        // communication if nothing else selected
        let url = "/api/db1/scenario_configurations";
        let method = "POST";
        if ("_id" in scenario_configurations) {
            method = "PUT";
            url = "/api/db1/scenario_configurations/"+scenario_configurations["_id"];
        }

        // handling static configs
        if (scenario_type == "Static") {
            let data = readStaticConfigs();

            if (isNaN(data["attack_samples"]) || parseInt(data["dataset"].split(":")[1]) < data["attack_samples"]) {
                let number = data["dataset"].split(":")[1];
                notifications.danger("Please enter a number between 0 and "+number);
                return
            }

            // check if scenario already loaded
            if (scenario_configurations["type"] == scenario_type && "_id" in scenario_configurations) {
                scenario_configurations["configurations"] = [data];
            } else {
                // new scenario configuration
                scenario_configurations = {"name": scenarios[selected_scenario]["name"], "ref": scenarios[selected_scenario]["_id"]}
                scenario_configurations["configurations"] = [data];
            }
        }

        // handling driving simulation
        if (scenario_type == "Driving Simulation") {
            let data = readDriveConfigs();
            if (isNaN(data["driving_time"]) || isNaN(data["driving_attack_time"])) {
                notifications.danger("Please provide autopilot duration and time to launch an attack");
                return
            }
            // check if scenario already loaded
            if (scenario_configurations["type"] == scenario_type && "_id" in scenario_configurations) {
                scenario_configurations["configurations"] = [data];
            } else {
                // new scenario configuration
                scenario_configurations = {"name": scenarios[selected_scenario]["name"], "ref": scenarios[selected_scenario]["_id"]}
                scenario_configurations["configurations"] = [data];
            }
        }

        console.log("saving scenario_configurations", scenario_configurations)

        scenario_configurations["type"] = scenario_type;
        xmlWriteRequest(url, method, scenario_configurations, function(res) {
            // add newly created index of this configuration
            if (method == "POST") {
                scenario_configurations["_id"] = res.data;
            }
            scenarioConfigsStore.set(scenario_configurations);
            notifications.success('Configuration saved successfull.');
        });

    }

    // async function loadBothContainersConfig() {
    //     xmlReadRequest("/containers", function(xhr) {
    //         let tmp = JSON.parse(xhr.response);
    //         if (tmp.data) {
    //             let promises = [];
    //             let respData = [];
    //             for (let i=0;i<tmp.data.length;i++) {
    //                 console.log(tmp.data[i], "data")
    //                 let name = tmp.data[i]["name"];
    //                 let port = tmp.data[i]["ports"].split(",")[0].split("/")[0];
    //                 respData.push(tmp.data[i]);
    //                 console.log(name, port, "name and port");
    //                 let promise = makeRequest("GET", "/containers/"+name+"/"+port+"/configs");
    //                 promises.push(promise);
    //             }
    //             Promise.allSettled(promises).then(function(values) {
    //                 console.log(values, "after all resolved", respData);
    //                 for (let i=0;i<values.length;i++) {
    //                     if (values[i].status == "fulfilled") {
    //                         respData[i]["configs"] = values[i].value.data.data;
    //                     }
    //                 }
    //                 config_containers = respData;
    //             });
    //             console.log("config_containers:", config_containers);
    //         }
    //     });
    // }

    async function submitConfig() {
        // check if any scenario activated, return else
        if (!scenarioActive()) {
            notifications.danger("please create and activate a scenario first.")
            return
        }

        let data = {};
        let index = parseInt(this.getAttribute("index"));
        let addr = this.getAttribute("name");
        let port = this.getAttribute("port").split(",")[0].split("/")[0];
        let elList = this.querySelectorAll("input");
        for (let i=0;i<elList.length;i++) {
            let el = elList[i];
            let tpe = el.getAttribute("type");
            let key = el.getAttribute("key");
            let value = el.value;
            if (value == null) {
                value = "";
            }
            if (tpe != "submit") {
                if (tpe == "checkbox") {
                    data[key] = el.checked;
                } else if (tpe == "list") {
                    data[key] = value.split(",");
                } else {
                    if (el.hasAttribute("convert")) {
                        data[key] = Number(value);
                    } else {
                        data[key] = value;
                    }
                }
            }
        }
        let url = "/containers/"+addr+"/"+port+"/configs";
        let method = "POST";
        if (testing) {
            url = "/localservices/"+addr+"/"+port+"/configs";
            method = "PUT";
        }
        xmlWriteRequest(url, method, data, function(res) {
            // add data into right container configuration index
            scenario_configurations["configurations"][index]["configs"] = data;
            scenarioConfigsStore.set(scenario_configurations);
            notifications.success('Configuration update successfull.');
        });
    }

    function resetScenarioConfigs(strongReset) {
        if (strongReset) {
            scenario_configurations = {};
            scenario_configurations["ref"] = scenarios[selected_scenario]["_id"];
            scenario_configurations["name"] = scenarios[selected_scenario]["name"];
            scenario_configurations["configurations"] = [];
            scenarioConfigsStore.set(scenario_configurations);
        } else {
            scenario_configurations["configurations"] = [];
            scenarioConfigsStore.set(scenario_configurations);
        }
    }

    function activateScenario() {
        // get index
        let dom_index = this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");
        // deactivate all
        let activated_scenario;
        for (let i = 0; i < scenarios.length; i++) {
            if (i == dom_index) {
                selected_scenario = i;
                scenarios[i].activated = true;
                activated_scenario = scenarios[i];
            } else {
                scenarios[i].activated = false;
            }
        }
        scenarioStore.set(scenarios);
        // reset container activity and indexes
        for (let key of Object.keys(selected_containers)) {
            selected_containers[key] = "";
        }

        // load configurations for this scenario
        resetScenarioConfigs(true);

        let url = "/api/db1/scenario_configurations/ref-"+activated_scenario["_id"];
        xmlReadRequest(url, function(xhr) {
            let tmp = JSON.parse(xhr.response);
            if (tmp.data) {
                if (tmp.data.length > 0) {
                    scenario_configurations = tmp.data[0]; // possible rn, because only one configuration per scenario implemented.... could be changed

                    // check scenario type
                    if ("type" in scenario_configurations) {
                        enableType(scenario_configurations["type"]);
                        if (scenario_configurations["type"] == "Communication") {
                            
                            // reload containers table activation
                            for (let i = 0; i < containers.length; i++) {
                                let dom_index = i.toString();
                                selected_containers[dom_index] = "";
                                let shortID = containers[i].short_id;
                                for (let j = 0; j < scenario_configurations["configurations"].length; j++) {
                                    let configContainer = scenario_configurations["configurations"][j];
                                    if (shortID == configContainer.container_info.short_id) {
                                        selected_containers[dom_index] = "background-color: #acddb4;";
                                        j = scenario_configurations["configurations"].length;
                                    }
                                }
                            }
                            scenarioConfigsStore.set(scenario_configurations);
                        }

                        if (scenario_configurations["type"] == "Static") {

                            // fill up data
                            setStatic();
                        }

                        if (scenario_configurations["type"] == "Driving Simulation") {
                            // fill up data
                            setDriving();
                        }
                    }
                }
            }
        });
    }

    function setDriving() {

        document.getElementById("driving_time").value = scenario_configurations["configurations"][0]["driving_time"].toString();
        document.getElementById("driving_attack_time").value = scenario_configurations["configurations"][0]["driving_attack_time"].toString();

        let driving_path = document.getElementById("driving_path").getElementsByTagName('label');
        let driving_attacks = document.getElementById("driving_attacks").getElementsByTagName('label');

        for (var i = 0; i < driving_path.length; i++) {
            if (driving_path.item(i).innerText == scenario_configurations["configurations"][0]["driving_path"]) {
                driving_path.item(i).firstElementChild.checked = true;
            } else {
                driving_path.item(i).firstElementChild.checked = false;
            }
        }

        for (var i = 0; i < driving_attacks.length; i++) {
            if (driving_attacks.item(i).innerText == scenario_configurations["configurations"][0]["driving_attacks"]) {
                driving_attacks.item(i).firstElementChild.checked = true;
            } else {
                driving_attacks.item(i).firstElementChild.checked = false;
            }
        }

    }

    function setStatic() {
        let datasets = document.getElementById("static_datasets").childNodes;
        let attacks = document.getElementById("static_attacks").getElementsByTagName('label');
        let validate = document.getElementById("static_validation").getElementsByTagName('input');

        // console.log("nooowo:", scenario_configurations);

        for (var i = 0; i < datasets.length; i++) {
            if (datasets[i].hasChildNodes()) {
                if (datasets[i].innerText == scenario_configurations["configurations"][0]["dataset"]) {
                    datasets[i].firstElementChild.checked = true;
                } else {
                    datasets[i].firstElementChild.checked = false;
                }
            }
        }
        for (var i = 0; i < attacks.length; i++) {
            if (attacks.item(i).innerText == scenario_configurations["configurations"][0]["attack"]) {
                attacks.item(i).firstElementChild.checked = true;
            } else {
                attacks.item(i).firstElementChild.checked = false;
            }
        }
        document.getElementById("numberImages").value = scenario_configurations["configurations"][0]["attack_samples"];

        let algorithms = [];
        for (var i = 0; i < validate.length; i++) {
            validate[i].checked = false;
            let valids = scenario_configurations["configurations"][0]["validations"];
            for (var j = 0; j < valids.length; j++) {
                if (validate[i].nextElementSibling.firstElementChild.innerText == valids[j]) {
                    validate[i].checked = true;
                }
            }
        }
    }

    function enableType(type) {
        let tabs = document.getElementById("selectConfigTabs").getElementsByTagName("div");
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].innerText == type) {
                tabs[i].classList.add("w3-border-red");
            } else {
                tabs[i].classList.remove("w3-border-red");
            }
        }
        scenarioTypeStore.set(type)

        document.getElementById("Communication").style.display = "none";
        document.getElementById("Driving Simulation").style.display = "none";
        document.getElementById("Static").style.display = "none";
        document.getElementById(type).style.display = "block";
    }

    function scenarioActive() {
        let activated = false;
        for (let i = 0; i < scenarios.length; i++) {
            if (scenarios[i].activated) {
                activated = true;
            }
        }
        return activated;
    }

    function activateContainer() {
        // check if any scenario actiavted, return else
        if (!scenarioActive()) {
            notifications.danger("please create and activate a scenario first.")
            return
        }

        if (scenario_configurations["type"] != scenario_type) {
            resetScenarioConfigs(false);
        }

        // if index not in selected_containers, add it
        let dom_index = this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");
        selected_containers[dom_index] = "background-color: #acddb4;";

        let container_info = containers[parseInt(dom_index)];
        let container_config = {};

        // load configs and put them into scenario_configurations data structure
        let name = container_info["name"];
        let port = container_info["ports"].split(",")[0].split("/")[0];
        let url = "/containers/"+name+"/"+port+"/configs";
        if (testing) {
            url = "/localservices/"+name+"/"+port+"/configs";
        }
        xmlReadRequest(url, function(xhr) {
            let tmp = JSON.parse(xhr.response);
            if (tmp.data) {
                if ("data" in tmp.data) {
                    container_config = tmp.data.data;
                }
            }
            if (scenario_configurations["configurations"].length < 1) {
                scenario_configurations["configurations"] = [{"container_info": container_info, "configs": container_config}]
            } else {
                scenario_configurations["configurations"].push({"container_info": container_info, "configs": container_config});
            }
            scenarioConfigsStore.set(scenario_configurations);
        });
    }

    function deactivateContainer() {
        // check if any scenario actiavted, return else
        if (!scenarioActive()) {
            notifications.danger("please create and activate a scenario first.")
            return
        }

        // if index in selected_containers, remove it
        let dom_index = this.parentElement.parentElement.parentElement.parentElement.getAttribute("index");
        selected_containers[dom_index] = "";

        // remove configuration from scenario_configurations
        let identifier = containers[parseInt(dom_index)].short_id;
        let index = -1;
        for (let i = 0; i < scenario_configurations["configurations"].length; i++) {
            if (scenario_configurations["configurations"][i]["container_info"].short_id == identifier) {
                index = i;
                i = scenario_configurations["configurations"].length;
            }
        }
        if (index > -1) {
            scenario_configurations["configurations"].splice(index, 1);
        }
        scenarioConfigsStore.set(scenario_configurations);
    }

    function renameScenario() {
        let ref = this.getAttribute("ref");
        let input1 = document.getElementById(ref+"ID");
        let input2 = document.getElementById(ref);
        if (input1.value != "" && input2.value != "") {
            let exist = false;
            let index = -1;
            for (let i = 0; i < scenarios.length; i++) {
                if (scenarios[i]["_id"] == input1.value) {
                    exist = true;
                    index = i;
                    i = scenarios.length;
                }
            }
            if (!exist) {
                notifications.danger("scenario identifier does not exist.");
                return
            }
            let url = "/api/db1/scenarios/"+input1.value;
            let data = {"name": input2.value};
            xmlWriteRequest(url, "PUT", data, function(res) {
                scenarios[index].name = input2.value;
                scenarioStore.set(scenarios);
                notifications.success('Scenario renamed successfully.');
            });

        } else {
            notifications.danger("please provide scenario identifier and new name.");
            return
        }
    }

    function deleteScenario() {
        // check activity
        let active = false;
        let index = parseInt(this.parentElement.parentElement.parentElement.parentElement.getAttribute("index"));
        if (scenarios[index].activated) {
            active = true;
        }
        let identifier = scenarios[index]["_id"];
        let url = "/api/db1/scenarios/"+identifier;
        // scenario table
        xmlWriteRequest(url, "DELETE", {}, function(res) {
            scenarios.splice(index, 1);
            scenarioStore.set(scenarios);
            notifications.success('Scenario deleted successfully.');
        });
        // config table
        let url2 = "/api/db1/scenario_configurations/ref-"+identifier;
        xmlWriteRequest(url2, "DELETE", {}, function(res) {
            notifications.success('Scenario configuration deleted successfully.');
        });
        // if configuration selected, reset scenario_configuration, and container selection activity
        if (active) {
            scenario_configurations = {}
            scenarioConfigsStore.set(scenario_configurations);

            for (let key of Object.keys(selected_containers)) {
                selected_containers[key] = "";
            }
        }
    }

    function createNewScenario() {
        let ref = this.getAttribute("ref");
        if (ref != "") {
            let input = document.getElementById(ref);
            if (input.value != "") {
                let data = { "name": input.value };
                let url = "/api/db1/scenarios";
                console.log("createNewScenario request with body:", data, " and url:", url);
                // create scenario request
                xmlWriteRequest(url, "POST", data, function(res) {
                    console.log(res, "response from createNewScenario");
                    scenarios.push({"_id": res.data, "name": input.value, "activated": false});
                    scenarioStore.set(scenarios);
                    notifications.success('New scenario created.');
                });
            } else {
                notifications.danger("please provide scenario name.");
            }
        }
    }

    function openTab() {
        let tabname = this.firstChild.innerText;
        var i, x, tablinks;
        x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
        }
        document.getElementById(tabname).style.display = "block";
        this.firstChild.className += " w3-border-red";
    }

</script>

<svelte:head>
    <title>Configuration and Scheduling</title>
</svelte:head>

<Toast />

<hr>
<div class="w3-panel w3-blue">
    <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
    <b>Scenario Management</b></h1>
</div>
<hr>

<section class="page-headline">
    <h3>Select scenario</h3>
</section>

<section class="w3-container">
    {#if scenarios.length > 0}
        <table id="scenarioConfigTable" class="w3-table-all w3-centered">
            <thead>
            <tr class="w3-dark-grey">
                <th>ID</th>
                <th>Name</th>
                <th>Activated</th>
                <th>Actions</th>
            </tr>
            </thead>
            {#each scenarios as obj, i}
                {#if selected_scenario == i || scenarios[i].activated}
                    <tr index={i} style="background-color: #acddb4;">
                        {#each Object.entries(obj) as [key, val] (key)}
                            <td>{val}</td>
                        {/each }
                        <td>
                            <div class="w3-show-inline-block">
                                <div class="w3-bar">
                                    <button on:click={activateScenario}>Activate</button>
                                    <button on:click={deleteScenario}>Delete</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                {:else }
                    <tr index={i}>
                    
                        {#each Object.entries(obj) as [key, val] (key)}
                            <td>{val}</td>
                        {/each }
                        <td>
                            <div class="w3-show-inline-block">
                                <div class="w3-bar">
                                    <button on:click={activateScenario}>Activate</button>
                                    <button on:click={deleteScenario}>Delete</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                {/if}
            {/each }
        </table>
    {/if}

    <div class="w3-row w3-section">
        <div class="w3-third">
            <button on:click={createNewScenario} ref="createNewScenario" class="w3-col w3-input w3-border">Create Scenario</button>
        </div>
        <div class="w3-rest">
            <input id="createNewScenario" class="w3-input w3-border" name="name" type="text" placeholder="Scenario Name">
        </div>
    </div>
    <div class="w3-row w3-section">
        <div class="w3-third">
            <button on:click={renameScenario} ref="renameScenario" class="w3-col w3-input w3-border">Rename Scenario</button>
        </div>
        <div class="w3-third">
            <input id="renameScenarioID" class="w3-input w3-border" name="id" type="text" placeholder="Scenario Identifier">
        </div>
        <div class="w3-rest">
            <input id="renameScenario" class="w3-input w3-border" name="name" type="text" placeholder="Scenario Name">
        </div>
    </div>
</section>

<hr>
<div class="w3-panel w3-blue">
    <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
    <b>Scenario Type</b></h1>
</div>

<div class="w3-container">
  <!-- <h2>Tabs in a Grid</h2> -->

    <div id="selectConfigTabs" class="w3-row">
        <a href="javascript:void(0)" on:click={openTab}>
            <div class="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding w3-border-red" on:click={switchType}>Communication</div>
        </a>
        <a href="javascript:void(0)" on:click={openTab}>
            <div class="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding" on:click={switchType}>Static</div>
        </a>
        <a href="javascript:void(0)" on:click={openTab}>
            <div class="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding" on:click={switchType}>Driving Simulation</div>
        </a>
    </div>

    <div id="Communication" class="w3-container city" style={scenario_type_mapping["Communication"]}>

        <hr>
        <div class="w3-panel w3-blue">
            <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
            <b>Configuration</b></h1>
        </div>
        <hr>

        <section class="page-headline">
            <h3><b>Select containers</b></h3>
        </section>

        <section class="w3-container">
            {#if containers.length > 0}
                <table id="selectContainers" class="w3-table-all w3-centered">
                    <thead>
                        <tr class="w3-dark-grey">
                            <th>ShortID</th>
                            <th>Name</th>
                            <th>Ports</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <!-- back switch need to be green if scenario still active -->

                    {#each containers as { short_id, name, ports }, i}
                        {#if i in selected_containers}
                            <tr index={i} style={selected_containers[i]}>
                                <td>{short_id}</td>
                                <td>{name}</td>
                                <td>{ports}</td>
                                <td>
                                    <div class="w3-show-inline-block">
                                        <div class="w3-bar">
                                            <button on:click={activateContainer}>Activate</button>
                                            <button on:click={deactivateContainer}>Deactivate</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        {:else}
                            <tr index={i}>
                                <td>{short_id}</td>
                                <td>{name}</td>
                                <td>{ports}</td>
                                <td>
                                    <div class="w3-show-inline-block">
                                        <div class="w3-bar">
                                            <button on:click={activateContainer}>Activate</button>
                                            <button on:click={deactivateContainer}>Deactivate</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        {/if }
                    {/each }
                </table>
            {/if}
        </section>

        <hr>

        <section class="page-headline">
            <h3><b>Configure containers</b></h3>
        </section>

        <section class="w3-container">

            {#if "configurations" in scenario_configurations}
                {#if scenario_configurations["configurations"].length > 0 }
                    {#if scenario_configurations["type"] == "Communication"}
                        {#each scenario_configurations["configurations"] as obj1, i}
                            <div class="w3-row w3-border">
                                <div class="w3-third w3-container w3-blue">
                                    <h2 class="w3-text-orange" style="text-shadow:1px 1px 0 #444">{obj1.container_info.name}</h2>
                                    <p>Description here from application configs</p>
                                </div>
                                <div class="w3-twothird w3-container w3-gray">
                                    <form name={obj1.container_info.name} port={obj1.container_info.ports} index={i} class="w3-container" on:submit|preventDefault={submitConfig}>
                                        <h5 class="w3-text-orange" style="text-shadow:1px 1px 0 #444">Update Form</h5>
                                            {#each Object.entries(obj1.configs) as [key, val] (key)}
                                                <p>
                                                    {#if typeof val == "number" }
                                                        <label class=""><b>{key}</b></label>
                                                        <input class="w3-input w3-border" type="string" convert="required" key={key} value={val}>
                                                    {:else if typeof val == "string" }
                                                        <label class=""><b>{key}</b></label>
                                                        <input class="w3-input w3-border" type="string" key={key} value={val}>
                                                    {:else if typeof val == "boolean"}
                                                        <input class="w3-check" type="checkbox" key={key} checked={val}>
                                                        <label class=""><b>{key}</b></label>
                                                    {:else if typeof val == "object"}
                                                        <label class=""><b>{key}</b></label>
                                                        <input class="w3-input w3-border" type="list" key={key} value={val.join()}>
                                                    {/if }
                                                </p>
                                            {/each }
                                        <p>
                                            <input class="w3-blue" type="submit" value="Update">
                                        </p>
                                    </form>
                                </div>
                            </div>

                            <hr>
                        {/each }
                    {/if }
                {/if }
            {/if }

        </section>
      </div>

    <div id="Static" class="w3-container city" style={scenario_type_mapping["Static"]}>

        <hr>
        <div class="w3-panel w3-blue">
            <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
            <b>Configuration</b></h1>
        </div>

        <hr>
        <section class="page-headline">
            <h3><b>Select Static Datasets</b> (folder:number_images)</h3>
            <div class="w3-container" id="static_datasets">
                {#if static_folders.length > 0 }
                    {#each static_folders as folder_string, i}
                        <label class="container">{folder_string}
                            <input type="radio" checked="checked" name="radio">
                            <span class="checkmark"></span>
                        </label>
                    {/each}
                {/if}
            </div>
        </section>

        <hr>
        <section class="page-headline">
            <h3><b>Select Attack</b></h3>
            <div class="w3-container" id="static_attacks">
                <label class="container">blurring
                    <input type="radio" checked="checked" name="radio2">
                    <span class="checkmark"></span>
                </label>
                <label class="container">blacking
                    <input type="radio" checked="checked" name="radio2">
                    <span class="checkmark"></span>
                </label>

                <input id="numberImages" class="w3-input w3-border" name="numberImg" type="text" placeholder="Number of Images to Attack">
            </div>
        </section>

        <hr>
        <section class="page-headline">
            <h3><b>Validate Dataset</b></h3>
            <div class="w3-container" id="static_validation">
                <input class="w3-check" type="checkbox" checked="">
                <label class=""><b>Long-Short-Histogram-Pool_LDA</b></label>
            </div>
        </section>

        <hr>

    </div>

    <div id="Driving Simulation" class="w3-container city" style={scenario_type_mapping["Driving Simulation"]}>
    
        <hr>
        <div class="w3-panel w3-blue">
            <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
            <b>Configuration</b></h1>
        </div>
        <hr>

        <section class="page-headline">
            <h3><b>Select Driving Path</b></h3>
            <div class="w3-container" id="driving_path">
                <label class="container">testrun
                    <input type="radio" checked="checked" name="driveradio">
                    <span class="checkmark"></span>
                </label>
                <label class="container">zickzack
                    <input type="radio" checked="checked" name="driveradio">
                    <span class="checkmark"></span>
                </label>

                <input id="driving_time" class="w3-input w3-border" name="durationAutoPilot" type="text" placeholder="Duration of Autopilot in X seconds">
            </div>
        </section>

        <hr>
        <section class="page-headline">
            <h3><b>Select Sensors</b></h3>
            <h5>All selected</h5>
        </section>

        <hr>
        <section class="page-headline">
            <h3><b>Attack Configuration</b></h3>
            <div class="w3-container" id="driving_attacks">
                <label class="container">No Attack
                    <input type="radio" checked="checked" name="driveradio2">
                    <span class="checkmark"></span>
                </label>
                <label class="container">Attack Mode
                    <input type="radio" checked="checked" name="driveradio2">
                    <span class="checkmark"></span>
                </label>

                <input id="driving_attack_time" class="w3-input w3-border" name="driveAttackAfter" type="text" placeholder="Launch attack after X seconds">
            </div>
        </section>

    </div>
</div>

<hr>

<!-- <button on:click={loadContainersConfig} class="w3-col w3-input w3-border w3-margin-bottom">Reset Configurations</button> -->
<button on:click={saveConfigs} class="w3-col w3-input w3-border w3-margin-top">Save Configurations</button>

<hr>


<style type="text/css">

    input.checkbox {
        height: 18px;
        width: fit-content;
        width: -moz-fit-content;
    }

    hr {
        border-top: 1px solid white;
    }

    td {
        vertical-align: middle;
    }
    /* radios */
    label.container {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
    }

    /* Hide the browser's default radio button */
    label.container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    /* Create a custom radio button */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #b9c6d2;
      border-radius: 50%;
    }

    /* On mouse-over, add a grey background color */
    label.container:hover input ~ .checkmark {
      background-color: #ccc;
    }

    /* When the radio button is checked, add a blue background */
    label.container input:checked ~ .checkmark {
      background-color: #2196F3;
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */
    span.checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the indicator (dot/circle) when checked */
    label.container input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the indicator (dot/circle) */
    label.container .checkmark:after {
        top: 9px;
        left: 9px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: white;
    }


</style>