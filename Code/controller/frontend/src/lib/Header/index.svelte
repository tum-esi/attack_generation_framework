<script>
	import { page } from '$app/stores';

	function myFunction() {
		var x = document.getElementById("demo");
		if (x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
		} else { 
			x.className = x.className.replace(" w3-show", "");
		}
	}

</script>

<header>
	<div class="w3-bar w3-blue">
		<a href="/" class:active={$page.path === '/'} class="w3-bar-item w3-button">Home</a>
		<a href="/containers" class:active={$page.path === '/containers'} class="w3-bar-item w3-button w3-hide-small">Containers</a>
		<a href="/configuration" class:active={$page.path === '/configuration'} class="w3-bar-item w3-button w3-hide-small">Configuration</a>
		<a href="/simulation" class:active={$page.path === '/simulation'} class="w3-bar-item w3-button w3-hide-small">Simulation</a>
		<a href="/datasets" class:active={$page.path === '/datasets'} class="w3-bar-item w3-button w3-hide-small">Datasets</a>
		<a href="/database" class:active={$page.path === '/database'} class="w3-bar-item w3-button w3-hide-small">Database</a>
		<a sveltekit:prefetch href="/recovery" class:active={$page.path === '/recovery'} class="w3-bar-item w3-button w3-hide-small">Recovery</a>
		<!-- <a href="/docs" class:active={$page.path === '/docs'} class="w3-bar-item w3-button w3-hide-small">Docs</a> -->
		<!-- <a href="http://0.0.0.0:8000/swagger" class="w3-bar-item w3-button w3-hide-small">Swagger</a> -->
		<button class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" on:click={myFunction}>&#9776;</button>
	</div>

	<div id="demo" class="w3-bar-block w3-blue w3-hide w3-hide-large w3-hide-medium">
		<a href="/" class:active={$page.path === '/'} class="w3-bar-item w3-button">Home</a>
		<a href="/containers" class:active={$page.path === '/containers'} class="w3-bar-item w3-button">Containers</a>
		<a href="/configuration" class:active={$page.path === '/configuration'} class="w3-bar-item w3-button">Configuration</a>
		<a href="/simulation" class:active={$page.path === '/simulation'} class="w3-bar-item w3-button">Simulation</a>
		<a href="/datasets" class:active={$page.path === '/datasets'} class="w3-bar-item w3-button">Datasets</a>
		<a href="/database" class:active={$page.path === '/database'} class="w3-bar-item w3-button">Database</a>
		<a sveltekit:prefetch href="/recovery" class:active={$page.path === '/recovery'} class="w3-bar-item w3-button">Recovery</a>
		<!-- <a href="/docs" class:active={$page.path === '/docs'} class="w3-bar-item w3-button">Docs</a> -->
		<!-- <a href="http://0.0.0.0:8000/swagger" class="w3-bar-item w3-button">Swagger</a> -->
	</div>
</header>

<style>

	a.active {
		color: yellow;
	}

</style>
