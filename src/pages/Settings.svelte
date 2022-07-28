<script>
  const toggleTheme = (evt) => {
    let html = document.querySelector('html')

    let themeInvert = html.getAttribute('data-theme') == "dark" ? "light" : "dark"
    html.setAttribute('data-theme', themeInvert)
  }
</script>

<button on:click={toggleTheme}>toggle white theme</button>