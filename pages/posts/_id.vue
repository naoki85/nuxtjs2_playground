<template>
  <v-container fluid>
    <div class="body-1 grey--text">
      {{ post.published_at }}
    </div>
    <div class="display-1">
      {{ post.title }}
    </div>

    <v-layout row wrap class="preview-area">
      <div v-html="convertMarkdownToHtml" />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Request from '~/assets/javascript/request.js'
import extMarked from '~/assets/javascript/extMarked.js'
import { Component, Vue } from 'vue-property-decorator'
// import Post from '~/models/Post'

@Component({
  validate({ params }): boolean {
    return /^\d+$/.test(params.id)
  }
})
export default class PostShowPage extends Vue {
  post: Post = {}

  public mounted(): void {
    const postId = this.$route.params.id
    this.fetchPost(postId)
  }

  public get convertMarkdownToHtml(): string {
    return extMarked.convertToHtml(this.post.content)
  }

  public fetchPost(postId): void {
    Request.get('/v1/posts/' + postId, {})
      .then(response => {
        this.post = response.data.post
      })
      .catch(error => {
        return this.$nuxt.error({
          statusCode: error.response.status,
          message: error.response.message
        })
      })
  }
}
</script>
