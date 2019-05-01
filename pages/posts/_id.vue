<template>
  <div>
    <div class="body-1 grey--text">
      {{ post.publishedAt }}
    </div>
    <h1 class="siimple-h1">
      {{ post.title }}
    </h1>
    <div class="siimple-grid">
      <div class="siimple-grid-row">
        <TweetButton :text="post.title" :path="path" />
      </div>
    </div>

    <div class="preview-area">
      <div v-html="convertMarkdownToHtml"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Post from '../../models/Post'
import TweetButton from '../../components/tweetButton.vue'
declare function require(x: string): any
const Request = require('../../assets/javascript/request.js').default
const extMarked = require('../../assets/javascript/extMarked.js').default

@Component({
  validate({ params }): boolean {
    return /^\d+$/.test(params.id)
  },
  components: {
    TweetButton
  }
})
export default class PostShowPage extends Vue {
  post: Post = {
    id: 0,
    title: '',
    content: '',
    imageUrl: '',
    publishedAt: '',
    postCategory: { id: 0, name: '', color: '' }
  }
  path: string = ''

  public mounted(): void {
    this.path = this.$route.path
    const postId = Number(this.$route.params.id)
    this.fetchPost(postId)
  }

  public get convertMarkdownToHtml(): string {
    return extMarked.convertToHtml(this.post.content)
  }

  public fetchPost(postId: number): void {
    Request.get('/posts/' + postId, {})
      .then((response: any) => {
        const resPost: any = response.data
        this.post.id = resPost.Id
        this.post.title = resPost.Title
        this.post.content = resPost.Content
        this.post.publishedAt = resPost.PublishedAt
      })
      .catch((error: any) => {
        console.log(error)
        // TODO: https://medium.com/@mavrickmaster/custom-error-pages-with-nuxt-js-3c70e6c51aff
        // const nuxtApp = this.$nuxt
        // return nuxtApp.error({
        //   statusCode: error.response.status,
        //   message: error.response.message
        // })
      })
  }
}
</script>

<style scoped>
.siimple-h1 {
  font-size: 34px;
}
.preview-area {
  width: 100%;
}
</style>
