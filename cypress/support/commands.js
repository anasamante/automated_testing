import loginData from "../fixtures/loginData.json";

Cypress.Commands.add('loginPOST', (user) => { 
    cy.request({
        url: '/api/signin',
        failOnStatusCode: false,
        method: 'POST',
        body: {
            userName: user,
            password: loginData.passwords.validPassword
        }
    }).then((resp) => {
        cy.wrap(resp.status).as('respStatus')
    })
 })

 Cypress.Commands.add('interceptProductsGETcall', () => { 
    cy.intercept('/api/products').as('productPage')
 })

 Cypress.Commands.add('waitProductsPageFinished', () => { 
    cy.wait('@productPage').its('response.statusCode').should('eq', 200)
 })