<script>
  import {sounds} from '@/lib/stores.js'
  import Soundcard from '@/components/SoundCard.svelte'
</script>


{#each $sounds as sound}
  <Soundcard {sound}/>
{/each}

<style lang="scss">

</style>