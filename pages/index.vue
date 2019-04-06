<template>
  <v-layout
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm10
      md8
    >
      <v-paginate
        ref="paginate"
        :current-page="page"
        :total-page="totalPage"
        @click-page="fetchPosts"
      />
      <v-layout row wrap>
        <v-flex>
          <v-card v-for="(post, i) in posts" :key="i" :to="`/posts/${post.ID}`">
            <v-layout>
              <v-flex xs12>
                <v-img
                  src="http://localhost:3000/v.png"
                  height="125px"
                  contain
                />
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">
                      {{ post.Title }}
                    </div>
                    <div>
                      {{ post.PublishedAt }}
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
      Request.get('/posts?page=' + requestPage, {})
        .then(response => {
          // TODO: totalPage が応答されるようになったらそれをセットする
          this.totalPage = 5
          this.posts = response.data.Posts
          this.page = page
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
