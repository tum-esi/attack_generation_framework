<script type="text/javascript">
	export let sensorName = "";
  export let showStats = true;
  export let src = "";
  let name = "carla viewer";
  export let meta = {"frame": 0, "timestamp": 0.0}
  export let sensorData = {};

  function click() {
    console.log(frame);
  }

</script>


<div ref="display" class="image-display" on:click={click}>
	{#if showStats}
    	<h6>Frame: {meta.frame} at time t={meta.timestamp.toFixed(3)} seconds.</h6>
  {/if}
  <img {src} alt="{name}" />
 </div>

