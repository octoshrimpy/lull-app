<script>
  import Library  from '@/pages/Library.svelte'
  import Sounds   from '@/pages/Sounds.svelte'
  import Settings from '@/pages/Settings.svelte'
  import {onMount} from 'svelte'

  import {page} from '@/lib/stores'

  const changePage = (evt, goto = null) => {
    let ref = goto || evt.target.getAttribute('href')

    let navItems = document.querySelectorAll('.navItem')
    let clicked = [...navItems].filter(i => i.getAttribute('href') == ref)[0]

    for (const item of navItems) {
      item.classList.remove("js-active")
    }

    clicked.classList.add("js-active")
    
    let idx = [...navItems].indexOf(clicked)
    let border = document.querySelector('.border')
    border.setAttribute('data-offset', `${idx + 1}`)

    switch(ref) {
      case "sounds":
        $page = Sounds
        break
      case "library":
        $page = Library
        break
      case "settings":
        $page = Settings
        break
    }
  }

  // set initial page
  onMount(async () => {
  changePage(null, 'library')
  })

</script>



<nav>
  <div class="bar">
    <div class="navItem" href="sounds" on:mousedown={changePage} on:touchstart={changePage}>
      <div class="icon">
        <i class="nf-mdi-headphones" />
      </div>
      <div class="label">sounds</div>
    </div>
    <div class="navItem" href="library" on:mousedown={changePage} on:touchstart={changePage}>
      <div class="icon">
        <i class="nf-fa-book" />
      </div>
      <div class="label">library</div>
    </div>
    <div class="navItem" href="settings" on:mousedown={changePage} on:touchstart={changePage}>
      <div class="icon">
        <i class="nf-mdi-settings" />
      </div>
      <div class="label">settings</div>
    </div>
    <div class="border" data-offset=2/>
  </div>
  
  <!-- this clip is required for the fancy wavy border bit. just leave it here. -->
  <div class="svg-container">
    <svg viewBox="0 0 202.9 45.5">
      <clipPath
        id="menu"
        clipPathUnits="objectBoundingBox"
        transform="scale(0.0049285362247413 0.021978021978022)"
      >
        <path
          d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
                        c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
                        c9.2,3.6,17.6,4.2,23.3,4H6.7z"
        />
      </clipPath>
    </svg>
  </div>
</nav>

<style lang="scss">
  // @done figure out how to remove this error ^^^^^ about unused selectors from NF

  $nav-item-count: 3;
  $bubble-width: calc((100vw - 2rem) / #{$nav-item-count});
  $bar-height: 3.5rem;

  .bar {
    font-size: 1.5rem;
    display: flex;
    align-items: end;
    background: #1e1e28;
    background: $main-darkest;
    color: $main-light;
    padding: 0 1rem;
    max-height: $bar-height;
    position: relative;
    justify-content: space-between;


    .navItem {
      cursor: pointer;
      display: flex;
      // align-items: bottom;
      justify-content: center;
      flex-grow: 1;
      flex-basis: 0;
      padding: 1rem 0;

      * {
        pointer-events: none;
      }

      &.js-active {
        .label {    
        bottom: 0.5rem;
        opacity:1;
        transform: scale(1);
        }

        .icon i {
          font-size: 2rem;
          transform: translateY(-1rem);
          color: $main-lighter;
        }
      }
    }

    .border {
      @include animate;
      left: 1rem;
      bottom: calc(100% - 1px);
      height: 1.5rem;
      width: $bubble-width;
      position: absolute;
      clip-path: url(#menu);
      will-change: transform;
      background: $main-darkest;
    }

    .icon {
      z-index: 9999;
      color: inherit;
      text-decoration: none;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    } 

    @for $i from 1 through $nav-item-count {
      .border {
        &:global([data-offset="#{$i}"]) {
          transform: translateX(calc((#{$i} * #{$bubble-width}) - #{$bubble-width}));
        }
      }
    }
  }

  .svg-container {
    position: absolute;
    // padding: 0 1rem;
  }

  .label {
    font-size: 0.7em;
    position: absolute;
    bottom: -1em;
    opacity: 0;
    transform: scale(0.1);

    @include animate;
  }
</style>
