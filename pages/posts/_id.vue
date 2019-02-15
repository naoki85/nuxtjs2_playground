<template>
  <v-container fluid>
    <div class="body-1 grey--text">{{ post.PublishedAt }}</div>
    <div class="display-1">{{ post.Title }}</div>

    <v-layout row wrap class="preview-area">
      <div v-html="convertMarkdownToHtml"></div>
    </v-layout>
  </v-container>
</template>

<script>
import Request from '~/assets/javascript/request.js'
import extMarked from '~/assets/javascript/extMarked.js'

export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  data: function() {
    return {
      post: {}
    }
  },
  computed: {
    convertMarkdownToHtml: function() {
      return extMarked.convertToHtml(this.post.Content)
    }
  },
  mounted: function() {
    const postId = this.$route.params.id
    this.fetchPost(postId)
  },
  methods: {
    fetchPost: function(postId) {
      Request.get('/posts/' + postId, {})
        .then(response => {
          this.post = response.data
        })
        .catch(error => {
          return this.$nuxt.error({
            statusCode: error.response.status,
            message: error.response.message
          })
        })
    }
  }
}
</script>
