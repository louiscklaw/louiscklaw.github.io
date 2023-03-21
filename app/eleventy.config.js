const { DateTime } = require('luxon');

const markdownItAnchor = require('markdown-it-anchor');

const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginBundle = require('@11ty/eleventy-plugin-bundle');
const pluginNavigation = require('@11ty/eleventy-navigation');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');

// https://www.npmjs.com/package/eleventy-plugin-nesting-toc
const pluginTOC = require('eleventy-plugin-nesting-toc');

// https://github.com/adamduncan/eleventy-plugin-i18n
const i18n = require('eleventy-plugin-i18n');
const { EleventyI18nPlugin } = require('@11ty/eleventy');

const translations = require('./_data/i18n');

const searchFilter = require('./filters/searchFilter');

const readingTime = require('eleventy-plugin-reading-time');


module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    showAllHosts: true,
  });

  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    // zh-HK 	Chinese 	Hond Kong 	Hong Kong, traditional characters
    defaultLanguage: 'en-US',
  });

  // Copy the contents of the `public` folder to the output folder
  // For example, `./public/css/` ends up in `_site/css/`
  eleventyConfig.addPassthroughCopy({
    './public/': '/',
    './node_modules/prismjs/themes/prism-okaidia.css': '/css/prism-okaidia.css',
  });

  // Run Eleventy when these files change:
  // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

  // Watch content images for the image pipeline.
  eleventyConfig.addWatchTarget('content/**/*.{svg,webp,png,jpeg}');

  // App plugins
  eleventyConfig.addPlugin(require('./eleventy.config.drafts.js'));
  eleventyConfig.addPlugin(require('./eleventy.config.images.js'));
  eleventyConfig.addPlugin(require('./eleventy.config.my_shortcut.js'));

  // Official plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight, { preAttributes: { tabindex: 0 }, });
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(pluginBundle);

  // Filters
  eleventyConfig.addFilter('readableDate', (dateObj, format, zone) => {
    // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
    return DateTime.fromJSDate(dateObj, { zone: zone || 'utc' }).toFormat(format || 'dd LLLL yyyy');
  });

  eleventyConfig.addFilter('htmlDateString', dateObj => {
    // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('head', (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // Return the smallest number argument
  eleventyConfig.addFilter('min', (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  // Return all the tags used in a collection
  eleventyConfig.addFilter('getAllTags', collection => {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    }
    return Array.from(tagSet);
  });

  eleventyConfig.addFilter('filterTagList', function filterTagList(tags) {
    return (tags || []).filter(tag => ['all', 'nav', 'post', 'posts'].indexOf(tag) === -1);
  });

  // Customize Markdown library settings:
  eleventyConfig.amendLibrary('md', mdLib => {
    mdLib.use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.ariaHidden({
        placement: 'after',
        class: 'header-anchor',
        symbol: '#',
        ariaHidden: false,
      }),
      level: [1, 2, 3, 4],
      slugify: eleventyConfig.getFilter('slugify'),
    });
  });

  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3', 'h4'], // Which heading tags are selected (headings must each have an ID attribute)
    ignoredElements: [], // Elements to ignore when constructing the label for every header (useful for ignoring permalinks, must be selectors)
    wrapper: 'nav', // Element to put around the root `ol`
    wrapperClass: 'toc', // Class for the element around the root `ol`
    headingText: '', // Optional text to show in heading above the wrapper element
    headingTag: 'h2', // Heading tag when showing heading above the wrapper element
  });

  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      '*': 'en-US',
    },
  });

  eleventyConfig.addFilter('search', searchFilter);
  eleventyConfig.addCollection('movies', collection => {
    return [
      ...collection.getFilteredByGlob('./content/movies/**/*.md')
    ];
  });

  // Features to make your build faster (when you need them)

  // If your passthrough copy gets heavy and cumbersome, add this line
  // to emulate the file copy on the dev server. Learn more:
  // https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

  // eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addPlugin(readingTime);

  // eleventyConfig.addAsyncShortcode("image", imageShortcode);

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ['md', 'njk', 'html', 'liquid'],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: 'njk',

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: 'njk',

    // These are all optional:
    dir: {
      input: 'content', // default: "."
      includes: '../_includes', // default: "_includes"
      data: '../_data', // default: "_data"
      output: '_site',
    },

    // -----------------------------------------------------------------
    // Optional items:
    // -----------------------------------------------------------------

    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

    // When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
    // it will transform any absolute URLs in your HTML to include this
    // folder name and does **not** affect where things go in the output folder.
    pathPrefix: '/',
  };
};
