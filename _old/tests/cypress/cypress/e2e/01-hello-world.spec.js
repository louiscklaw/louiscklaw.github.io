context('Actions', () => {
  beforeEach(() => {
    cy.intercept('https://sentry.io/*', {});

    cy.visit('http://hugo_dev:1313/about');
  });
  it('helloworld cypress', () => {
    cy.log('helloworld');
  });
});
