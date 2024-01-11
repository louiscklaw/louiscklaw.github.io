const { DateTime } = require('luxon');
const readingTime = require('eleventy-plugin-reading-time');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');
const fs = require('fs');
const path = require('path');

const isDev = process.env.ELEVENTY_ENV === 'development';
const isProd = process.env.ELEVENTY_ENV === 'production';

const manifestPath = path.resolve(__dirname, 'public', 'assets', 'manifest.json');

const manifest = isDev
  ? {
    'main.js': '/assets/main.js',
    'main.css': '/assets/main.css',
  }
  : JSON.parse(fs.readFileSync(manifestPath, { encoding: 'utf8' }));

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);

  // setup mermaid markdown highlighter
  const highlighter = eleventyConfig.markdownHighlighter;
  eleventyConfig.addMarkdownHighlighter((str, language) => {
    if (language === 'mermaid') {
      return `<pre class="mermaid">${str}</pre>`;
    }
    return highlighter(str, language);
  });

  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addPassthroughCopy({ 'src/images': 'images' });
  eleventyConfig.setBrowserSyncConfig({ files: [manifestPath] });

  eleventyConfig.addShortcode('bundledcss', function () {
    return manifest['main.css'] ? `<link href="${manifest['main.css']}" rel="stylesheet" />` : '';
  });

  eleventyConfig.addShortcode('bundledjs', function () {
    return manifest['main.js'] ? `<script src="${manifest['main.js']}"></script>` : '';
  });

  eleventyConfig.addFilter('excerpt', post => {
    const content = post.replace(/(<([^>]+)>)/gi, '');
    return content.substr(0, content.lastIndexOf(' ', 200)) + '...';
  });

  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('dd LLL yyyy');
  });

  eleventyConfig.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addFilter('dateToIso', dateString => {
    return new Date(dateString).toISOString();
  });

  eleventyConfig.addFilter('head', (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addCollection('tagList', function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach(function (item) {
      // hide_from_list default to false
      if (item.data.hide_from_tags == undefined) {
        if ('tags' in item.data) {
          let tags = item.data.tags;

          tags = tags.filter(function (item) {
            switch (item) {
              case 'all':
              case 'nav':
              case 'post':
              case 'posts':
                return false;
            }
            return true;
          });

          for (const tag of tags) {
            tagSet.add(tag);
          }
        }
      }else{
        if (item.data.hide_from_tags) {
          console.log("not processed as item.data.hide_from_tags == true.")
        }else{
          if ('tags' in item.data) {
            let tags = item.data.tags;

            tags = tags.filter(function (item) {
              switch (item) {
                case 'all':
                case 'nav':
                case 'post':
                case 'posts':
                  return false;
              }
              return true;
            });

            for (const tag of tags) {
              tagSet.add(tag);
            }
          }
        }
      }

    });

    return [...tagSet];
  });

  eleventyConfig.addFilter('pageTags', tags => {
    const generalTags = ['all', 'nav', 'post', 'posts'];

    return tags
      .toString()
      .split(',')
      .filter(tag => {
        return !generalTags.includes(tag);
      });
  });

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath && outputPath.endsWith('.html') && isProd) {
      return htmlmin.minify(content, {
        removeComments: true,
        collapseWhitespace: true,
        useShortDoctype: true,
      });
    }

    return content;
  });

  eleventyConfig.addFilter('publicPostOnlyFilter', function (collection) {
    const filtered = collection.filter(item => item.data.open_to_public == true);
    return filtered;
  });

  eleventyConfig.addFilter('localeFilter', function (collection, locale) {
    if (!locale) return collection;
    const filtered = collection.filter(item => item.data.locale == locale);
    return filtered;
  });

  eleventyConfig.addFilter('excludeDraftTags', function (tagList) {
    console.log({ tagList });
    return tagList.filter(tag => !tag.data.draft);
  });

  eleventyConfig.addPassthroughCopy('src/manifest.json');

  eleventyConfig.addPassthroughCopy("src/works/**/*.svg", { debug: true });
  eleventyConfig.addPassthroughCopy("src/works/**/*.jpg", { debug: true });
  eleventyConfig.addPassthroughCopy("src/works/**/*.gif", { debug: true });
  eleventyConfig.addPassthroughCopy("src/works/**/*.png", { debug: true });
  eleventyConfig.addPassthroughCopy("src/works/**/*.avif", { debug: true });

  eleventyConfig.addPassthroughCopy("src/beg-comment/**/*.svg", { debug: true });
  eleventyConfig.addPassthroughCopy("src/beg-comment/**/*.jpg", { debug: true });
  eleventyConfig.addPassthroughCopy("src/beg-comment/**/*.gif", { debug: true });
  eleventyConfig.addPassthroughCopy("src/beg-comment/**/*.png", { debug: true });
  eleventyConfig.addPassthroughCopy("src/beg-comment/**/*.avif", { debug: true });

  eleventyConfig.addPassthroughCopy('src/supermarket_qr/**/*.svg', { debug: true });
  eleventyConfig.addPassthroughCopy('src/supermarket_qr/**/*.jpg', { debug: true });
  eleventyConfig.addPassthroughCopy('src/supermarket_qr/**/*.gif', { debug: true });
  eleventyConfig.addPassthroughCopy('src/supermarket_qr/**/*.png', { debug: true });
  eleventyConfig.addPassthroughCopy('src/supermarket_qr/**/*.avif', { debug: true });

  eleventyConfig.addPassthroughCopy('src/carousell/**/*.svg', { debug: true });
  eleventyConfig.addPassthroughCopy('src/carousell/**/*.jpg', { debug: true });
  eleventyConfig.addPassthroughCopy('src/carousell/**/*.gif', { debug: true });
  eleventyConfig.addPassthroughCopy('src/carousell/**/*.png', { debug: true });
  eleventyConfig.addPassthroughCopy('src/carousell/**/*.avif', { debug: true });

  // TODO: add copy image of post here
  // lightbox
  eleventyConfig.addPassthroughCopy({ "src/lib/lightbox/*.css": 'assets' });
  eleventyConfig.addPassthroughCopy({ "src/lib/lightbox/*.js": 'assets' });

  return {
    dir: {
      input: 'src',
      output: 'public',
      includes: 'includes',
      data: 'data',
      layouts: 'layouts',
    },
    passthroughFileCopy: true,
    templateFormats: ['html', 'njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
