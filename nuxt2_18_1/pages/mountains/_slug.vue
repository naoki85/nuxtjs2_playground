<template>
  <article>
    <h1>{{ mountain.title }}</h1>
    <section>
      <img :src="mountain.image" :alt="mountain.title" />
      <p>{{ mountain.description }}</p>
    </section>
    <button @click="goBack">Back</button>
  </article>
</template>

<script>
  import * as vue from 'vue'

  export default vue.defineComponent({
    async asyncData({ $http, params, $config: { apiBaseUrl } }) {
      const mountain = await fetch(`${apiBaseUrl}/mountains/${params.slug}`).
        then((res) => res.json())

      if (mountain) {
        return { mountain }
      } else {
        redirect('/')
      }
    },
    methods: {
      goBack() {
        return this.$router.go(-1)
      }
    }
  })
</script>

<style scoped>
article {
  max-width: 600px;
  margin: 0 auto;
}
img {
  height: 200px;
}
p {
  text-align: left;
}
</style>

