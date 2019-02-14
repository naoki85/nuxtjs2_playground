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
      <v-layout row wrap>
        <v-flex>
          <v-card v-for="(post, i) in posts" :key="i" :to="`/posts/${post.ID}`">
            <v-layout>
              <v-flex xs12>
                <v-img
                  src="http://localhost:3000/v.png"
                  height="125px"
                  contain
                ></v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{ post.Title }}</div>
                    <div>{{ post.PublishedAt }}</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import Request from '~/assets/javascript/request.js'

export default {
  data: function() {
    return {
      posts: []
    }
  },
  mounted: function() {
    this.fetchPosts()
  },
  methods: {
    fetchPosts: function() {
      Request.get('/posts', {})
        .then(response => {
          this.posts = response.data.Posts
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
