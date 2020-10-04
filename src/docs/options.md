---
title: Configuration options
---

## Application

application.locale `string`
: The language used in the application interface. See the list of [supported languages](/docs/localisation/).
: *Optional*, defaults to system language if supported, else `en` (English)

application.mongodbUrl `URL`
: To cache files and save information about previously posts and files, you will need to connect Indiekit to a MongoDB database. You can [host one on MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
: *Optional*

application.name `string`
: The name of your server.
: *Optional*, defaults to `Indiekit`

application.themeColor `string`
: Accent colour used in the application interface.
: *Optional*, defaults to `#0055ee`

application.themeColorScheme `string`
: Color scheme used in the application interface, `automatic`, `light` or `dark`.
: *Optional*, defaults to `automatic`

## Publication

publication.categories `Array | URL`
: A list of categories or tags used on your website. Can be an array of values, or the location of a JSON file providing an array of values.
: *Optional*

publication.locale `string`
: Your publication’s locale. Currently used to format dates.
: *Optional*, defaults to `en` (English)

publication.me `URL`
: Your website’s URL.
: *Required*

publication.mediaEndpoint `URL`
: Indiekit provides a [media endpoint](https://micropub.spec.indieweb.org/#media-endpoint), but you can use a third-party endpoint by setting a value for this option.
: *Optional*

publication.postTemplate `Function`
: A post template is a function that takes post properties received and parsed by the Micropub endpoint and renders them in a given file format, for example, a Markdown file with YAML frontmatter.
: *Optional*, defaults to MF2 JSON

publication.postTypes `Array`
: A set of default paths and templates for different post types. See [Configuring post types](/docs/post-types/).
: *Optional if using a preset*

publication.preset `Function`
: A [publication preset](/docs/plug-ins/#publication-presets) plug-in.
: *Optional*

publication.slugSeparator `string`
: The character used to replace spaces when creating a slug.
: *Optional*, defaults to `-`

publication.store `Function`
: A [content store](/docs/plug-ins/#content-stores) plug-in.
: *Required*

publication.storeMessageTemplate `Function`
: Function used to customise message format. See [Customising commit messages](/docs/commit-messages/).
: *Optional*, defaults to `[action] [postType] [fileType]`

publication.sydnicationTargets `Array`
: An array of [syndication targets](https://micropub.spec.indieweb.org/#syndication-targets). Example:

  ```js
  [{
    uid: 'https://twitter.com/paulrobertlloyd/',
    name: 'Paul Robert Lloyd on Twitter'
  }, {
    uid: 'https://mastodon.social/@paulrobertlloyd',
    name: 'Paul Robert Lloyd on Mastodon'
  }, {
    uid: 'https://micro.blog/paulrobertlloyd',
    name: 'Paul Robert Lloyd on Micro.blog'
  }]
  ```

: *Optional*

publication.timeZone `string`
: The time zone for your publication. By default this is set to `UTC`, however if you want to offset dates according to your time zone you can provide [a time zone name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), for example, `Europe/London`:

  ```js
  indiekit.set('publication.timeZone', 'Europe/London');
  ```

  This option also accepts a number of other values. See [Setting a time zone](/docs/time-zone/).

: *Optional*, defaults to `UTC`

publication.tokenEndpoint `URL`
: An IndieAuth token endpoint.
: *Optional*, defaults to `https://tokens.indieauth.com/token`
