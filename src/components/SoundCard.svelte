<script>
  import {sounds} from '@/lib/stores.js'

  export let sound

  let toggleSound = evt => {
    evt.preventDefault()
    let card = evt.target.closest("card")

    card.classList.toggle("active")

    let range = card.querySelector('[type="range"]')
    range.disabled = !range.disabled

    let _$sound = $sounds.find(e => e.name == sound.name)
    _$sound.enabled = !range.disabled
  }

  let updateVolume = evt => {
    let card = evt.target.closest("card")
    let range = card.querySelector('[type="range"]')
    
    let _$sound = $sounds.find(e => e.name == sound.name)
    console.log(_$sound)
    _$sound.volume = range.value
  }

  sound.icon = sound.icon || $sounds.find(e => e.name == sound.name).icon
  console.log(sound.icon)
</script>

<card data-sound={sound} class="{sound.enabled ? "active" : ""}">
  <name>{sound.name}</name>
  <volume>
    <input
      disabled="{sound.enabled ? false : true}"
      type="range"
      name="voume"
      id="volume"
      min="0"
      max="1"
      step="0.01"
      value={sound.volume}
      on:change={updateVolume}
    />
  </volume>
  <icon class="is-huge " on:mousedown={toggleSound} on:touchstart={toggleSound}>
    <i class={sound.icon} />
  </icon>
</card>

<style lang="scss">
  card {
    background: $main-darker;
    padding: 2rem;
    display: grid;
    grid-template-areas:
      "name icon"
      "volume icon";
    
    grid-gap: 1rem 3rem;
    grid-template-columns: auto min-content;
    // margin-bottom: 1rem;
    border-top: 0.125rem solid $main-dark;
    // border-radius: 0.33rem;

    &:global(.active) {
      icon {
        color: $success;
      }
      name {
        color: $main-lighter;
        // font-weight: bold;
      }
    }
  }
  
  name {
    grid-area: name;
    text-transform: capitalize;
    font-size: 1.25rem;
    color: $main-light;
  }

  volume {
    grid-area: volume;

    // @todo style range
    // @todo don't disable range when off
    input {
      width: 100%;
    }
  }

  icon {
    grid-area: icon;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: $main-light;

    i {
      pointer-events: none;
    }
  }

</style>
