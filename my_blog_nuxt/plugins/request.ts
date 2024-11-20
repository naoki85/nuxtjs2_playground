const axios = require('axios')

export default {
  request: function(method: string, url: string, {}) {
    let promise: any = null
    let params: object = {}
    let headers: object = {}

    promise = axios({
      baseURL: process.env.apiBaseUrl,
      method: method,
      url: url,
      data: params,
      headers: headers
    })
    return promise
  },
  get: function(url: string, options: object) {
    return this.request('get', url, options)
  },
  post: function(url: string, options: object) {
    return this.request('post', url, options)
  },
  patch: function(url: string, options: object) {
    return this.request('patch', url, options)
  },
  delete: function(url: string, options: object) {
    return this.request('delete', url, options)
  }
}

