<script>
  import Counter    from "@/components/Counter.svelte"

  let name = "world"

</script>

<main>
  <h1>Hello {name}!</h1>

  <Counter {name} />
  <p>
    <!-- you've clicked {count} times -->
  </p>

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a>
    to learn how to build Svelte apps.
    <i class="nf-mdi-laptop" />
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a>
      for the officially supported framework, also powered by Vite!
  </p>

</main>



<style lang="scss">

  main {
    flex-grow: 1;
    background: $main-darker;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: $main-lightest;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
