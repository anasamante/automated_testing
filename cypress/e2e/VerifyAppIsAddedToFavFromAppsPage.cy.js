import appDetailsPage from "../pages/appDetailsPage"
import appPage from "../pages/appPage"
import homePage from "../pages/homePage"

describe('Verify app is added to favorites from apps page', () => {
    
    beforeEach(() =>{
        // intercept to wait for home page to finish
        cy.intercept('**/v1/me/apps/update_positions?**').as('updatePositions')
        cy.visit("/")
    })

    it('Go to apps page and add an app to favorites', () => {
        cy.wait('@updatePositions')
        // intercept to wait for Apps page to finish
        cy.intercept('**/v1/lists/2603/items?**').as('appsPage')
        homePage.clickAppsMenuButton()
        cy.wait('@appsPage') 
        
        appPage.clickFreeGamesApp()
        cy.intercept('**/v1/me/user_apps?**').as('userApps')
        
        appDetailsPage.clickAddToFavButton()

        cy.wait('@userApps')
        homePage.clickAppToAddToFav()

        // assertions, app is on collection response body and app exists on homepage 
        cy.get('@userApps').its('response.body.collection.17.id').should('eq', 278)
        cy.get('@userApps').its('response.body.collection.17.app.name').should('eq', 'Free Games by PlayWorks')
        cy.getDataTestId('Free Games by PlayWorks').should('exist')
    })
})