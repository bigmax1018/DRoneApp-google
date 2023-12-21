<script>
	import {onMount} from 'svelte';
  let isOn;
  const updateLineChart = on => {

  };

	const random = (max = 100) => {
		return Math.round(Math.random() * max) + 20
	}

const randomData = () => {
  return [
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
  ]
}

	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

	const colors = {
		primary: "#0891b2",
		primaryLight: "#06b6d4",
		primaryLighter: "#22d3ee",
		primaryDark: "#0e7490",
		primaryDarker: "#155e75",
	}

	const options = {
		responsive: true,
		scales: {
			y: {
				gridLines: true,
			},
			x: {
				gridLines: false,
			},
		},
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false
			},
		},
		tooltips: {
			hasIndicator: true,
			intersect: false,
		},
	}

	const data = {
		labels: months,
		datasets: [
			{
				data: randomData(),
				fill: false,
				borderColor: colors.primary,
				borderWidth: 2,
				pointRadius: 0,
				pointHoverRadius: 0,
			},
		],
	}

	onMount( () => {
		new Chart(document.getElementById('lineChart'), {
			type: 'line',
			data,
			options,
		})
	})
</script>

<div class="col-span-2 bg-white rounded-md dark:bg-darker">
	<!-- Card header -->
	<div class="flex items-center justify-between p-4 border-b dark:border-primary">
	  <h4 class="text-lg font-semibold text-gray-500 dark:text-light">My Farming Rate</h4>
	  <div class="flex items-center">
			<button
				class="relative focus:outline-none"
				on:click={() => {
					isOn = !isOn;
					updateLineChart(isOn);
				}}
			>
		  <div class="w-12 h-6 transition rounded-full outline-none bg-primary-100 dark:bg-primary-darker"></div>
			<div
				class="{isOn 
					? 'translate-x-6 bg-primary-light dark:bg-primary'
					: 'translate-x-0  bg-white dark:bg-primary-100'
				} absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform scale-110 rounded-full shadow-sm"
			></div>
		</button>
	  </div>
	</div>
	<!-- Chart -->
	<div class="relative p-4 h-72">
	  <canvas id="lineChart"></canvas>
	</div>
  </div>