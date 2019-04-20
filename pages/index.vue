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
          class="siimple-box siimple-grid-col siimple-grid-col--6 siimple-grid-col--md-12"
          v-for="post in posts"
          :key="post.id"
        >
          <router-link :to="'/posts/' + post.id">
            <div class="siimple-grid">
              <div class="siimple-grid-row">
                <div class="siimple-grid-col siimple-grid-col--8">
                  <div class="siimple-box-subtitle">
                    {{ post.published_at }}
                    <span
                      class="siimple-tag siimple-tag-default siimple-tag--rounded"
                      :style="{ backgroundColor: post.post_category.color }"
                    >
                      {{ post.post_category.name }}
                    </span>
                  </div>
                  <div class="siimple-box-title box-title">
                    {{ post.title }}
                  </div>
                </div>
                <div class="siimple-grid-col siimple-grid-col--4">
                  <div class="siimple-box-detail">
                    <img :src="post.post_image_path" :alt="post.title" />
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
import Request from '~/assets/javascript/request.js'
import { Component, Vue, Watch } from 'vue-property-decorator'
// import Post from '~/models/Post'

@Component({
  components: {
    VPaginate: () => import('~/components/paginate.vue')
  }
})
export default class IndexPage extends Vue {
  posts: Post[] = []
  totalPage: number = 0
  page: number = 1

  @Watch('page')
  public page(): void {
    this.$refs.paginate.updateCurrent(this.page)
  }

  public mounted(): void {
    this.fetchPosts()
  }

  public fetchPosts(page): void {
    const requestPage = page === undefined ? 1 : page
    Request.get('/v1/posts?page=' + requestPage, {})
      .then(response => {
        this.totalPage = response.data.total_page
        this.posts = response.data.posts
        this.page = page
      })
      .catch(error => {
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
