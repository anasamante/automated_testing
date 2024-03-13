import loginData from '../fixtures/loginData.json'

describe('POST, Login', () => {

  it('Test Post login from API with valid user', () => {
    cy.loginPOST(loginData.users.validUser)
    cy.get('@respStatus').should('eq', 200)
  })

  it('Test Post login from API with invalid user', () => {         
    cy.loginPOST(loginData.users.invalidUser)
    cy.get('@respStatus').should('not.eq', 200)
  })

  it('Test Post login from API forEach loop', () => {      
    
    const list = [loginData.users.validUser, loginData.users.invalidUser]

    list.forEach((user) => {

      
      cy.loginPOST(user)

      if(user == loginData.users.validUser){
        cy.get('@respStatus').should('eq', 200)
      } else {
        cy.get('@respStatus').should('not.eq', 200)
      }
      
    });
  })
})