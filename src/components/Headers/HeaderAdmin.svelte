<script>
  import Sidebar from "../Sidebar/Sidebar.svelte";
  import UserDropdown from "../Dropdowns/UserDropdown.svelte";
  import MobileSubMenuDropdown from "../Dropdowns/MobileSubMenuDropdown.svelte";
  import {
    isSettingsPanelOpen,
    isNotificationPanelOpen,
    isSearchPanelOpen,
    isDark,
    isMobileSubMenuOpen,
    isOpenUserDropdown,
    isMobileMainMenuOpen
  } from "../../store/common.js";
  import { toggleDarkMode } from "../../store/common";

  export let profileAvatar ;
  const logo = "../assets/img/logo.png";
  let isMobileSubMenuOpenValue = $isMobileSubMenuOpen;
  let isOpenUserDropdownValue = $isOpenUserDropdown;
  let isMobileMainMenuOpenValue = $isMobileMainMenuOpen;
</script>

<header class="relative bg-white dark:bg-darker">
  <div
    class="flex items-center justify-between p-2 border-b dark:border-primary-darker"
  >
    <!-- Mobile menu button -->
    <button
      on:click="{() => {isMobileMainMenuOpen.set(!$isMobileMainMenuOpen); isMobileMainMenuOpenValue = !isMobileMainMenuOpenValue}}"
      class="p-1 transition-colors duration-200 rounded-md text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark md:hidden focus:outline-none focus:ring"
    >
      <span class="sr-only">Open main manu</span>
      <span aria-hidden="true">
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </span>
    </button>

    <!-- Brand -->
    <a href="/" class="inline-block text-2xl font-bold tracking-wider uppercase text-primary-dark dark:text-light">
      <img src={logo} class="w-[35%] h-[20%] mx-auto" alt="logo" />
    </a> <!-- dickheadertitle -->

    <!-- Mobile sub menu button -->
    <button
      on:click={() => {
        isMobileSubMenuOpen.set(!isMobileSubMenuOpenValue);
        isMobileSubMenuOpenValue = !isMobileSubMenuOpenValue;
      }}
      class="p-1 transition-colors duration-200 rounded-md text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark md:hidden focus:outline-none focus:ring"
    >
      <span class="sr-only">Open sub manu</span>
      <span aria-hidden="true">
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
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </span>
    </button>

    <!-- Desktop Right buttons -->
    <nav
      aria-label="Secondary"
      class="hidden space-x-2 md:flex md:items-center"
    >
      <!-- Toggle dark theme button -->
      <button
        aria-hidden="true"
        class="relative focus:outline-none"
        on:click={() => {
          isDark.set(!$isDark);
          toggleDarkMode();
        }}
      >
        <div
          class="w-12 h-6 transition rounded-full outline-none bg-primary-100 dark:bg-primary-lighter"
        />
        <div
          class="{$isDark
            ? 'translate-x-6 text-primary-100 bg-primary-darker'
            : 'translate-x-0 -translate-y-px  bg-white text-primary-dark'} absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-150 transform scale-110 rounded-full shadow-sm"
        >
          {#if $isDark}
            <svg
              class="w-4 h-4"
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
          {:else}
            <svg
              class="w-4 h-4"
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
          {/if}
        </div>
      </button>

      <!-- Notification button -->
      <button
        on:click={() => isNotificationPanelOpen.set(!$isNotificationPanelOpen)}
        class="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
      >
        <span class="sr-only">Open Notification panel</span>
        <svg
          class="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </button>

      <!-- Search button -->
      <button
        on:click={() => isSearchPanelOpen.set(!$isSearchPanelOpen)}
        class="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
      >
        <span class="sr-only">Open search panel</span>
        <svg
          class="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      <!-- Settings button -->
      <button
        on:click={() => isSettingsPanelOpen.set(!$isSettingsPanelOpen)}
        class="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
      >
        <span class="sr-only">Open settings panel</span>
        <svg
          class="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      <div class="relative">
        <button
          on:click={() => {
            isOpenUserDropdown.set(!isOpenUserDropdownValue);
            isOpenUserDropdownValue = !isOpenUserDropdownValue;
          }}
          type="button"
          aria-haspopup="true"
          aria-expanded={$isOpenUserDropdown ? "true" : "false"}
          class="transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
        >
      
          <span class="sr-only">User menu</span>
          <img
            class="w-10 h-10 rounded-full"
            src={profileAvatar}
            alt="test"
          />
        </button>

        <UserDropdown {$isOpenUserDropdown} />
      </div>
    </nav>

    <!-- Mobile sub menu -->
    <MobileSubMenuDropdown profileAvatar={profileAvatar} />
  </div>

  <!-- Mobile Main menu -->
  {#if $isMobileMainMenuOpen}
    <Sidebar containerClass="border-b md:hidden dark:border-primary-darker" hasCustomButton={false} />
  {/if}
</header>