<script type="text/javascript">
	export let title;
	export let data;
	export let headers;
</script>

<div class="w3-container">
	<!-- <h5>{ title }</h5> -->
	<div class="w3-responsive">
		<table class="w3-table-all" style="width:100%">
			{#if data}
				<thead>
				<tr class="w3-dark-grey">
					{#each headers as header, i}
						<th>{ header }</th>
					{/each }
				</tr>
				</thead>
				{#each data as obj, i}
					<tr>
						{#each headers as header, i }
							<td>{obj[header]}</td>
						{/each }
					</tr>
				{/each }
			{/if }
		</table>
	</div>
</div>


<style type="text/css">
	table, th, td {
		border: 1px solid black;
		border-collapse: collapse;
	}
	th, td {
		padding: 5px;
		text-align: left;
		vertical-align: middle;
	}
</style>
