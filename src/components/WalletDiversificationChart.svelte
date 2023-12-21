<script>
	import {onMount} from 'svelte';
  let isOn;
  const updateDoughnutChart = on => {

  };

	const random = (max = 100) => {
		return Math.round(Math.random() * max) + 20
	}

	const colors = {
		primary: "#0891b2",
		primaryLight: "#06b6d4",
		primaryLighter: "#22d3ee",
		primaryDark: "#0e7490",
		primaryDarker: "#155e75",
	}

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: 'bottom'
			},
		},

		title: {
			display: false,
		},
		animation: {
			animateScale: true,
			animateRotate: true,
		},
	}

	const data = {
		labels: ['SNT', 'SFSC', 'CSTM'],
		datasets: [
			{
				data: [random(), random(), random()],
				backgroundColor: [colors.primary, colors.primaryLighter, colors.primaryLight],
				hoverBackgroundColor: colors.primaryDark,
				borderWidth: 0,
				weight: 0.5,
			},
		],
	}

	onMount( () => {
		new Chart(document.getElementById('doughnutChart'), {
			type: 'doughnut',
			data,
			options,
		});
	})
</script>

<div class="bg-white rounded-md dark:bg-darker m-4">
	<!-- Card header -->
	<div class="flex items-center justify-between p-4 border-b dark:border-primary">
		<h4 class="text-lg font-semibold text-gray-500 dark:text-light">Wallet Diversification</h4>
		<div class="flex items-center">
			<button
				class="relative focus:outline-none"
				x-cloak
				on:click={() => {
					isOn = !isOn;
					updateDoughnutChart(isOn);
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
		<canvas id="doughnutChart"></canvas>
	</div>
	</div>