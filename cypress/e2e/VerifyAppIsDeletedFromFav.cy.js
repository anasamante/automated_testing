import homePage from '../pages/homePage'


describe('Verify app is deleted from favorites in home page', () => {
    
    beforeEach(() =>{
        // intercept to wait for home page to finish
        cy.intercept('**/v1/me/user_apps?**').as('userApps')
        cy.visit("/")
    })

    it('Delete app from favorite section in home page', () => {
        cy.wait('@userApps')
        //save app name to be deleted
        cy.get('@userApps').its('response.body.collection.0.app.name').as('secondApp')
     
        //wait for the app to be deleted
        cy.intercept('**/v1/me/apps/update_positions?**').as('updatePositions')
        cy.intercept('**/v1/me/apps?**').as('delete')
        homePage.deleteSecondAppOnFav()
        cy.wait('@delete')
        
        //assert deleted app name is not the new second app (Netflix - Prime Video)
        cy.get('@updatePositions').its('response.body.collection.0.name').then((newSecondApp) => {
            cy.get('@secondApp').then((secondApp) => {
                expect(newSecondApp).not.to.equal(secondApp)
            })
        })  
    })
})