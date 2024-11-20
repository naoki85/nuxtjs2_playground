const marked = require('marked')
const hljs = require('highlight.js')

export default {
  convertToHtml: function(content: string) {
    if (!content) return ''

    const renderer = new marked.Renderer()
    renderer.langPrefix = ''
    renderer.code = function(code: string, lang: string) {
      return (
        '<pre><code class="' +
        lang +
        '">' +
        hljs.highlightAuto(code).value +
        '</code></pre>'
      )
    }
    return marked(content, { renderer: renderer })
  }
}
