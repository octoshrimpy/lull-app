<script>
  import { album } from "@/lib/stores.js"
  import Collection from "@/components/Collection.svelte" // @todo rename these to be better
  // album/track?
</script>


{#each $album as collection}
  <Collection {collection} />
{/each}

<style lang="scss">
</style>
