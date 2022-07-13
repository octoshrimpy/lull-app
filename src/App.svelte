<script>
  import {page}     from '@/lib/stores.js'
  import Nav        from '@/components/Nav.svelte';

</script>

<root>
    <content>
      <svelte:component this={$page} />
    </content>

  <Nav  />
</root>

<style lang="scss">
  root {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    content {
      display: flex;
      flex-grow: 1;
      background: $main-darker;
    }
  }
</style>