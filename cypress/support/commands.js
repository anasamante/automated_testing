Cypress.Commands.add('getDataTestId', input => {
    cy.get(`[data-testid="${input}"]`, {log: false})
  })