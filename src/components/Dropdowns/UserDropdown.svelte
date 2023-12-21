<script>
  import { isOpenUserDropdown, isMobileSubMenuOpen } from "../../store/common.js";
  import { state } from "../../store/auth.js";
  import { clickOutside } from "../Listeners/clickOutSide.js";
  import { fly } from "svelte/transition";
</script>

{#if $isOpenUserDropdown}
<div
  transition:fly={{
    delay: 0,
    duration: 300,
    opacity: 0,
    y: 50
  }}
  use:clickOutside
  on:click_outside={() => (isOpenUserDropdown.set(false))}
  class="absolute right-0 w-48 py-1 bg-white rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none z-50"
  tabindex="-1"
  role="menu"
  aria-orientation="vertical"
  aria-label="User menu"
>
  <a
    href="/profile"
    role="menuitem"
    class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
    on:click={() => {
      isOpenUserDropdown.set(false)
      isMobileSubMenuOpen.set(false)
    }}
    >
    Your Profile
  </a>
  <!-- <a
    href="/"
    role="menuitem"
    class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
  >
    Settings
  </a> -->
  <a
    on:click={async ()=> await state.logout()}
    href="/auth/login"
    role="menuitem"
    class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
  >
    Logout
  </a>
</div>
{/if}
