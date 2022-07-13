<script>
  import {count, sounds} from '@/lib/stores.js'
  import Soundcard from '@/components/SoundCard.svelte'
</script>

<soundsParent>
  {#each $sounds as sound}
    <Soundcard {sound} {sounds}/>
  {/each}
</soundsParent>

<style lang="scss">
  soundsParent {
    width: 100%;
    padding: 1rem;
  }
</style>