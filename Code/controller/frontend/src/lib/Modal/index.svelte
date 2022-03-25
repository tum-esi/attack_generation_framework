<script type="text/javascript">
	import { xmlWriteRequest } from '$lib/requests.js';
	import Toast from '$lib/Toast.svelte';
	import { notifications } from '$lib/notifications.js'
	import { onMount } from 'svelte';
	
	export let data;
	export let id;
	export let method;
	export let url;
	export let button;
	export let color;
	export let color2;
	let snackId;
	let snackColor = "w3-red";

	onMount(async() => {
		snackId = id+"Snack";
	});

	function closeModal() {
		let modal = document.getElementById(id);
		modal.style.display='none';
		cleanModal(modal);
	}

	function openModal() {
		document.getElementById(id).style.display='block';
	}

	function cleanModal(modal) {
		modal.querySelectorAll("input, select").forEach(function(el) {
			if (el.tagName == "SELECT") {
				for (let i=0; i < el.childElementCount; i++) {
					if (i==0) {
						el.childNodes[i].selected = true;
					} else {
						el.childNodes[i].selected = false;
					}
				}
			} else if (el.type == "checkbox") {
				el.checked = false;
			} else if (el.type != "submit") {
				el.value = "";
			}
		})
	}

	async function submit() {
		let data = {};
		this.querySelectorAll("input, select").forEach(function(el) {
			if (el.name != "") {
				if (el.type == "checkbox") {
					data[el.name] = el.checked;
				} else if (el.tagName == "SELECT") {
					if (el.value != "") {
						data[el.name] = el.childNodes[parseInt(el.value)+1].innerText;
					} else {
						data[el.name] = "";
					}
				} else {
					data[el.name] = el.value;
				}
			}
		})
		var t0 = performance.now()
		xmlWriteRequest(url, method, data, function(res) {
			var t1 = performance.now()
			console.log("modal submit request took " + (t1 - t0) + " milliseconds.")

			console.log(res, "response from modal request")
			closeModal();
			notifications.success('Submission successfull');
		});
	}

</script>

<Toast />


<div id={id} class="w3-modal">
	<div class="w3-modal-content">
		<div class="w3-container">
			<span on:click={closeModal} class="w3-button w3-display-topright">&times;</span>

			<form class="w3-container" on:submit|preventDefault={submit}>
				<h2 class={color2}>{button}</h2>
				{#if data}
					{#each data as obj, i}
						<p>
							{#if obj["type"] == "select" }
								<label class={color2}><b>{obj["label"]}</b></label>
								<select class="w3-select w3-border" name={obj["name"]}>
								 	<option value="" disabled selected>Select {obj["label"]}</option>
									{#each obj["options"] as option, j}
										<option value={j}>{option}</option>
									{/each}
								</select>
							{:else if obj["type"] == "checkbox" }
								<input class="w3-check" type="checkbox" checked="" name={obj["name"]}> <!-- checked="checked" -->
								<label class={color2}><b>{obj["label"]}</b></label>
							{:else }
								<label class={color2}><b>{obj["label"]}</b></label>
								<input class="w3-input w3-border" name={obj["name"]} type={obj["type"]}>
							{/if }
						</p>
					{/each }
				{/if }
				<p>
					<input class="w3-blue" type="submit" value="execute">
					<!-- <button class="w3-btn w3-blue">Register</button> -->
				</p>
			</form>

		</div>
	</div>
</div>

<button class="w3-col w3-input w3-border" on:click={openModal}>{button}</button>

<style type="text/css">
	/*button {
		width: 200px;
	}*/

	div.snackbar {
		visibility: hidden;
		min-width: 250px;
		margin-left: -125px;
		background-color: #333;
		color: #fff;
		text-align: center;
		border-radius: 2px;
		padding: 16px;
		position: fixed;
		z-index: 1;
		left: 50%;
		bottom: 30px;
		font-size: 17px;
	}

	div.snackbar.show {
		visibility: visible;
		-webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
		animation: fadein 0.5s, fadeout 0.5s 2.5s;
	}

	@-webkit-keyframes fadein {
		from {bottom: 0; opacity: 0;} 
		to {bottom: 30px; opacity: 1;}
	}

	@keyframes fadein {
		from {bottom: 0; opacity: 0;}
		to {bottom: 30px; opacity: 1;}
	}

	@-webkit-keyframes fadeout {
		from {bottom: 30px; opacity: 1;} 
		to {bottom: 0; opacity: 0;}
	}

	@keyframes fadeout {
		from {bottom: 30px; opacity: 1;}
		to {bottom: 0; opacity: 0;}
	}
</style>
