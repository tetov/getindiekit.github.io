const cache = require('@11ty/eleventy-cache-assets');
const pluginDirectory = require('./plugin-directory.json');

module.exports = async function () {
  const ENDPOINT = 'https://registry.npmjs.org/';

  try {
    const plugins = [];

    for await (const [package, value] of Object.entries(pluginDirectory)) {
      const {builtin, name, type} = value;

      let {description, readme} = await cache(`${ENDPOINT}${package}`, {
        duration: '1d',
        type: 'json'
      })

      // Remove first line (repeats name of plugin)
      readme = readme.replace(/^(?:.*?)\n\n/g, '')

      const plugin = {
        package,
        name,
        description,
        readme,
        builtin,
        endpoint: type === 'endpoint',
        preset: type === 'preset',
        store: type === 'store',
        syndicator: type === 'syndicator'
      }

      plugins.push(plugin);
    }

    return plugins;
  } catch (error) {
    console.warn(error.message);
    return [];
  }
};
