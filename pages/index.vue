<template>
  <div>
    <v-paginate
      ref="paginate"
      :current-page="page"
      :total-page="totalPage"
      @click-page="fetchPosts"
    />
    <div class="siimple-grid">
      <div class="siimple-grid-row">
        <div
          v-for="post in posts"
          :key="post.id"
          class="siimple-box siimple-grid-col siimple-grid-col--6 siimple-grid-col--md-12"
        >
          <router-link :to="'/posts/' + post.id">
            <div class="siimple-grid">
              <div class="siimple-grid-row">
                <div class="siimple-grid-col siimple-grid-col--8">
                  <div class="siimple-box-subtitle">
                    {{ post.publishedAt }}
                    <span
                      class="siimple-tag siimple-tag-default siimple-tag--rounded"
                      :style="{ backgroundColor: post.postCategory.color }"
                    >
                      {{ post.postCategory.name }}
                    </span>
                  </div>
                  <div class="siimple-box-title box-title">
                    {{ post.title }}
                  </div>
                </div>
                <div class="siimple-grid-col siimple-grid-col--4">
                  <div class="siimple-box-detail">
                    <img :src="post.imageUrl" :alt="post.title" />
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <v-paginate
      ref="paginate"
      :current-page="page"
      :total-page="totalPage"
      @click-page="fetchPosts"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Post from '../models/Post'
import PostCategory from '../models/PostCategory'
declare function require(x: string): any
const Request = require('../assets/javascript/request.js').default

@Component({
  components: {
    VPaginate: () => import('../components/paginate.vue')
  }
})
export default class IndexPage extends Vue {
  posts: Post[] = []
  totalPage: number = 0
  page: number = 1

  @Watch('page')
  public currentPage(): void {
    const paginateRef: any = this.$refs.paginate
    paginateRef.updateCurrent(this.page)
  }

  public mounted(): void {
    this.fetchPosts(1)
  }

  public fetchPosts(page: number): void {
    const requestPage = page === undefined ? 1 : page
    Request.get('/posts?page=' + requestPage, {})
      .then((response: any) => {
        this.totalPage = 5
        this.page = page
        response.data.Posts.forEach((post: Object) => {
          const newPostCategory: PostCategory = {
            id: post.PostCategory.Id,
            name: post.PostCategory.Name,
            color: post.PostCategory.Color
          }
          const newPost: Post = {
            id: post.Id,
            title: post.Title,
            content: post.Content,
            imageUrl: post.ImageUrl,
            publishedAt: post.PublishedAt,
            postCategory: newPostCategory
          }
          this.posts.push(newPost)
        })
      })
      .catch((error: any) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.siimple-box {
  margin-bottom: 0;
  background-color: white;
}
.siimple-box-title {
  font-size: 24px;
  color: #000000;
}
.siimple-box-title:hover {
  text-decoration: underline;
}
.siimple-box-subtitle {
  font-size: 13px;
  color: #9e9e9e;
}
.siimple-tag-default {
  color: white;
}
.siimple-box-detail {
  opacity: 1;
  height: 125px;
}
.siimple-box-detail img {
  width: 100%;
  height: auto;
}
</style>
