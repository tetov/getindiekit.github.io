require('dotenv').config();
const markdownIt = require('@indiekit/frontend/lib/markdown-it');

markdownIt.linkify.set({
  fuzzyLink: false
})

module.exports = function (eleventyConfig) {
  // Template libraries
  eleventyConfig.setLibrary('md', markdownIt);
  eleventyConfig.setLibrary('njk', require('./lib/libraries/nunjucks'));

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // Passthrough
  eleventyConfig.addPassthroughCopy({
    'node_modules/@indiekit/frontend/assets': 'assets',
    'src/CNAME': 'CNAME'
  });

  // Config
  return {
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'gh-pages',
      layouts: 'layouts',
      includes: 'components',
      data: 'data'
    },
    templateFormats: ['njk', 'md']
  };
};
