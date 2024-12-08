export default {
  /*
   ** Activate components - https://nuxtjs.org/docs/2.x/directory-structure/components#components-module
   */
  components: true,
  /*
   ** Modules - https://nuxtjs.org/docs/2.x/directory-structure/modules
   */
  modules: ['@nuxt/http'],
  // https://http.nuxtjs.org/
  http: {
    baseURL: process.env.API_BASE_URL
  },
  serverMiddleware: [
    { path: "/api/", handler: "~/api/index.js" }
  ],
  publicRuntimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL
  },
  /*
   ** Head Property - https://nuxtjs.org/docs/2.x/features/meta-tags-seo
   */
  head: {
    title: 'Nuxt',
    titleTemplate: 'My amazing Nuxt application | %s',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'The amazing Nuxt application that teaches me all the cool features of Nuxt'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito&display=swap'
      }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
        async: true,
        defer: true
      }
    ]
  }
}
