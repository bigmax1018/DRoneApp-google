<script>
  let isOn;
  const updateDoughnutChart = on => {

  };

  const upr = "../assets/img/upr.png";
  const downg = "../assets/img/downg.png";

	let data = [
		{id: 1, type: "send", amount: "0.0004", date: "4/3/23", totoal: "12.37"},
		{id: 2, type: "receive",amount: "0.00015", date: "3/8/23", totoal: "200.42"},
		{id: 3, type: "receive", amount: "0.00015", date: "2/4/23", totoal: "161.35"},
		{id: 4, type: "send",  amount: "0.002", date: "1/4/23", totoal: "21.15"},
		{id: 5, type: "receive", amount: "0.0001", date: "5/1/22", totoal: "453.17"},
		{id: 6, type: "send", amount: "0.0006", date: "7/8/22", totoal: "1.98"}
	]
</script>

<div class="bg-white rounded-md dark:bg-darker">
  <div class="flex items-center justify-between p-4 border-b dark:border-primary">
    <h4 class="text-lg font-semibold text-gray-500 dark:text-light">Wallet History</h4>
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

									{#each data as item (item.id)}
                    <tr>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <div class="flex items-center gap-x-2">
                              <img class="object-cover w-8 h-8 rounded-full" src={item.type =="send" ? upr : downg} alt="">
                              <div><a href="/">
                                  <h2 class="text-sm font-medium text-gray-800 dark:text-white ">{item.type}</h2>
                                  <p class="text-xs font-normal text-gray-600 dark:text-gray-400">Sent: {item.amount}</p></a>
                              </div>
                          </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        ${item.totoal}
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                          <div class="flex items-center gap-x-6">
                            <a href="/">
                              <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                {item.date}
                              </button>
                            </a>
                            <a href="/swap">
                            <button class="bg-blue-500 m-0 hover:bg-blue-400 text-white font-bold px-2 py-1 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                              Swap
                            </button></a>
                          </div>
                      </td>
                    </tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>