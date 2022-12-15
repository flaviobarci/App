describe('My First Test', () => {
  it('Show register', () => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.contains('UnReveal').should('be.visible')
    cy.contains('Login').should('be.visible')
    cy.contains('Register').should('be.visible') 

    cy.contains("Register").click()

    cy.get('[placeholder="Username"]').type("Username")
    cy.get('[placeholder="Email"]').type("email@email.com")
    cy.get('[placeholder="Password"]').type("Passwords")

    cy.contains("Let's go!").click()

    cy.on('windows:alert', (str) => {
      expect(str).to.equal("Account already created")
    })
    
  })

  it('Show register with wrong username', () => {

    cy.visit(Cypress.env('BASE_URL'))
    cy.contains('UnReveal').should('be.visible')
    cy.contains('Login').should('be.visible')
    cy.contains('Register').should('be.visible') 

    cy.contains("Register").click()

    cy.get('[placeholder="Username"]').type("Use")
    cy.get('[placeholder="Email"]').type("email@email.com")
    cy.get('[placeholder="Password"]').type("Passwords")


    cy.get('.r-borderTopLeftRadius-sv81z0 > .r-alignItems-1awozwy').click()

    cy.on('windows:alert', (str) => {
      expect(str).to.equal("Invalid username.")
    })

  })



  it('Show register with wrong email', () => {
  
    cy.visit(Cypress.env('BASE_URL'))
    cy.contains('UnReveal').should('be.visible')
    cy.contains('Login').should('be.visible')
    cy.contains('Register').should('be.visible') 

    cy.contains("Register").click()
    
    cy.get('[placeholder="Username"]').type("Username")
    cy.get('[placeholder="Email"]').type("emailemailcom")
    cy.get('[placeholder="Password"]').type("Passwords")


    cy.get('.r-borderTopLeftRadius-sv81z0 > .r-alignItems-1awozwy').click()

    cy.on('windows:alert', (str) => {
      expect(str).to.equal("You did not enter a valid email.")
    })

  })



  it('Show register with wrong password', () => {
  
    cy.visit(Cypress.env('BASE_URL'))
    cy.contains('UnReveal').should('be.visible')
    cy.contains('Login').should('be.visible')
    cy.contains('Register').should('be.visible') 

    cy.contains("Register").click()
    
    cy.get('[placeholder="Username"]').type("Username")
    cy.get('[placeholder="Email"]').type("email@email.com")
    cy.get('[placeholder="Password"]').type("1234")

    cy.get('.r-borderTopLeftRadius-sv81z0 > .r-alignItems-1awozwy').click()

    cy.on('windows:alert', (str) => {
      expect(str).to.equal("Password is too short.")
    })

  }) 


  it('Show login', () => {

    cy.visit(Cypress.env('BASE_URL'))
    cy.contains('UnReveal').should('be.visible')
    cy.contains('Login').should('be.visible')
    cy.contains('Register').should('be.visible') 

    cy.contains("Login").click()

    cy.get('[placeholder="Email"]').type("email@email.com")
    cy.get('[placeholder="Password"]').type("Passwords")

    // following there is the "Login" button test
    cy.get('.r-borderTopLeftRadius-sv81z0 > .r-alignItems-1awozwy').click()

    cy.on('windows:alert', (str) => {
      expect(str).to.equal("Account created!")
    })

  })


  it('Show failed login with wrong email', () => {

    cy.visit(Cypress.env('BASE_URL'))
    cy.contains('UnReveal').should('be.visible')
    cy.contains('Login').should('be.visible')
    cy.contains('Register').should('be.visible') 

    cy.contains("Login").click()

    cy.get('[placeholder="Email"]').type("emailemailcom")
    cy.get('[placeholder="Password"]').type("Passwords")


    cy.get('.r-borderTopLeftRadius-sv81z0 > .r-alignItems-1awozwy').click()

    cy.on('windows:alert', (str) => {
      expect(str).to.equal("Invalid email.")
    })    

  })



  it('Show failed login with wrong password', () => {

    cy.visit(Cypress.env('BASE_URL'))
    cy.contains('UnReveal').should('be.visible')
    cy.contains('Login').should('be.visible')
    cy.contains('Register').should('be.visible') 

    cy.contains("Login").click()

    cy.get('[placeholder="Email"]').type("email@email.com")
    cy.get('[placeholder="Password"]').type("1234")

    cy.get('.r-borderTopLeftRadius-sv81z0 > .r-alignItems-1awozwy').click()

    cy.on('windows:alert', (str) => {
      expect(str).to.equal("Password is too short.")
    })    
  })

})
