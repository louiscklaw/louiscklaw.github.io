context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://hugo_dev:1313');
  });

  it('helloworld cypress', () => {
    cy.log('helloworld');
  });
});
