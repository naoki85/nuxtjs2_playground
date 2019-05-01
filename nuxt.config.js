const environment = process.env.NODE_ENV || 'development'
const envSet = require(`./env.${environment}.js`)
// const pkg = require('./package')
const appName = 'naoki85 のブログ'
const appDescription = '本ブログは naoki85 によりメンテナンスされているサイトです。主に本の紹介や勉強したことをブログにまとめていきます。'

module.exports = {
  mode: 'universal',
  env: envSet,

  /*
   ** Headers of the page
   */
  head: {
    title: appName,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: appDescription },
      { hid: 'og:site_name', property: 'og:site_name', content: appName },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://naoki85.me' },
      { hid: 'og:title', property: 'og:title', content: 'ブログ一覧' },
      { hid: 'og:description', property: 'og:description', content: appDescription },
      { hid: 'og:image', property: 'og:image', href: '/ogp.png' },
      { hid: 'twitter:card', property: 'twitter:card', href: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', href: '@tony_201612' },
      { hid: 'twitter:creater', property: 'twitter:created', href: '@tony_201612' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    'siimple/dist/siimple.css',
    '@fortawesome/fontawesome-free/css/all.css',
    '~/assets/style/app.styl',
    'highlight.js/styles/github-gist.css',
    '~/assets/style/parse_markdown.scss',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [],
    plugins: [],
    loaders: {
      stylus: {
        import: []
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
