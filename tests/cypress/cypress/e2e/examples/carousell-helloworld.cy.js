context('Actions', () => {
  beforeEach(() => {});

  it('helloworld carousell', () => {
    cy.intercept('https://sentry.io/*', {});
    cy.visit('https://www.carousell.com.hk');

    cy.viewport(1920, 1080 * 10);

    cy.screenshot({ capture: 'viewport', overwrite: true });
  });
});
