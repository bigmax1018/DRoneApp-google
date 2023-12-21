<script>
	import { onMount } from 'svelte';
	export let totalAmount;

	const labels = ["January", "February", "March", "April", "May", "January", "February", "March", "April", "May", "June"];
	const data = {
		labels: labels,
		datasets: [
		{
			borderColor: "cyan",
			data: [0, 120, 15, 22, 72, 83, 0, 120, 15, 22, 72, 83, 45],
		},
		],
	};
	
	const configLineChart = {
		type: "line",
		data,
		options: {
			plugins: {
				legend: {
					display: false
				},
			},
		},
	};
	
	onMount( () => {
		new Chart(
			document.getElementById("chartLine"),
			configLineChart
		);
	});

	const numberWithCommas = (number) => {
		const round = Math.round(number * 100) / 100;
		return round.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	
</script>


<div class="col-span-2 bg-white rounded-md dark:bg-darker">
	
	<div class="flex flex-wrap items-center">
		<div class="shadow-lg rounded-lg w-[100%]">
			<!-- {#if totalAmount == 0}
				<p class="m-auto mt-8">Loading...</p>
			{:else} -->
			<h1 class="mx-auto mt-[2%] text-center text-3xl font-extrabold">${numberWithCommas(totalAmount)}</h1>
			<canvas class="p-2 w-[100%] h-[100%]" id="chartLine"></canvas>
			<!-- {/if} -->
		</div>
	</div>
</div>