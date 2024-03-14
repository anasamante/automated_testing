import "cypress-real-events";

declare namespace Cypress {
    interface Chainable {
      /**
       * Get element by data-testid
       * @example
       * cy.getDataTestI(elementDataId)
       */
      getDataTestId(elementDataId: String): Chainable<any>
    }
  }