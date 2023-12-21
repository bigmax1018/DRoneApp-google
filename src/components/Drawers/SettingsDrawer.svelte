<script>
  import { fade, fly } from "svelte/transition";
  import {
    toggleDarkMode,
    toggleTheme,
    isSettingsPanelOpen,
    isDark
  } from "../../store/common";
  let isTransitioning = false;
</script>

{#if $isSettingsPanelOpen}
  <div
    transition:fade={{
      delay: 0,
      duration: 300,
    }}
    class="fixed inset-0 z-10 bg-primary-darker"
    style="opacity: 0.5;"
    aria-hidden="true"
    on:click={() => isSettingsPanelOpen.set(!$isSettingsPanelOpen)}
  >
</div>
<section
  transition:fly={{
    delay: 0,
    duration: 300,
    x: 100
  }}
  class="{isTransitioning ? 'translate-x-full': 'translate-x-0'} fixed inset-y-0 right-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
  tabindex="-1"
  on:keydown.escape={() => isSettingsPanelOpen.set(!$isSettingsPanelOpen)}
>
  <div class="absolute left-0 p-2 transform -translate-x-full">
    <!-- Close button -->
    <button
      on:click={() => isSettingsPanelOpen.set(!$isSettingsPanelOpen)}
      class="p-2 text-white rounded-md focus:outline-none focus:ring"
    >
      <svg
        class="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
  <!-- Panel content -->
  <div class="flex flex-col h-screen">
    <!-- Panel header -->
    <div
      class="flex flex-col items-center justify-center flex-shrink-0 px-4 py-8 space-y-4 border-b dark:border-primary-dark"
    >
      <span aria-hidden="true" class="text-gray-500 dark:text-primary">
        <svg
          class="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </span>
      <h2
        id="settinsPanelLabel"
        class="text-xl font-medium text-gray-500 dark:text-light"
      >
        Settings
      </h2>
    </div>
    <!-- Content -->
    <div class="flex-1 overflow-hidden hover:overflow-y-auto">
      <!-- Theme -->
      <div class="p-4 space-y-4 md:p-8">
        <h6 class="text-lg font-medium text-gray-400 dark:text-light">
          Mode
        </h6>
        <div class="flex items-center space-x-8">
          <!-- Light button -->
          <button
          on:click={() => {
            isDark.set(!$isDark);
            toggleDarkMode('light');
          }}
            class="{$isDark
              ? 'text-gray-500 dark:text-primary-light'
              : 'border-gray-900 text-gray-900 dark:border-primary-light dark:text-primary-100'} flex items-center justify-center px-4 py-2 space-x-4 transition-colors border rounded-md hover:text-gray-900 hover:border-gray-900 dark:border-primary dark:hover:text-primary-100 dark:hover:border-primary-light focus:outline-none focus:ring focus:ring-primary-lighter focus:ring-offset-2 dark:focus:ring-offset-dark dark:focus:ring-primary-dark"
          >
            <span>
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </span>
            <span>Light</span>
          </button>

          <!-- Dark button -->
          <button
          on:click={() => {
            isDark.set(!$isDark);
            toggleDarkMode('dark');
          }}
            class="{$isDark
              ? 'border-gray-900 text-gray-900 dark:border-primary-light dark:text-primary-100'
              : 'text-gray-500 dark:text-primary-light'} flex items-center justify-center px-4 py-2 space-x-4 transition-colors border rounded-md hover:text-gray-900 hover:border-gray-900 dark:border-primary dark:hover:text-primary-100 dark:hover:border-primary-light focus:outline-none focus:ring focus:ring-primary-lighter focus:ring-offset-2 dark:focus:ring-offset-dark dark:focus:ring-primary-dark"
          >
            <span>
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </span>
            <span>Dark</span>
          </button>
        </div>
      </div>

      <!-- Colors -->
      <div class="p-4 space-y-4 md:p-8">
        <h6 class="text-lg font-medium text-gray-400 dark:text-light">
          Colors
        </h6>
        <div>
          <button
            on:click={() => toggleTheme("cyan")}
            class="w-10 h-10 rounded-full"
            style="background-color: var(--color-cyan)"
          />
          <button
            on:click={() => toggleTheme("teal")}
            class="w-10 h-10 rounded-full"
            style="background-color: var(--color-teal)"
          />
          <button
            on:click={() => toggleTheme("green")}
            class="w-10 h-10 rounded-full"
            style="background-color: var(--color-green)"
          />
          <button
            on:click={() => toggleTheme("fuchsia")}
            class="w-10 h-10 rounded-full"
            style="background-color: var(--color-fuchsia)"
          />
          <button
            on:click={() => toggleTheme("blue")}
            class="w-10 h-10 rounded-full"
            style="background-color: var(--color-blue)"
          />
          <button
            on:click={() => toggleTheme("violet")}
            class="w-10 h-10 rounded-full"
            style="background-color: var(--color-violet)"
          />
        </div>
      </div>
    </div>
  </div>
</section>
{/if}
