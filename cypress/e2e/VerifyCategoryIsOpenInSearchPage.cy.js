import homePage from "../pages/homePage"
import searchPage from "../pages/searchPage"

describe('Verify a category is open in the search page', () => {
    
    beforeEach(() =>{
        // intercept to wait for home page to finish
        cy.intercept('**/v1/me/apps/update_positions?**').as('updatePositions')
        cy.visit("/")
    })

    it('Select a category in search page', () => {
        cy.wait('@updatePositions')
        // intercept to wait for search page to finish
        cy.intercept('**/v1/genres?**').as('genres')
        homePage.clickSearchMenuButton()
        cy.wait('@genres')

        cy.intercept('**/v1/contents/search?**').as('search')
        searchPage.clickActionCategory()

        // assertions, search by Action is made, list is visible, collection response body has movies
        cy.url().should('contain', '/?q=Action');
        searchPage.mo
        searchPage.moviesList().should('be.visible')
        cy.get('@search').its('response.body.collection').its('length').should('be.greaterThan', 0)
    })
})