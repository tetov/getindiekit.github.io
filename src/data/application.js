const package_ = require('../../package.json');

module.exports = {
  name: 'Indiekit',
  url: process.env.URL || 'https://getindiekit.com',
  navigation: [{
    href: '/docs',
    text: 'Docs'
  }, {
    href: 'https://github.com/getindiekit/indiekit',
    text: 'GitHub'
  }],
  repository: package_.repository,
  themeColor: '#0055ee',
  themeColorScheme: 'automatic',
  version: package_.version
};
