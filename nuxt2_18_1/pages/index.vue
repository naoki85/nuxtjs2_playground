<template>
  <div>
    <h1>Hello Nuxters! 👋</h1>
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

    <NuxtLink to="/about">About Page</NuxtLink>

    <ul v-for="mountain in mountains" :key="mountain.id">
      <NuxtLink :to="`${mountain.continent.toLowerCase()}/${mountain.slug}`">
        <li>{{  mountain.title }}</li>
      </NuxtLink>
    </ul>
  </div>
</template>

<script>
import * as vue from 'vue'

export default vue.defineComponent({
  async asyncData() {
    const mountains = await fetch('http://localhost:3001/mountains').
      then((res) => res.json())
    return {
      rendering: process.server ? 'server' : 'client',
      mountains
    }
  }
})
</script>

