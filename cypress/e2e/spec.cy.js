describe('My First Test', () => {
  it('Visits our Application', () => {
    cy.visit('http://localhost:19006/')
    cy.contains('Register').should('be.visible') // Assert that element is visible

  })
})