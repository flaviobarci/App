describe('My First Test', () => {
  it('Visits our Application', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.contains('Register').should('be.visible') // Assert that element is visible

  })
})