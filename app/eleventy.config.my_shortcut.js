const path = require('path');


// newWindowLink start
async function newWindowLink(text, href) {
  return `
<a href="${href}" class="no-underline hover:underline flex flex-row gap-1 items-center">
  ${text}
  <i class="fa-solid fa-arrow-up-right-from-square"></i>
</a>
  `;
}
// newWindowLink end

// githubLink start
async function githubLink(text, href) {
  return `
<a href="${href}" class="no-underline hover:underline flex flex-row gap-1 items-center">
  ${text}
  <i class="fa-brands fa-github"></i>
  <i class="fa-solid fa-arrow-up-right-from-square"></i>
</a>
  `;
}
// githubLink end

module.exports = eleventyConfig => {
  console.log(`init eleventy.config.my_shortcut.js`)

  eleventyConfig.addAsyncShortcode("githubLink", githubLink);
  eleventyConfig.addAsyncShortcode("newWindowLink", newWindowLink);

  eleventyConfig.addShortcode("helloworldShortcode",
    function(firstName, lastName) {
      return `helloworld ${firstName} ${lastName}`
    }
  );

};
