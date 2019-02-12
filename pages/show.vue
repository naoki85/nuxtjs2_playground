<template>
  <v-container fluid>
    <div class="body-1 grey--text">{{ post.published_at }}</div>
    <div class="display-1">{{ post.title }}</div>

    <v-layout row wrap>
      {{ post.content }}
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      post: {
        title: 'hogehoge',
        content: 'fugafuga',
        published_at: '2019-02-12'
      }
    }
  }
}
</script>
