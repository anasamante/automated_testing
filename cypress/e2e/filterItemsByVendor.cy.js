import homePage from '../pages/homePage';
import homePageData from '../fixtures/homePageData.json'

describe('Filter items by vendor', () => {
    
    beforeEach(() =>{
        cy.visit("/")
    })

    it('Filter items by Samsung', () => {
        cy.interceptProductsGETcall()
        homePage.clickOnAFilter('Samsung')
        cy.waitProductsPageFinished()
        homePage.getProductItems().should('have.length', homePageData.samsungProductsAvailable)
    })

    it('Filter items by Apple', () => {
        cy.interceptProductsGETcall()
        homePage.clickOnAFilter('Apple')
        cy.waitProductsPageFinished()
        homePage.getProductItems().should('have.length', homePageData.appleProductsAvailable)
    })

    it('Filter items by Google', () => {
        cy.interceptProductsGETcall()
        homePage.clickOnAFilter('Google')
        cy.waitProductsPageFinished()
        homePage.getProductItems().should('have.length', homePageData.googleProductsAvailable)
    })

    it('Filter items by OnePlus', () => {
        cy.interceptProductsGETcall()
        homePage.clickOnAFilter('OnePlus')
        cy.waitProductsPageFinished()
        homePage.getProductItems().should('have.length', homePageData.onePlusProductsAvailable)
    })

    afterEach('Clear the filter', ()=> {
        cy.interceptProductsGETcall()
        homePage.clickOnFilteredVendorButton()
        cy.waitProductsPageFinished()
        homePage.getProductItems().should('have.length', homePageData.allProductsAvailable)
    })
})