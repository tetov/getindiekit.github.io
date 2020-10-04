const postcssEasyImport = require('postcss-easy-import');
const postcssExtendRule = require('postcss-extend-rule');

module.exports = ({
  plugins: [
    postcssEasyImport,
    postcssExtendRule
  ]
});
