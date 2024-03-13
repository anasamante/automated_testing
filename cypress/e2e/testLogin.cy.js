import loginData from '../fixtures/loginData.json'
import homePage from '../pages/homePage';
import loginPage from "../pages/loginPage";

describe('Visit Homepage', () => {
  
  it('Login and verify user is logged in on homepage', () => {
    cy.visit('/signin')

    loginPage.typeUsername(`${loginData.users.validUser}{enter}`)
    loginPage.typePassword(`${loginData.passwords.validPassword}{enter}`)

    loginPage.interceptApiProducts()
    loginPage.clickOnLogin()
    loginPage.waitForPageToFinishLoading()
    
    homePage.verifyCorrectUserIsLogged(loginData.users.validUser)
  })
})