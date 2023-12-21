<script>
	let isOn;
	const updateDoughnutChart = on => {

	};

	export let diversifications;
	export let priceConversion;

	const numberWithCommas = (number) => {
		const round = Math.round(number * 100) / 100;
		return round.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
</script>

<div class="bg-white rounded-md dark:bg-darker">
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
					: 'translate-x-0  bg-white dark:bg-primary-100'} absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform scale-110 rounded-full shadow-sm"
				>
			</div>
		</button>
	  </div>
	</div>
	
	<div class="relative h-112">
	  <section class="container px-4 py-1 mx-auto">
			<div class="flex flex-col">
				<div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
					<div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
						<div class="overflow-hidden  md:rounded-lg">
							<table class="min-w-full divide-y">
								<tbody class="bg-white divide-y divide-gray-200 bg-transparent dark:bg-darker">
									{#if diversifications.length == 0}
										<tr>
											<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
												<div class="flex items-center gap-x-2">
													<img class="object-cover w-8 h-8 rounded-full" src="./assets/img/btc.png" alt="btcImg">
													<div>
														<a href="/bitcoin">
															<h2 class="text-sm font-medium text-gray-800 dark:text-white ">Bitcoin</h2>
															<p class="text-xs font-normal text-gray-600 dark:text-gray-400">Ticker: BTC</p>
														</a>
													</div>
												</div>
											</td>
											<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
												$0
											</td>
											<td class="px-4 py-4 text-sm whitespace-nowrap">
												<div class="flex items-center gap-x-3">
													<a href="/send">
														<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
														Send
														</button>
													</a>
													<a href="/swap">
														<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
															Swap
														</button>
													</a>
												</div>
											</td>
										</tr>

										<tr>
											<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
												<div class="flex items-center gap-x-2">
													<img class="object-cover w-8 h-8 rounded-full" src="./assets/img/eth.png" alt="btcImg">
													<div>
														<a href="/ethereum">
															<h2 class="text-sm font-medium text-gray-800 dark:text-white ">Ethereum</h2>
															<p class="text-xs font-normal text-gray-600 dark:text-gray-400">Ticker: ETH</p>
														</a>
													</div>
												</div>
											</td>
											<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
												$0
											</td>
											<td class="px-4 py-4 text-sm whitespace-nowrap">
												<div class="flex items-center gap-x-3">
													<a href="/send">
														<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
														Send
														</button>
													</a>
													<a href="/swap">
														<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
															Swap
														</button>
													</a>
												</div>
											</td>
										</tr>

										<tr>
											<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
												<div class="flex items-center gap-x-2">
													<img class="object-cover w-8 h-8 rounded-full" src="./assets/img/usdt.png" alt="btcImg">
													<div>
														<a href="/tether">
															<h2 class="text-sm font-medium text-gray-800 dark:text-white ">Tether</h2>
															<p class="text-xs font-normal text-gray-600 dark:text-gray-400">Ticker: USDT</p>
														</a>
													</div>
												</div>
											</td>
											<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
												$0
											</td>
											<td class="px-4 py-4 text-sm whitespace-nowrap">
												<div class="flex items-center gap-x-3">
													<a href="/send">
														<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
														Send
														</button>
													</a>
													<a href="/swap">
														<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
															Swap
														</button>
													</a>
												</div>
											</td>
										</tr>

										<tr>
											<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
												<div class="flex items-center gap-x-2">
													<img class="object-cover w-8 h-8 rounded-full" src="./assets/img/usdc.png" alt="btcImg">
													<div>
														<a href="/usdc">
															<h2 class="text-sm font-medium text-gray-800 dark:text-white ">USD Coin</h2>
															<p class="text-xs font-normal text-gray-600 dark:text-gray-400">Ticker: USDC</p>
														</a>
													</div>
												</div>
											</td>
											<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
												$0
											</td>
											<td class="px-4 py-4 text-sm whitespace-nowrap">
												<div class="flex items-center gap-x-3">
													<a href="/send">
														<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
														Send
														</button>
													</a>
													<a href="/swap">
														<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
															Swap
														</button>
													</a>
												</div>
											</td>
										</tr>

										<tr>
											<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
												<div class="flex items-center gap-x-2">
													<img class="object-cover w-8 h-8 rounded-full" src="./assets/img/trx.png" alt="btcImg">
													<div>
														<a href="/tron">
															<h2 class="text-sm font-medium text-gray-800 dark:text-white ">Tron</h2>
															<p class="text-xs font-normal text-gray-600 dark:text-gray-400">Ticker: TRX</p>
														</a>
													</div>
												</div>
											</td>
											<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
												$0
											</td>
											<td class="px-4 py-4 text-sm whitespace-nowrap">
												<div class="flex items-center gap-x-3">
													<a href="/send">
														<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
														Send
														</button>
													</a>
													<a href="/swap">
														<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
															Swap
														</button>
													</a>
												</div>
											</td>
										</tr>
								  	{:else}
										{#each diversifications as item (item.$id)}
											<tr>
												<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
													<div class="flex items-center gap-x-2">
														<img class="object-cover w-8 h-8 rounded-full" src="./assets/img/btc.png" alt="btcImg">
														<div>
															<a href="/bitcoin">
																<h2 class="text-sm font-medium text-gray-800 dark:text-white ">Bitcoin</h2>
																<p class="text-xs font-normal text-gray-600 dark:text-gray-400">Ticker: BTC</p>
															</a>
														</div>
													</div>
												</td>
												<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
													${numberWithCommas(item.bitcoin * priceConversion.btc)}
												</td>
												<td class="px-4 py-4 text-sm whitespace-nowrap">
													<div class="flex items-center gap-x-3">
														<a href="/send">
															<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
	 
															Send
														</button>
													</a>
													<a href="/swap">
														<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
															Swap
														</a>
													</div>
												</td>
											</tr>

											<tr>
												<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
													<div class="flex items-center gap-x-2">
														<img class="object-cover w-8 h-8 rounded-full" src="./assets/img/eth.png" alt="btcImg">
														<div>
															<a href="/ethereum">
																<h2 class="text-sm font-medium text-gray-800 dark:text-white ">Ethereum</h2>
																<p class="text-xs font-normal text-gray-600 dark:text-gray-400">Ticker: ETH</p>
															</a>
														</div>
													</div>
												</td>
												<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
													${numberWithCommas(item.ethereum * priceConversion.eth)}
												</td>
												<td class="px-2 py-4 text-sm whitespace-nowrap">
													<div class="flex items-center gap-x-3">
														<a href="/send"><button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
														Send
														</button>
													</a>
													<a href="/swap">
														<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
															Swap
														</a>
													</div>
												</td>
											</tr>

											<tr>
												<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
													<div class="flex items-center gap-x-2">
														<img class="object-cover w-8 h-8 rounded-full" src="./assets/img/usdt.png" alt="btcImg">
														<div>
															<a href="/tether">
																<h2 class="text-sm font-medium text-gray-800 dark:text-white ">Tether</h2>
																<p class="text-xs font-normal text-gray-600 dark:text-gray-400">Ticker: USDT</p>
															</a>
														</div>
													</div>
												</td>
												<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
													${numberWithCommas(item.tether)}
												</td>
												<td class="px-2 py-4 text-sm whitespace-nowrap">
													<div class="flex items-center gap-x-3">
														<a href="/send"><button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
														Send
														</button>
													</a>
													<a href="/swap">
														<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
															Swap
														</a>
													</div>
												</td>
											</tr>

											<tr>
												<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
													<div class="flex items-center gap-x-2">
														<img class="object-cover w-8 h-8 rounded-full" src="./assets/img/usdc.png" alt="btcImg">
														<div>
															<a href="/usdc">
																<h2 class="text-sm font-medium text-gray-800 dark:text-white ">USD Coin</h2>
																<p class="text-xs font-normal text-gray-600 dark:text-gray-400">Ticker: USDC</p>
															</a>
														</div>
													</div>
												</td>
												<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
													${numberWithCommas(item.usdc)}
												</td>
												<td class="px-2 py-4 text-sm whitespace-nowrap">
													<div class="flex items-center gap-x-3">
														<a href="/send"><button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
														Send
														</button>
													</a>
													<a href="/swap">
														<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
															Swap
														</a>
													</div>
												</td>
											</tr>

											<tr>
												<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
													<div class="flex items-center gap-x-2">
														<img class="object-cover w-8 h-8 rounded-full" src="./assets/img/trx.png" alt="btcImg">
														<div>
															<a href="/tron">
																<h2 class="text-sm font-medium text-gray-800 dark:text-white ">Tron</h2>
																<p class="text-xs font-normal text-gray-600 dark:text-gray-400">Ticker: TRX</p>
															</a>
														</div>
													</div>
												</td>
												<td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
													${numberWithCommas(item.tron * priceConversion.trx)}
												</td>
												<td class="px-2 py-4 text-sm whitespace-nowrap">
													<div class="flex items-center gap-x-3">
														<a href="/send"><button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
														Send
														</button>
													</a>
													<a href="/swap">
														<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 
															Swap
														</a>
													</div>
												</td>
											</tr>
										{/each}
									{/if}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>