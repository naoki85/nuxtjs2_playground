<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
      color="#00d1b2"
      style="color: white;"
    >
      <v-toolbar-side-icon style="color: white;" @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer color="#00d1b2" height="auto" style="padding: 10px;">
      <v-layout row wrap justify-center>
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-card-text class="white--text pt-0">
              本ブログは naoki85 によってメンテナンスされています。<br>
              Twitter などでご意見いただけると嬉しいです。<br>
            </v-card-text>
          </v-flex>
          <v-flex xs12 sm6 class="text-xs-center">
            <v-btn
              v-for="(link, i) in links"
              :to="link.path"
              :key="i"
              color="white"
              flat
            >
              <v-icon size="36px">{{ link.icon }}</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>

        <v-card-text class="white--text text-xs-center">
          &copy;2018 — <strong>naoki85</strong> — All Rights eserved.
        </v-card-text>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'home',
          title: 'Home',
          to: '/'
        }
      ],
      links: [
        {
          icon: 'fab fa-twitter',
          path: 'https://twitter.com/naoki85_201612'
        }
      ],
      title: 'naoki85 のブログ'
    }
  }
}
</script>
