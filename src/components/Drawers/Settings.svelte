<script>
  // components
  import Drawer from 'svelte-drawer-component';

  // props
  export let isOpen = false;

</script>

<div>SettingDrawer</div>
<Drawer isOpen={isOpen} placement="right">
</Drawer>