import marked from 'marked'
import hljs from 'highlight.js'

export default {
  convertToHtml: function(content) {
    if (!content) return ''

    const renderer = new marked.Renderer()
    renderer.langPrefix = ''
    renderer.code = function(code, lang) {
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
