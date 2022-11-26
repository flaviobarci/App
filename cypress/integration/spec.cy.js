describe('My First Test', () => {
  it('Visits our Application', () => {
    cy.visit(Cypress.env('URL'))
    cy.contains('Register').should('be.visible') // Assert that element is visible

  })
})