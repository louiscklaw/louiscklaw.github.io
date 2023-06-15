context('Actions', () => {
  beforeEach(() => {
    cy.intercept('https://sentry.io/*', {});
    cy.visit('http://hugo_dev:1313/search');
  });

  it('helloworld cypress', () => {
    cy.log('helloworld');
  });

  it('portfolio-desktop-render', () => {
    cy.viewport(1920, 1080);
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
