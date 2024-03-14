class HomePage {
    clickAppsMenuButton(){
        cy.getDataTestId('main-menu-item-Apps').click()
    }

    clickSearchMenuButton(){
        cy.getDataTestId('main-menu-item-Search').click()
    }

    clickAppToAddToFav(){
        cy.get('body')
        .realClick()
        .realPress('Enter')
        cy.wait(500)
    }

    deleteSecondAppOnFav(){
        cy.get('body').realClick()
        .realPress('ArrowDown')
        .realPress('ArrowDown')
        .realPress('ArrowRight')
        .realPress('Enter', {pressDelay:1000})
        .realPress('ArrowDown')
        .realPress('Enter')
    }
}

module.exports = new HomePage();