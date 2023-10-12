context('Actions', () => {
  beforeEach(() => {
    cy.intercept('https://sentry.io/*', {});

    cy.visit('https://whatismyviewport.com');
  });

  it('helloworld cypress', () => {
    cy.log('helloworld');
  });

  it('whatismyviewport-desktop-render', () => {
    cy.viewport(1920, 1080);
    cy.screenshot({ capture: 'runner', overwrite: true });
  });

  it('whatismyviewport-tablet-render', () => {
    cy.viewport(810, 1080);
    cy.screenshot({ capture: 'runner', overwrite: true });
  });

  it('whatismyviewport-mobile-render', () => {
    cy.viewport('iphone-x');
    cy.screenshot({ capture: 'viewport', overwrite: true });
  });
});
