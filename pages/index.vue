<template>
  <div>
    <v-paginate
      ref="paginate"
      :current-page="page"
      :total-page="totalPage"
      @click-page="fetchPosts"
    />
    <div v-if="isError">
      Some error is occured. Please reload after a later.
    </div>
    <div class="siimple-grid">
      <div class="siimple-grid-row">
        <div
          v-for="post in posts"
          :key="post.id"
          class="siimple-box siimple-grid-col siimple-grid-col--6 siimple-grid-col--md-12"
        >
          <a :href="'/posts/' + post.id + '/index.html'">
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
          </a>
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
import request from '../plugins/request'

@Component({
  components: {
    VPaginate: () => import('../components/paginate.vue')
  }
})
export default class IndexPage extends Vue {
  posts: Post[] = []
  totalPage: number = 0
  page: number = 1
  isError: boolean = false

  @Watch('page')
  public currentPage() {
    const paginateRef: any = this.$refs.paginate
    paginateRef.updateCurrent(this.page)
  }

  public mounted() {
    this.fetchPosts(1)
  }

  async fetchPosts(page: number) {
    const requestPage = page === undefined ? 1 : page
    try {
      const response: any = await request.get('/posts?page=' + requestPage, {})
      this.totalPage = response.data.TotalPage
      this.page = page
      this.posts = []
      response.data.Posts.forEach((post: any) => {
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
    } catch (e) {
      this.isError = true
    }
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
  overflow: hidden;
  opacity: 1;
  height: 125px;
}
.siimple-box-detail img {
  width: 100%;
  height: auto;
}
</style>
