<script>
  import { slide } from "svelte/transition";
  import { page } from '$app/stores';
  
  export let navBar;
  
  let isOpen = false;
  const toggle = () => {
    console.log(navBar)
    if(navBar?.path) {
      isOpen = false;
    } else {
      isOpen = !isOpen;
    }
  };
</script>

<div>
  <a
    href={navBar.path}
    class="{ isOpen && !navBar.path ? 'bg-primary-100 dark:bg-primary': ''} flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 hover: cursor dark:hover:bg-primary"
    on:click={() => toggle()}
    aria-expanded={isOpen}
  >
    {@html navBar.iconHtmlCode}
    <span class="ml-2 text-sm"> {navBar.name} </span>
    {#if !navBar.path}
      <span class="ml-auto" aria-hidden="true">
        <!-- active class 'rotate-180' -->
        <svg
          class="{isOpen ? 'rotate-180' : ''} w-4 h-4 transition-transform transform"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    {/if}
  </a>

  {#if !navBar.path && isOpen}
  <div transition:slide={{ duration: 300 }} class="mt-2 space-y-2 px-7">
    <!-- active & hover classes 'text-gray-700 dark:text-light' -->
    <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
    {#each navBar.children as child}
      <a
        href="{child.path}"
        class="text-gray-400 block p-2 text-sm  transition-colors rounded-md dark:text-light dark:hover:text-light hover:text-gray-700"
        on:click={() => toggle()}
      >
        {child.name}
      </a>
    {/each}
  </div>
  {/if}
</div>
