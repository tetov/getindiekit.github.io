const markdown = require('markdown-it')

module.exports = (() => {
  const opts = {
    html: true,
    breaks: true,
    linkify: false,
    typographer: true
  }

  const parser = markdown(opts)

  parser
    .use(require('markdown-it-anchor'), {
      permalink: false
    })
    .use(require('markdown-it-deflist'))

  return parser
})()
