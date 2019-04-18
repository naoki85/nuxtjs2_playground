<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm10 md8>
      <VPaginate
        ref="paginate"
        :current-page="page"
        :total-page="totalPage"
        @click-page="fetchPosts"
      />
      <v-layout row wrap>
        <v-flex>
          <v-card v-for="(post, i) in posts" :key="i" :to="`/posts/${post.id}`">
            <v-layout>
              <v-flex xs12>
                <v-img
                  :src="post.post_image_path"
                  :alt="post.title"
                  height="125px"
                  contain
                />
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">
                      {{ post.title }}
                    </div>
                    <div>
                      {{ post.published_at }}
                    </div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      <VPaginate
        ref="paginate"
        :current-page="page"
        :total-page="totalPage"
        @click-page="fetchPosts"
      />
    </v-flex>
  </v-layout>
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
