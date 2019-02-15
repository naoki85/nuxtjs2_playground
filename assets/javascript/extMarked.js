import marked from 'marked'

export default {
  convertToHtml: function(content) {
    if (!content) return ''

    const renderer = new marked.Renderer()
    return marked(content, { renderer: renderer })
  }
}
