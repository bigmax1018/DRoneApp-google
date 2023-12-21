<script>
  import { slide } from "svelte/transition";
  import SidebarFooter from "./SidebarFooter.svelte";
  import {
    isMobileMainMenuOpen,
  } from "../../store/common.js";
  
  export let containerClass = 'flex-shrink-0 hidden w-64 bg-white border-r dark:border-primary-darker dark:bg-darker md:block';
  export let hasCustomButton = true;

  let path = ""
  let isOpen = false;
  
  const toggle = (currentPath) => {
    if (path === currentPath) {
      isOpen = !isOpen;
    } else {
      path = currentPath;
      isOpen = true;
    }
  }

</script>

<aside class="{containerClass}">
  <div class="flex flex-col h-full">
    <!-- Sidebar links -->
    <nav class="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
      <div>
        <button
          class="{ isOpen && path === "wallet" ? 'bg-primary-100 dark:bg-primary': ''} w-full flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 hover: cursor dark:hover:bg-primary"
          on:click={() => toggle('wallet')}
          aria-expanded={isOpen}
        >
          <span>
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </span>
          <span class="ml-2 text-sm"> My Wallet </span>
          <span class="ml-auto" aria-hidden="true">
            <!-- active class 'rotate-180' -->
            <svg
              class="{isOpen && path === "wallet" ? 'rotate-180' : ''} w-4 h-4 transition-transform transform"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
        {#if (path === 'wallet' && isOpen)}
          <div transition:slide={{ duration: 300 }} class="mt-2 space-y-2 px-7">
            <!-- active & hover classes 'text-gray-700 dark:text-light' -->
            <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
              <a
                href="/"
                class="text-gray-400 block p-2 text-sm  transition-colors rounded-md dark:text-light dark:hover:text-light hover:text-gray-700"
                on:click={() => {isOpen = !isOpen; isMobileMainMenuOpen.set(false)}}
              >
                Wallet Overview
              </a>

              <a
                href="/send"
                class="text-gray-400 block p-2 text-sm  transition-colors rounded-md dark:text-light dark:hover:text-light hover:text-gray-700"
                on:click={() => {isOpen = !isOpen; isMobileMainMenuOpen.set(false)}}
              >
                Send
              </a>

              <a
                href="/swap"
                class="text-gray-400 block p-2 text-sm  transition-colors rounded-md dark:text-light dark:hover:text-light hover:text-gray-700"
                on:click={() => {isOpen = !isOpen; isMobileMainMenuOpen.set(false)}}
              >
                Swap
              </a>

              <a
                href="/frank"
                class="text-gray-400 block p-2 text-sm  transition-colors rounded-md dark:text-light dark:hover:text-light hover:text-gray-700"
                on:click={() => {isOpen = !isOpen; isMobileMainMenuOpen.set(false)}}
              >
                frank
              </a>
          </div>
        {/if}
      </div>

      <div>
        <button
          class="{ isOpen && path === "profile" ? 'bg-primary-100 dark:bg-primary': ''} w-full flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 hover: cursor dark:hover:bg-primary"
          on:click={() => toggle('profile')}
          aria-expanded={isOpen}
        >
          <span>
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
                d="M18 6L20 8L17 11L15 9M11.6915 12.3086L21.0001 3M13 15.5C13 17.9833 10.9851 20 8.49878 20C6.01485 20 4 17.9833 4 15.5C4 13.0167 6.01485 11 8.49878 11C10.9851 11 13 13.0167 13 15.5Z" 
              />
            </svg>
          </span>
          <span class="ml-2 text-sm"> My Profile </span>
          <span class="ml-auto" aria-hidden="true">
            <!-- active class 'rotate-180' -->
            <svg
              class="{isOpen && path === "profile" ? 'rotate-180' : ''} w-4 h-4 transition-transform transform"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
        {#if (path === 'profile' && isOpen)}
          <div transition:slide={{ duration: 300 }} class="mt-2 space-y-2 px-7">
            <!-- active & hover classes 'text-gray-700 dark:text-light' -->
            <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
              <a
                href="/profile"
                class="text-gray-400 block p-2 text-sm  transition-colors rounded-md dark:text-light dark:hover:text-light hover:text-gray-700"
                on:click={() => {isOpen = !isOpen; isMobileMainMenuOpen.set(false)}}
              >
                Profile Page
              </a>

              <a
                href="/"
                class="text-gray-400 block p-2 text-sm  transition-colors rounded-md dark:text-light dark:hover:text-light hover:text-gray-700"
                on:click={() => {isOpen = !isOpen; isMobileMainMenuOpen.set(false)}}
              >
                Bank Info
              </a>

              <a
                href="/"
                class="text-gray-400 block p-2 text-sm  transition-colors rounded-md dark:text-light dark:hover:text-light hover:text-gray-700"
                on:click={() => {isOpen = !isOpen; isMobileMainMenuOpen.set(false)}}
              >
                Account Info
              </a>
          </div>
        {/if}
      </div>

      <div>
        <a
          href="/send"
          class="{ isOpen && path === "profile" ? 'bg-primary-100 dark:bg-primary': ''} flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 hover: cursor dark:hover:bg-primary"
          on:click={() => {isOpen = false; isMobileMainMenuOpen.set(false)}}
          aria-expanded={isOpen}
        >
          <span>
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
                d="M15 6V21M15 6L21 3V18L15 21M15 6L9 3M15 21L9 18M9 18L3 21V6L9 3M9 18V3"
                stroke="currentColor" 
              />
            </svg>
          </span>
          <span class="ml-2 text-sm"> Crypto Map </span>
        </a>
      </div>
      
    </nav>

    {#if hasCustomButton}
      <SidebarFooter />
    {/if}
  </div>
</aside>