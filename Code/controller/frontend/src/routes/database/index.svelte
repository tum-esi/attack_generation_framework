<script>
    import { xmlReadRequest, xmlWriteRequest } from '$lib/requests.js';
    import Toast from '$lib/Toast.svelte';
    import { notifications } from '$lib/notifications.js';

    let refs1 = [];
    let refs2 = [];

    let dbCollections = {};
    let collection_selected = "";
    let dbname_selected = "";
    let collection_data = [];

    function getDBCollections() {
        xmlReadRequest("/allapi", function(xhr) {
            let tmp = JSON.parse(xhr.response);
            if (tmp.data) {
                notifications.success("Found data.")
                dbCollections = JSON.parse(tmp.data);
                console.log(dbCollections);
            }
        });
    }

    function getCollection() {
        let collection = this.innerText;
        let dbname = this.parentElement.previousElementSibling.innerHTML;
        collection_selected = collection;
        dbname_selected = dbname;

        let url = '/api/'+dbname+'/'+collection;
        xmlReadRequest(url, function(xhr) {
            let tmp = JSON.parse(xhr.response);
            if (tmp.data) {
                notifications.success("Found data.");
                collection_data = tmp.data;
            }
        });
    }

    function deleteData() {

        if (collection_selected == "" && dbname_selected == "") {
            notifications.danger("click on a collection name first.")
        }
        let url = '/api/'+dbname_selected+'/'+collection_selected;
        xmlWriteRequest(url, "DELETE", {}, function(res) {
            let tmp = JSON.parse(xhr.response);
            if (!tmp.error) {
                notifications.success("Collection deleted.");
            }
        });
    }
</script>

<svelte:head>
    <title>Database</title>
</svelte:head>

<Toast />

<hr>

<div class="w3-panel w3-blue">
  <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
  <b>Databases and Collections</b></h1>
</div>

<button class="w3-col w3-input w3-border" on:click={getDBCollections}>DBs and Collections</button>

<br>

{#each Object.entries(dbCollections) as [title, collections]}
    <div class="db-name">{title}</div>
    <ul>
        {#each collections as item, index}
            <li class="db-collection" bind:this={refs1[index]} on:click={getCollection}>
                {item}
            </li>
        {/each}
        <br>
    </ul>
{/each}

<hr>

<div class="w3-panel w3-blue">
  <h1 class="w3-text-yellow" style="text-shadow:1px 1px 0 #444">
  <b>Collection Data</b></h1>
</div>

<div class="w3-row w3-section">
    <button on:click={deleteData} class="w3-col w3-input w3-border" >Clear Collection Data</button>
</div>

<ul>
    {#each collection_data as item, index}
        <li bind:this={refs2[index]}>
            {JSON.stringify(item, undefined, 2)}
        </li>
    {/each}
</ul>


<style>
    .db-name {
        text-align: left;
        font-weight: bold;
    }
    .db-collection {
        text-align: left;
    }
    hr {
        color: white;
        border-top: 1px solid white;
    }
</style>
