describe('My Simple Cypress Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Checks if WebViewer is instantiated correctly', () => {
    cy.get('#webviewer-1')
      .should('have.attr', 'allowfullscreen');
  });
});
