const Nunjucks = require('nunjucks')
const filters = require('@indiekit/frontend/lib/nunjucks/filters')

module.exports = (() => {
  const parser = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader(
      [
        'src/components',
        'src/layouts',
        'node_modules/@indiekit/frontend/components',
        'node_modules/@indiekit/frontend/layouts'
      ], {
        watch: process.env.NODE_ENV === 'development'
      }
    ), {
      lstripBlocks: true,
      trimBlocks: true
    }
  )

  parser.addFilter('darken', filters.darken);
  parser.addFilter('lighten', filters.lighten);
  parser.addFilter('date', filters.date);
  parser.addFilter('language', string => languages.getNativeName(string));
  parser.addFilter('markdown', filters.markdown);

  return parser
})()
