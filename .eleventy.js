module.exports = function (eleventyConfig) {
  // Template libraries
  eleventyConfig.setLibrary('njk', require('./lib/libraries/nunjucks'));
  eleventyConfig.setLibrary('md', require('./lib/libraries/markdown'));

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // Passthrough
  eleventyConfig.addPassthroughCopy({
    'node_modules/@indiekit/frontend/assets': 'assets'
  });

  // Config
  return {
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'docs',
      layouts: 'layouts',
      includes: 'components',
      data: 'data'
    },
    templateFormats: ['njk', 'md']
  };
};
