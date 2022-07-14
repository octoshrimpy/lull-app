<script>
  import SoundCard from "./SoundCard.svelte";
  export let collection
</script>


<details>
  <summary>
    <icon class="is-medium">
      <i class="{collection.icon}"></i>
    </icon>
    <name>{collection.name}</name>
  </summary>

  <contents>
    {#each collection.sounds as sound}
      <SoundCard {sound}/>
    {/each}
  </contents>
</details>


<style lang="scss">
  details {
    cursor: pointer;
    display: flex;
    
    summary {
      margin: 0 1rem;
      // background: tomato;
      display: flex;
      align-items: center;
      position: relative;

      &:after {
        position: absolute;
        right: 0;
        font-family: "NF icons";
        content: "\f053";
        @include animate;
      }
    }

    contents {
      display: flex;
      flex-direction: column;
      height: 0;
      max-height: 0;
      overflow: hidden;
      @include animate;
    }
    &[open] {
      summary:after {  
        transform: rotate(-90deg);
      }
      contents {
        height: 100%;
        max-height: none;
      }
    }

  }
</style>