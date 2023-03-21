context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.screenshot();
  });

  it('helloworld cypress', () => {
    cy.log('helloworld');
  });
});

// context('Actions 1', () => {
//   // beforeEach(() => {
//   //   cy.visit('https://example.cypress.io/commands/actions')
//   //   cy.screenshot()
//   // })

//   it('helloworld cypress', () => {
//     cy.log('helloworld');

//   });

// });
