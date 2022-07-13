<script>
  export let sound

  export let sounds

  let toggleSound = evt => {
    let card = evt.target.closest("card")
    let cardSound = card.getAttribute("data-sound")

    let icon = evt.target
    icon.classList.toggle("active")

    let range = card.querySelector('[type="range"]')
    range.disabled = !range.disabled

    let _$sound = $sounds.find(e => e.name == sound.name)
    _$sound.enabled = !range.disabled
  }

  let updateVolume = evt => {
    let card = evt.target.closest("card")
    let range = card.querySelector('[type="range"]')
    let cardSound = card.getAttribute("data-sound")
    
    let _$sound = $sounds.find(e => e.name == sound.name)
    console.log(_$sound)
    _$sound.volume = range.value
  }
</script>

<card data-sound={sound}>
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
  <icon class="is-huge {sound.enabled ? "active" : ""}" on:click={toggleSound}>
    <i class={sound.icon} />
  </icon>
</card>

<style lang="scss">
  card {
    background: $main-darkest;
    padding: 2rem;
    display: grid;
    grid-template-areas:
      "name icon"
      "volume icon";

    grid-gap: 1rem 3rem;
    grid-template-columns: auto min-content;
    margin-bottom: 1rem;
  }

  name {
    grid-area: name;
    text-transform: capitalize;
    font-size: 1.5rem;
  }
  volume {
    grid-area: volume;
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

    &:global(.active) {
      color: $success;
    }
    i {
      pointer-events: none;
    }
  }

  // @todo extract this to the global scss file
  icon.is-huge {
    font-size: 3.5rem;
    width: 4rem;
    height: 4rem;
  }
</style>
