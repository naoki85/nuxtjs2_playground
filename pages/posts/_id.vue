<template>
  <div class="describe-page">
    <div class="body-1 grey--text">
      {{ post.publishedAt }}
    </div>
    <h1 class="siimple-h1">
      {{ post.title }}
    </h1>
    <div class="siimple-grid">
      <div class="siimple-grid-row">
        <TweetButton :text="post.title" :path="path" />
        <HatebuButton :text="post.title" :path="path" />
      </div>
    </div>

    <div class="preview-area">
      <div v-html="convertMarkdownToHtml"></div>
    </div>
    <RecommendedBooks />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Post from '../../models/Post'
import TweetButton from '../../components/tweetButton.vue'
import HatebuButton from '../../components/hatebuButton.vue'
import RecommendedBooks from '../../components/recommendedBooks.vue'
declare function require(x: string): any
const Request = require('../../assets/javascript/request.js').default
const extMarked = require('../../assets/javascript/extMarked.js').default

@Component({
  validate({ params }): boolean {
    return /^\d+$/.test(params.id)
  },
  components: {
    TweetButton,
    HatebuButton,
    RecommendedBooks
  },
  async asyncData({ route, payload }) {
    let postData: any
    let requestPath: string

    if (payload) {
      postData = payload
      requestPath = '/posts/' + postData.Id
    } else {
      requestPath = route.path
      const postId = Number(route.params.id)
      const { data } = await Request.get('/posts/' + postId, {})
      postData = data
    }
    return {
      post: {
        id: postData.Id,
        title: postData.Title,
        content: postData.Content,
        imageUrl: postData.ImageUrl,
        publishedAt: postData.PublishedAt
      },
      path: requestPath
    }
  }
})
export default class PostShowPage extends Vue {
  public post!: Post
  public path!: string

  public head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.content
            ? this.post.content.replace(/\r?\n/g, '').slice(0, 160)
            : ''
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.content
            ? this.post.content.replace(/\r?\n/g, '').slice(0, 160)
            : ''
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.post.imageUrl
        }
      ]
    }
  }

  public get convertMarkdownToHtml(): string {
    return extMarked.convertToHtml(this.post.content)
  }
}
</script>

<style scoped>
.siimple-h1 {
  font-size: 34px;
}
.preview-area,
.describe-page {
  width: 100%;
}
@media (min-width: 768px) {
  .describe-page {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
@media (min-width: 960px) {
  .describe-page {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
