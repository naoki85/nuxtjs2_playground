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
  }
}
