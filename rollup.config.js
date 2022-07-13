import sveltePreprocess from 'svelte-preprocess'


const config = {
  // disable "unused css selector" due to NF
  onwarn: (warning, handler) => {
    const { code, frame } = warning
    if (code === "css-unused-selector") 
      return
    
    handler(warning)
  },
  plugins: [],
  preprocess: sveltePreprocess({
    scss: {
      prependData: `@import '@/styles/_vars.scss';`
    }
})
}

export default config