<template>
  <div>
    <h1>Continent: {{ continent }}</h1>
    <h2>Mountain: {{ mountain }}</h2>
    <p>Path: {{ $route.path }}</p>
    <NuxtLink to="/">Back to Mountains</NuxtLink>
  </div>
</template>

<script>
  import * as vue from 'vue'

  export default vue.defineComponent({
    async asyncData({ params, redirect }) {
      const mountains = await fetch('http://localhost:3001/mountains').
        then((res) => res.json())
      console.log(mountains)
      const filteredMountain = mountains.find(
        (el) => el.continent.toLowerCase() === params.continent && el.slug === params.mountain
      )

      if (filteredMountain) {
        return {
          continent: filteredMountain.continent,
          mountain: filteredMountain.title
        }
      } else {
        redirect('/')
      }
    }, 
  })
</script>
