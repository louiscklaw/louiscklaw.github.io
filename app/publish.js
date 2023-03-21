var ghpages = require('gh-pages');

ghpages.publish(
  '_site',
  {
    branch: 'master',
    repo: 'git@github.com:louiscklaw/eleventy-playlist.git',
  },
  function (err) {
    console.log(err);
  },
);

console.log('publish done');
