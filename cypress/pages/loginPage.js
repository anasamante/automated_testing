
class LoginPage {
    //Elements

    getUsernameInput(){
        return cy.get('#username')
    }

    getPasswordElement(){
        return cy.get('#password')
    }

    getPasswordInput(){
        return cy.get('#password input')
    }

    getLoginBtn(){
        return cy.get('#login-btn')
    }
   
    //Methods
    
    typeUsername(username){
        this.getUsernameInput().type(username)
    }

    clickOnPasswordElement(){
        this.getPasswordElement().click()
    }

    typePassword(password){
        this.clickOnPasswordElement()
        this.getPasswordInput().type(password)
    }

    interceptApiProducts(){
        cy.intercept('/api/products?userName=demouser').as('pageLoads')
    }

    clickOnLogin(){
        this.getLoginBtn().click()
    }

    waitForPageToFinishLoading(){
        cy.wait('@pageLoads').its('response.statusCode').should('eq', 200)
    }

}

module.exports = new LoginPage();