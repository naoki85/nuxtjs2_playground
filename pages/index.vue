<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm10 md8>
      <v-paginate
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
      <v-paginate
        ref="paginate"
        :current-page="page"
        :total-page="totalPage"
        @click-page="fetchPosts"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import Request from '~/assets/javascript/request.js'
import Paginate from '~/components/paginate'

export default {
  components: {
    'v-paginate': Paginate
  },
  data: function() {
    return {
      posts: [],
      totalPage: 0,
      page: 1
    }
  },
  watch: {
    page: function() {
      this.$refs.paginate.updateCurrent(this.page)
    }
  },
  mounted: function() {
    this.fetchPosts()
  },
  methods: {
    fetchPosts: function(page) {
      const requestPage = page === undefined ? 1 : page
      Request.get('/v1/posts?page=' + requestPage, {})
        .then(response => {
          // TODO: totalPage が応答されるようになったらそれをセットする
          this.totalPage = response.data.total_page
          this.posts = response.data.posts
          this.page = page
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
