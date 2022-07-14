<script>
  import SoundCard from "./SoundCard.svelte";
  export let collection

  const toggleCollection = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()

    let summary = evt.target.closest('summary')
    summary.classList.toggle('active')
  }

  const toggleAccordion = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    let clicked = evt.target
    let accordion = clicked.closest('accordion')
    console.log(accordion)

    if (accordion.hasAttribute('open')) {
      accordion.toggleAttribute('open')
      return
    } 

    console.log('else')
    let all = document.querySelectorAll('accordion[open]')
    console.log(all)
    let done = [...all].forEach(acc => acc.removeAttribute('open'))
    accordion.toggleAttribute('open')
  }

  // @todo if all items in collection are off, collection is also off
  // @todo if collection is off, all items in collection should be off or disabled
</script>


<accordion>
  <summary on:mousedown={toggleAccordion} on:touchstart={toggleAccordion}>
    <icon class="is-large" on:mousedown={toggleCollection} on:touchstart={toggleCollection}>
      <i class="{collection.icon}"></i>
    </icon>
    <name>{collection.name}</name>
  </summary>

  <contents>
    {#each collection.sounds as sound}
      <SoundCard {sound}/>
    {/each}
  </contents>
</accordion>


<style lang="scss">

  accordion {
    cursor: pointer;
    display: list-item;      
    
    &:not(:last-child) {
        border-bottom: 2px solid $main-darkest;
      }

    
    summary {
      margin: 0rem 1rem;
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
      name {
        padding: 1rem 0;
        @include animate;
      }
      icon {
        @include animate;
        i {
          pointer-events: none;
        }
      }

      &.active {
        icon {
          color: $success;
        }
        name {
          color: $main-lightest;
        }
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
    &:global([open]) {
      summary:after {  
        transform: rotate(-90deg);
      }
      contents {
        height: 100%;
        max-height: none;
      }
    }
  }




  // =============================
  

</style>