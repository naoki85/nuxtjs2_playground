<template>
  <div>
    <h1>{{ this.slug }}</h1>
    <p>Path: {{ $route.path }}</p>
  </div>
</template>

<script>
  import * as vue from 'vue'

  export default vue.defineComponent({
    async asyncData({ params }) {
      const slug = params.slug
      return { slug }
    }, 
  })
</script>
