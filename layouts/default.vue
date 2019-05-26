<template>
  <div>
    <div class="siimple-navbar siimple-navbar--teal siimple-navbar--fluid">
      <router-link to="/" class="siimple-navbar-title">
        naoki85.me
      </router-link>
    </div>
    <div class="siimple-content siimple-content--fluid">
      <nuxt />
    </div>
    <div class="siimple-footer siimple-footer--teal siimple-footer--fluid">
      <div class="siimple-grid">
        <div class="siimple-grid-row">
          <div
            class="siimple-grid-col siimple-grid-col--10 siimple-grid-col--sm-12"
          >
            This blog is maintained by naoki85.<br />
            I would be glad if you could give me an opinion on Twitter etc.
          </div>
          <div
            class="siimple-grid-col siimple-grid-col--2 siimple-grid-col--sm-12"
          >
            <a href="https://twitter.com/naoki85_201612">
              <i class="fab fa-twitter fa-large" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="siimple-footer siimple-footer--dark siimple-footer--fluid siimple--text-center"
    >
      &copy;2018 — <strong>naoki85</strong> — All Rights Reserved.
    </div>
  </div>
</template>

<style>
.fa-large {
  font-size: 36px;
  color: white;
}
</style>
