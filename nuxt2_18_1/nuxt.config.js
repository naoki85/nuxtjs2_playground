export default {
  serverMiddleware: [
    { path: "/api/", handler: "~/api/index.js" }
  ],
  publicRuntimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL
  }
}
