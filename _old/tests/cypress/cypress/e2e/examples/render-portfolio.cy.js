context('Actions', () => {
  beforeEach(() => {
    cy.intercept('https://sentry.io/*', {});
    cy.visit('http://hugo_dev:1313');
  });

  it('helloworld cypress', () => {
    cy.log('helloworld');
  });

  it('portfolio-4k-ultra-hd-render', () => {
    cy.viewport(3840, 2160);
    cy.wait(1 * 1000);
    cy.screenshot({ capture: 'runner', overwrite: true });
  });

  it('portfolio-2k-quad-hd-render', () => {
    cy.viewport(2560, 1440);
    cy.wait(1 * 1000);
    cy.screenshot({ capture: 'runner', overwrite: true });
  });

  it('portfolio-full-hd-render', () => {
    cy.viewport(1920, 1080);
    cy.wait(1 * 1000);
    cy.screenshot({ capture: 'runner', overwrite: true });
  });

  it('portfolio-hd-render', () => {
    cy.viewport(1280, 720);
    cy.wait(1 * 1000);
    cy.screenshot({ capture: 'runner', overwrite: true });
  });

  it('portfolio-tablet-render', () => {
    cy.viewport(810, 1080);
    cy.wait(1 * 1000);
    cy.screenshot({ capture: 'runner', overwrite: true });
  });

  it('portfolio-mobile-render', () => {
    cy.viewport('iphone-x');
    cy.wait(1 * 1000);
    cy.screenshot({ capture: 'viewport', overwrite: true });
  });
});
