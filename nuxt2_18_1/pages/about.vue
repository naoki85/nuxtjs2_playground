<template>
  <div>
    <h1>About Page</h1>
    <p>
      This page is rendered on the <strong>{{ rendering }}</strong>
    </p>
    <p v-if="rendering === 'server'">
      First load or hard refresh is done on server side.
    </p>
    <p v-if="rendering === 'client'">
      First load or hard refresh is done on server side.
    </p>
    <ul>
      <li>Refresh the page for server side rendering.</li>
      <li>Click the links to see client side rendering.</li>
    </ul>

    <NuxtLink to="/">Home Page</NuxtLink>
  </div>
</template>

<script>
import * as vue from 'vue'

export default vue.defineComponent({
  asyncData() {
    return {
      rendering: process.server ? 'server' : 'client'
    }
  }
})
</script>

