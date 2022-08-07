<script>
  import {sounds} from '@/lib/stores.js'

  export let sound

  let toggleSound = evt => {
    evt.preventDefault()
    let card = evt.target.closest("card")

    card.classList.toggle("active")

    let _$sound = $sounds.find(e => e.name == sound.name)
    _$sound.enabled = !!card.classList.includes("active")
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
  <icon class="is-huge " on:mousedown={toggleSound}>
    <i class={sound.icon} />
  </icon>
</card>

<style lang="scss">

  @mixin range {
    -webkit-appearance: none;
    $track-thickness: 0.5rem;
    padding: 0.5rem 0;
    background: transparent;
    display: block;

    $track-bg: var(--main-medium);
    $thumb-bg: var(--main-medium);

    &:global(.contrast){
      &::-webkit-slider-runnable-track {
        background: $blue-light !important;
      }
      &::-webkit-slider-thumb {
        background: $blue-light !important;
      }
    }

    &::-webkit-slider-runnable-track {
      cursor: pointer;
      height: $track-thickness;
      width: 100%;
      background: $track-bg;
      @include animate;
      border-radius: 999px;
    }


    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      $size: 1.5rem;
      height: $size;
      width: $size;
      margin-top: calc((-#{$size} / 2) + (#{$track-thickness} / 2));
      border-radius: 50%;
      background: $thumb-bg;
      cursor: pointer;

      box-shadow: $shadow-border;

      @include animate;
    }

    &:hover {
      &::-webkit-slider-runnable-track {
        box-shadow: $shadow-1;
      }
      &::-webkit-slider-thumb {
        $size: 1.75rem;
        height: $size;
        width: $size;
        margin-top: calc((-#{$size} / 2) + (#{$track-thickness} / 2));
        // background: $bg-dark;
        box-shadow: $shadow-3;
      }
    }
  }


  card {
    background: var(--main-darker);
    padding: 2rem;
    display: grid;
    grid-template-areas:
      "name icon"
      "volume icon";
    
    grid-gap: 1rem 3rem;
    grid-template-columns: auto min-content;
    // margin-bottom: 1rem;
    border-top: 0.125rem solid var(--main-dark);
    // border-radius: 0.33rem;

    &:global(.active) {
      icon {
        color: var(--success);
      }
      name {
        color: var(--main-lighter);
        // font-weight: bold;
      }
      volume input{
      &::-webkit-slider-runnable-track {
        background: $main-light !important;
      }
      &::-webkit-slider-thumb {
        background: $success !important;
      }
    }
    }
  }
  
  name {
    grid-area: name;
    text-transform: capitalize;
    font-size: 1.25rem;
    color: var(--main-light);
    @include animate;
  }

  volume {
    grid-area: volume;

    input {
      @include range;
    }
    
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
    color: var(--main-light);

    i {
      pointer-events: none;
    }
  }

</style>
