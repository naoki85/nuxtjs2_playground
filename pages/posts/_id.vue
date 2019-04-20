<template>
  <div>
    <div class="body-1 grey--text">{{ post.published_at }}</div>
    <h1 class="siimple-h1">{{ post.title }}</h1>

    <div class="preview-area">
      <div v-html="convertMarkdownToHtml"></div>
    </div>
  </div>
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
