<script context="module">
	export const prerender = true;
</script>

<script>
	import logo from '$lib/assets/fig1-fixed.png';
</script>

<svelte:head>
	<title>ADGF</title>
</svelte:head>

<section>

	<div class="w3-container w3-padding-64 w3-grayscale-min" id="us">
		<div class="w3-content w3-center">
			<h1 class="w3-center w3-text-grey"><b>Paper: Attack Data Generation Framework for Autonomous Vehicle Sensors</b></h1>
			<img src={logo} style="width:60%;margin:32px 0" /> <!-- width="800px" height="2100px" -->
			
		</div>
	</div>
	
	<!-- <Counter /> -->
</section>

<style>
	/*section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}*/

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
