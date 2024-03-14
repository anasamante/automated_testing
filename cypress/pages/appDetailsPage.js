class AppDetailsPage {
    clickAddToFavButton(){
        cy.get('#app-fav-button').click()
    }
}

module.exports = new AppDetailsPage();