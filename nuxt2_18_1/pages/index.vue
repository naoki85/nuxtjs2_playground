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

    <Mountains />
  </div>
</template>

<script>
import * as vue from 'vue'

export default vue.defineComponent({
  async asyncData({ $config: { apiBaseUrl } }) {
    const mountains = await fetch(`${apiBaseUrl}/mountains`).
      then((res) => res.json())
    return {
      rendering: process.server ? 'server' : 'client',
      mountains
    }
  },
  data() {
    return {
      title: 'Hello Nuxters!'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'The amazing Nuxt application that teaches me all the cool features of Nuxt'
        }
      ]
    }
  }
})
</script>

