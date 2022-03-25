<script>
	import { xmlReadRequest, xmlWriteRequest, getFile2, Request3 } from '$lib/requests.js';
  import Toast from '$lib/Toast.svelte';
  import { notifications } from '$lib/notifications.js';
  import Table from '$lib/Table/index.svelte';
  import { onMount, onDestroy } from 'svelte';
  import { scenarioTypeStore, scenarioConfigsStore, drivingData } from '$lib/store.js';
  import BannerModal from '$lib/BannerModal/index.svelte';

  let bannerModalComponent;

  let scenario_type = "";
  let scenario_configurations = {};
  let driving_data = [];
  const unsubscribe2 = scenarioConfigsStore.subscribe(value => {scenario_configurations = value;});
  const unsubscribe4 = scenarioTypeStore.subscribe(value => {scenario_type = value;});
  const unsub3 = drivingData.subscribe(value => {driving_data = value;});
  let gridfsData = [];
  let capfileData = [];
  let editData = [];

  let staticAttacks = [];
  let staticModels = [];

  onDestroy(() => {
    unsubscribe2();
    unsubscribe4();
    unsub3();
  });

  onMount(async() => {

    console.log("driving_data", driving_data)

    if (scenario_type == "Communication") {
      reloadGridfs()
      xmlReadRequest("/capfile/all", function(xhr) {
        let tmp = JSON.parse(xhr.response);
        if (tmp.data) {
          notifications.success("Found data.")
          capfileData = tmp.data;
          console.log("capfileData", capfileData);
        }
      });
    }

    if (scenario_type == "Static") {
      xmlReadRequest("/staticfolders/models", function(xhr) {
        let tmp = JSON.parse(xhr.response);
        if (tmp.data) {
          staticModels = tmp.data;
          console.log("staticModels", staticModels);
        }
      });
      xmlReadRequest("/staticfolders/datasets", function(xhr) {
        let tmp = JSON.parse(xhr.response);
        if (tmp.data) {
          staticAttacks = tmp.data;
          console.log("staticAttacks", staticAttacks);
        }
      });
    }

  });

  function reloadGridfs() {
    xmlReadRequest("/datasets/all", function(xhr) {
      let tmp = JSON.parse(xhr.response);
      if (tmp.data) {
        notifications.success("Found data.");
        gridfsData = tmp.data;
        console.log("gridfsData", gridfsData);
      }
    });
  }

  function downloadCapfile() {
    let capfilepath = this.parentElement.parentElement.parentElement.firstElementChild.innerText;

    getFile2("/capfile/download", 'POST', {"filepath": capfilepath}, function(xhr) {
      let blob = new Blob([xhr.response], {type: "octet/stream"});
      let filename = decodeURIComponent(xhr.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]);
      downloadFile(blob, filename);
    });
  }

  function editCapFile() {
    let capfilepath = this.parentElement.parentElement.parentElement.firstElementChild.innerText;
    xmlWriteRequest("/capfile/edit", "POST", {"filepath": capfilepath}, function(res) {
      if (res.data) {
        editData = res.data;
        console.log("editData:", editData)
        notifications.success('Loading data successfull.');
      }
    });
  }

  function convertStoreCsv() {
    let arr = createCSV();
    let filename = arr[0];
    let csvFile = arr[1];
    // url, method, params = null, callback = null
    Request3("/datasets/upload", "POST", {"filename": filename, "Files": csvFile}, function(xhr) {
      let answer = JSON.parse(xhr.response);
      if (answer.data) {
        notifications.success("Upload worked, repload gridfs.")
      }
    });
  }

  function tableToCsv() {
    let arr = createCSV();
    let filename = arr[0];
    let csvFile = arr[1];
    downloadFile(csvFile, filename);
  }

  function createCSV() {

    let filename = document.getElementById("filenameCSV").value;
    if (filename == "") {
      notifications.danger("Please provide a filename with .csv ending")
      return 
    } 
    let split = filename.split(".")
    if (split[split.length -1] != "csv") {
      notifications.danger("File ending must be .csv")
      return
    }

    let table = document.getElementById("editTable");
    let csv = [];
    let row = [];

    let head = table.querySelectorAll("thead th");
    for (let j = 0; j < head.length; j++) row.push(head[j].innerText);
    csv.push(row.join(";"));

    let trs = table.querySelectorAll("tbody tr");
    for (let i = 0; i < trs.length; i++) {
      row = [];
      if (trs[i].style.display != "none") {
        let cell = trs[i].getElementsByTagName("td")
        row.push(cell[0].innerText.replace(";", " "));
        if (cell[1].firstElementChild.firstElementChild.checked) {
          row.push("True");
        } else {
          row.push("False");
        }
        row.push(cell[2].firstElementChild.firstElementChild.value)
        csv.push(row.join(";"));
      }
    }
    let csvFile = new Blob([csv.join("\n")], { type: "text/csv" });
    return [filename, csvFile]
  }

  function deleteCSV() {
    let filename = this.parentElement.parentElement.parentElement.firstElementChild.innerText;
    let url = "/datasets/file";

    xmlWriteRequest(url, "DELETE", {"filename": filename}, function(res) {
      if (res.data) {
        notifications.success('Deletion successfull, reload Gridfs data.');
      }
    });
  }

  function downloadCSV() {
    
    let filename = this.parentElement.parentElement.parentElement.firstElementChild.innerText;
    let url = "/datasets/download";
    // var t0 = performance.now()
    getFile2(url, 'POST', {"filename": filename}, function(xhr) {
      let blob = new Blob([xhr.response], {type: "octet/stream"});
      // file name
      let filename = decodeURIComponent(xhr.getResponseHeader("Content-Disposition").split("filename=")[1].split(";")[0]);
      downloadFile(blob, filename);
      // var t1 = performance.now()
      // console.log("CSV Logfile download took " + (t1 - t0) + " milliseconds.")
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

  function applyFilter() {
    let table = document.getElementById("editTable");
    let filter = this.parentElement.nextElementSibling.firstElementChild.value;
    // console.log(table, this, filter);

    let tr = table.children[1].childNodes;

    // console.log("list of trs:", tr, tr.length)
    for (let i = 0; i < tr.length; i++) {
      // Hide the row initially.
      tr[i].style.display = "none";

      let cell = tr[i].getElementsByTagName("td")[0];
      // console.log(cell.innerText)
      // for (let j = 0; j < td.length; j++) {
        // cell = tr[i].getElementsByTagName("td")[j];
      if (cell) {
        if (cell.innerText.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          // break;
        } 
      }
      // }
    }
  }

  function checkUncheck() {
    let table = document.getElementById("editTable");
    let tr = table.children[1].childNodes;
    for (let i = 0; i < tr.length; i++) {
      if (tr[i].style.display != "none") {
        let input = tr[i].getElementsByTagName("td")[1].firstElementChild.firstElementChild;
        input.checked = !input.checked;
      }
    }
  }

  function toggleLabel() {
    let label = document.getElementById("toggleLabel").value;
    // if (label == "") {
    //   notifications.danger("Please enter a label tag that you like to toggle.")
    //   return
    // }

    let table = document.getElementById("editTable");
    let tr = table.children[1].childNodes;
    for (let i = 0; i < tr.length; i++) {
      if (tr[i].style.display != "none") {
        let input = tr[i].getElementsByTagName("td")[2].firstElementChild.firstElementChild;
        input.value = label;
      }
    }
  }

  function trainParameterDetection() {
    let configs = scenario_configurations["configurations"][0];
    let foldername = document.getElementById("staticDatasetToTrain").value;

    bannerModalComponent.changeBanner("Train Model Parameters ...");
    console.log("scenario_configurations", configs)
    xmlWriteRequest("/staticanalysis/train", "POST", {"configs": configs, "foldername": foldername}, function(res) {
      if (res.data) {
        notifications.success('Training of Model Parameters successfull.');
        bannerModalComponent.closeBanner();
        console.log("res.data of train parameters", res.data);
        staticModels.push(res.data);
      }
    });
  }

  function runStaticDetection() {
    let configs = scenario_configurations["configurations"][0];
    let foldername = document.getElementById("staticDatasetToTrain").value;
    let model = document.getElementById("staticTrainedModel").value;

    bannerModalComponent.changeBanner("Apply Detection ...");

    console.log("scenario_configurations", configs)
    getFile2("/staticanalysis/detect", 'POST', {"configs": configs, "foldername": foldername, "model": model}, function(xhr) {
        if (xhr) {
          let blob = new Blob([xhr.response], {type: "octet/stream"});
          let urlCreator = window.URL || window.webkitURL;
          let imageUrl = urlCreator.createObjectURL( blob );
          document.getElementById("statsChartPic").src = imageUrl;
          bannerModalComponent.closeBanner();
        }
    });
  }

  function copyModelName() {
    let modelName = this.innerText;
    document.getElementById("staticTrainedModel").value = modelName;
  }

  function copyDatasetName() {
    let dsName = this.innerText;
    document.getElementById("staticDatasetToTrain").value = dsName;
    document.getElementById("downloadZipFoldername").value = dsName;
    document.getElementById("staticTrainedDataset").value = dsName;
  }

  function downloadZipFolder() {
  }

</script>


<svelte:head>
    <title>Database</title>
</svelte:head>

<Toast />

<BannerModal bind:this={bannerModalComponent} />

{#if scenario_type == "Communication"}
  <div class="w3-panel w3-blue">
    <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
    <b>Capfiles</b></h1>
  </div>

  {#if capfileData.length > 0}
    <div class="w3-container">
      <div class="w3-responsive">
        <table class="w3-table-all" style="width:100%">
          <thead>
          <tr class="w3-dark-grey">
            <th class="w3-left-align">Filename</th>
            <th class="w3-right-align">Actions</th>
          </tr>
          </thead>
          {#each capfileData as filepath, i}
            <tr>
              <td class="w3-left-align">{filepath}</td>
              <td class="w3-right-align">
                <div>
                  <button on:click={editCapFile} index={i}>Edit</button>
                  <button on:click={downloadCapfile} index={i}>Download</button>
                </div>
              </td>
            </tr>
          {/each }
        </table>

      </div>
    </div>
  {/if }

  <!-- <button class="w3-col w3-input w3-border" on:click={downloadCapfile}>Download Capture File</button> -->

  <hr>

  <div class="w3-panel w3-blue">
    <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
    <b>Edit Capfile Content</b></h1>
  </div>

  on click on "Edit" in capfiles table, displays table with capfile content


  <div class="w3-row w3-section">
    <div class="w3-third">
      <button on:click={applyFilter} ref="filterTable" class="w3-col w3-input w3-border">Apply Filter</button>
    </div>
    <div class="w3-rest">
      <input id="filterTable" class="w3-input w3-border" name="name" type="text" placeholder="Filter String">
    </div>
  </div>

  <br>
  <div class="w3-row w3-section">
    <button on:click={checkUncheck} class="w3-col w3-input w3-border">Toggle All Labels</button>
  </div>
  <div class="w3-row w3-section">
    <div class="w3-third">
      <button on:click={toggleLabel} ref="filterTable" class="w3-col w3-input w3-border">Toggle Label</button>
    </div>
    <div class="w3-rest">
      <input id="toggleLabel" class="w3-input w3-border" name="name" type="text" placeholder="Custom Label">
    </div>
  </div>
  <br>

  {#if editData.length > 0}
    <div class="w3-container">
      <div class="w3-responsive">
        <table id="editTable" class="w3-table-all" style="width:100%">
          <thead>
          <tr class="w3-dark-grey">
            <th class="w3-left-align">Content</th>
            <th class="w3-right-align">Boolean Labels</th>
            <th class="w3-right-align">Custom Labels</th>
          </tr>
          </thead>
          <tbody>
          {#each editData as editJson, i}
            <tr>
              <td class="w3-left-align">{JSON.stringify(editJson, null, 2)}</td>
              <td class="w3-right-align">
                <div>
                  <input class="w3-check" type="checkbox" checked="" index={i}>
                </div>
              </td>
              <td class="w3-right-align">
                <div>
                  <input class="w3-input w3-border" name="name" type="text" placeholder="cstm_label" index={i}>
                  <!-- <input class="w3-check" type="checkbox" checked="" index={i}> -->
                </div>
              </td>
            </tr>
          {/each }
          </tbody>
        </table>

      </div>
    </div>
  {/if }

  <br>

  <div class="w3-row w3-section">
    <div class="w3-third">
      <input id="filenameCSV" class="w3-input w3-border" name="filename" type="text" placeholder="Filename">
    </div>
    <div class="w3-third">
      <button class="w3-col w3-input w3-border" on:click={convertStoreCsv}>Convert to CSV and Store to GridFs</button>
    </div>
    <div class="w3-rest">
      <button class="w3-col w3-input w3-border" on:click={tableToCsv}>Download Table as CSV</button>
    </div>
  </div>

  <hr>

  <div class="w3-panel w3-blue">
    <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
    <b>Gridfs Files (CSVs stored in GridFS)</b></h1>
  </div>

  <button class="w3-col w3-input w3-border" on:click={reloadGridfs}>Reload GrifFS</button>

  <hr>

  {#if gridfsData.length > 0}
    <div class="w3-container">
  <!--     <h5>Single Data Samples (JSON)</h5>
   -->
      <div class="w3-responsive">

        <table class="w3-table-all" style="width:100%">
          <thead>
          <tr class="w3-dark-grey">
            <th class="w3-left-align">Filename</th>
            <th class="w3-right-align">Actions</th>
          </tr>
          </thead>
          {#each gridfsData as fname, i}
            <tr>
              <td class="w3-left-align">{fname}</td>
              <td class="w3-right-align">
                <div>
                  <button on:click={deleteCSV} index={i}>Delete</button>
                  <button on:click={downloadCSV} index={i}>Download</button>
                </div>
              </td>
            </tr>
          {/each }
        </table>
      </div>
    </div>
  {/if }
{/if }

{#if scenario_type == "Static"}

  <div class="w3-panel w3-blue">
    <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
      <b>Static Attack Datasets</b>
    </h1>
  </div>

  {#if staticAttacks.length > 0}
    <div class="w3-container">
      <div class="w3-responsive">
        <table class="w3-table-all" style="width:100%">
          <thead>
            <tr class="w3-dark-grey">
              {#each Object.keys(staticAttacks[0]) as header, i}
                <th>{ header }</th>
              {/each }
            </tr>
          </thead>
          {#each staticAttacks as obj, i}
            <tr>
              {#each Object.keys(staticAttacks[0]) as header, i }
                <td on:click={copyDatasetName}>{obj[header]}</td>
              {/each }
            </tr>
          {/each }
        </table>
      </div>
    </div>
  {/if }

  <div class="w3-row w3-section">
    <div class="w3-half">
      <input id="staticDatasetToTrain" class="w3-input w3-border" name="dataset" type="text" placeholder="Dataset">
    </div>
    <div class="w3-rest">
      <button on:click={trainParameterDetection} class="w3-col w3-input w3-border">Train Model on Dataset</button>
    </div>
  </div>

  <div class="w3-row w3-section">
    <div class="w3-half">
      <input id="downloadZipFoldername" class="w3-input w3-border" name="dataset" type="text" placeholder="Foldername">
    </div>
    <div class="w3-rest">
      <button on:click={downloadZipFolder} class="w3-col w3-input w3-border">Export Folder (.zip)</button>
    </div>
  </div>

  <hr>

  <div class="w3-panel w3-blue">
    <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
      <b>Trained Models</b>
    </h1>
  </div>

  {#if staticModels.length > 0}
    <div class="w3-container">
      <div class="w3-responsive">
        <table class="w3-table-all" style="width:100%">
          <thead>
            <tr class="w3-dark-grey">
              {#each Object.keys(staticModels[0]) as header, i}
                <th>{ header }</th>
              {/each }
            </tr>
          </thead>
          {#each staticModels as obj, i}
            <tr>
              {#each Object.keys(staticModels[0]) as header, i }
                <td on:click={copyModelName}>{obj[header]}</td>
              {/each }
            </tr>
          {/each }
        </table>
      </div>
    </div>
  {/if }

  <div class="w3-row w3-section">
    <div class="w3-third">
      <input id="staticTrainedDataset" class="w3-input w3-border" name="dataset" type="text" placeholder="Dataset">
    </div>
    <div class="w3-third">
      <input id="staticTrainedModel" class="w3-input w3-border" name="model" type="text" placeholder="Model">
    </div>
    <div class="w3-rest">
      <button on:click={runStaticDetection} class="w3-col w3-input w3-border">Run Detection</button>
    </div>
  </div>

  <hr>

  <div class="w3-panel w3-blue">
    <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
      <b>Detection Statistics</b>
    </h1>
  </div>

  <div class="w3-container">
    <h2>Evaluation Parameters</h2>
    <!-- <p>test</p> -->

    <div class="w3-display-container w3-text-white">
      <img id="statsChartPic" src="https://via.placeholder.com/468x60?text=Evaluation+Matplotlib+Chart+Results" alt="stats" style="width:100%">
    </div>

  </div>
  <hr>

{/if }

{#if scenario_type == "Driving Simulation"}

  <div class="w3-panel w3-blue">
    <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
      <b>AutoPilot Simulation</b>
    </h1>
  </div>

  <br>

  <div class="w3-row w3-section">
    <div class="w3-rest">
      <button class="w3-col w3-input w3-border" on:click={tableToCsv}>Download Data as CSV</button>
    </div>
  </div>

  <hr>

  {#if driving_data.length > 0}
    <div class="w3-container">
      <div class="w3-responsive">
        <table class="w3-table-all" style="width:100%">
          <thead>
            <tr class="w3-dark-grey">
              {#each Object.keys(driving_data[0]) as header, i}
                <th>{ header }</th>
              {/each }
            </tr>
          </thead>
          {#each driving_data as obj, i}
            <tr>
              {#each Object.keys(driving_data[0]) as header, i }
                <td>{obj[header]}</td>
              {/each }
            </tr>
          {/each }
        </table>
      </div>
    </div>
  {/if }

{/if }

<style>
	hr {
    color: white;
    border-top: 1px solid white;
  }
</style>

