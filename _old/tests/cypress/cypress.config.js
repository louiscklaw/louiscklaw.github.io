const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    blockHosts: ['*.google-analytics.com', '*.plausible.io'],
    setupNodeEvents(on, config) {},
    supportFile: false,
    baseUrl: 'http://192.168.10.180:1313/',

    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,

    waitForAnimations: true,

    animationDistanceThreshold: 20,

    defaultCommandTimeout: 6000,

    execTimeout: 600000,

    pageLoadTimeout: 60000,

    requestTimeout: 15000,

    responseTimeout: 15000,

    video: true,
  },
});
