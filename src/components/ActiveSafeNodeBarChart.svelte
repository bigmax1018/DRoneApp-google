<script>
	import {onMount} from 'svelte';
	
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

	const colors = {
		primary: "#0891b2",
		primaryLight: "#06b6d4",
		primaryLighter: "#22d3ee",
		primaryDark: "#0e7490",
		primaryDarker: "#155e75",
	}

	const options = {
		scales: {
			y: {
				display: false,
				gridLines: false,
			},
			x: {
				display: false,
				gridLines: false,
			},
		},
		cornerRadius: 2,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
		},
		tooltips: {
			prefix: 'Users',
			bodySpacing: 4,
			footerSpacing: 4,
			hasIndicator: true,
			mode: 'index',
			intersect: true,
		},
		hover: {
			mode: 'nearest',
			intersect: true,
		},
	}

	const data = {
		labels: [...randomData(), ...randomData()],
		datasets: [
			{
				data: [...randomData(), ...randomData()],
				backgroundColor: colors.primary,
				borderWidth: 0,
				categoryPercentage: 1,
			},
		],
	}

	onMount( () => {
		new Chart(document.getElementById('activeUsersChart'), {
			type: 'bar',
			data,
			options,
		})
	})
</script>

<div class="col-span-1 bg-white rounded-md dark:bg-darker">
	<div class="p-4 border-b dark:border-primary">
		<h4 class="text-lg font-semibold text-gray-500 dark:text-light">Active SAFE Nodes</h4>
	</div>
	<p class="p-4">
		<span class="text-2xl font-medium text-gray-500 dark:text-light" id="usersCount">0</span>
		<span class="text-sm font-medium text-gray-500 dark:text-primary">Elders</span>
	</p>
	<div class="relative p-4">
		<canvas id="activeUsersChart"></canvas>
	</div>
</div>