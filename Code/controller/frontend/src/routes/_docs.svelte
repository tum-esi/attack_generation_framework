<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Docs</title>
</svelte:head>

<div class="content">
	<h3>How to build a container testbed network?</h3>
	<ul>
		<li>Create a docker network and connect all containers to this network (this allows containers to discover each other)</li>
		<li>If persistent storage is in use, make sure to map volumes to folders specified in /persistent/example_app because /persistent has volume mappings to the local computer folder ./persistent</li>
		<li>(keep in mind) </li>
	</ul>

	<h3>Containers Page</h3>
	<ul>
		<li>When starting a new container, make sure to specify ports as follows: (1) 8199-8299:8200 for ranges e.g. as with attack-generator, (2) 8300:8300,5900:5900,6080:80 for multiple mappings e.g. as with receiver.</li>
	</ul>

	<h3>Configuration Page</h3>
	<ul>
		<li>Add new protocols and attacks (option to select source IP of containers for spoofing, random choice of source ip, etc.).</li>
	</ul>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
