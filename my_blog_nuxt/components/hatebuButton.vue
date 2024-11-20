<template>
  <div class="btn-container" @click="bookmark">
    <button class="btn-hatebu">
      ブックマーク
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HatebuButton extends Vue {
  @Prop()
  public text!: string
  @Prop()
  public path!: string

  public bookmark(): void {
    const text = this.text
    const url = 'https://blog.naoki85.me' + this.path + '.html'
    const redirectUrl = 'http://b.hatena.ne.jp/add?mode=confirm'
    location.href =
      redirectUrl +
      '&title=' +
      encodeURIComponent(text) +
      '&url=' +
      encodeURIComponent(url)
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
.btn-hatebu {
  margin: 0px;
  padding-left: 25px;
  background-color: rgb(0, 164, 222);
  color: #fff;
  height: 27px;
  width: 125px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 3px;
}
.btn-hatebu:before {
  content: '';
  display: block;
  position: absolute;
  top: 1px;
  left: 1px;
  width: 25px;
  height: 25px;
  background-size: 100%;
  background-image: url('../static/hatenabookmark-logomark.svg');
}
.btn-hatebu:hover {
  background-color: #0091c5;
}
</style>
