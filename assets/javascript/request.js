import axios from 'axios'

export default {
  request: function(method, url, options) {
    let promise = null
    let params = {}
    let headers = {}

    if (options.params) {
      params = options.params
    }
    if (options.headers) {
      headers = options.headers
    }
    // if (options.auth) {
    //   var authenticateToken = localStorage.getItem('AuthenticationToken');
    //   var authorization_header = { Authorization: authenticateToken }
    //   headers = Object.assign(headers, authorization_header);
    // }

    // const token = document.getElementsByName('csrf-token')[0].getAttribute('content');
    // headers['X-CSRF-TOKEN'] = token;

    promise = axios({
      baseURL: process.env.apiBaseUrl,
      method: method,
      url: url,
      data: params,
      headers: headers
    })
    promise.catch(function() {
      return console.log(promise)
    })
    return promise
  },
  get: function(url, options) {
    return this.request('get', url, options)
  },
  post: function(url, options) {
    return this.request('post', url, options)
  },
  patch: function(url, options) {
    return this.request('patch', url, options)
  },
  delete: function(url, options) {
    return this.request('delete', url, options)
  }
}
