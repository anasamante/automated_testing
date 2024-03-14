class AppPage {
    clickFreeGamesApp(){
        //element was covered by another one that prevented it to be clicked
        cy.getDataTestId('Free Games by PlayWorks').first().click({force: true})
    }
}

module.exports = new AppPage();