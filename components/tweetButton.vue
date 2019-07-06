<template>
  <div class="btn-container" @click="tweet">
    <button class="btn-twitter">
      Tweet
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TweetButton extends Vue {
  @Prop()
  public text?: string
  @Prop()
  public path?: string

  public tweet(): void {
    const text = this.text
    const url = 'https://blog.naoki85.me' + this.path + '/index.html'
    const redirectUrl = 'https://twitter.com/share'
    location.href = redirectUrl + '?text=' + text + '&url=' + url
  }
}
</script>

<style scoped>
.btn-container {
  position: relative;
  margin: 10px 0;
  display: inline-block;
  font-family: Roboto, sans-serif;
}
.btn-twitter {
  margin: 0;
  padding-left: 25px;
  background-color: #1da1f2;
  color: #fff;
  height: 27px;
  width: 80px;
  font-size: 14px;
  border-radius: 3px;
}
.btn-twitter:before {
  content: '';
  display: block;
  position: absolute;
  top: 1px;
  left: 1px;
  width: 25px;
  height: 25px;
  background-size: 100%;
  background-image: url('../static/logo_twitter.png');
}
.btn-twitter:hover {
  background-color: #1da1f2;
}
</style>
