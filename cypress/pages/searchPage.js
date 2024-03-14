class SearchPage {

    clickActionCategory(){
        cy.getDataTestId('Action').click()
    }

    clickSearchMenuButton(){
        cy.getDataTestId('main-menu-item-Search').click()
    }

    searchInput(){
        return cy.get('#input-focus-key')
    }

    moviesList(){
        return cy.getDataTestId('list-item-movie-1')
    }
}

module.exports = new SearchPage();