
class HomePage {
    //Elements
    getUsername(){
        return cy.get('.username')
    }

    getFiltersElement(){
        return cy.get('.filters')
    }
   
    getProductItems(){
        return cy.get('.shelf-item')
    }

    getFilteredVendorButton(){
        return cy.get('input:checked~.checkmark')
    }
    
    //Methods
    verifyCorrectUserIsLogged(username){
        this.getUsername().should('have.text', username)
    }

    clickOnAFilter(vendorName){
        this.getFiltersElement().contains(vendorName).click()
    }

    clickOnFilteredVendorButton(){
        this.getFilteredVendorButton().click()
    }

}

module.exports = new HomePage();