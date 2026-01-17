class CheckoutStepTwoPage {

  validateSummary() {
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.contains('Payment Information').should('be.visible')
    cy.contains('Shipping Information').should('be.visible')
    cy.contains('Total').should('be.visible')
  }

  finish() {
    cy.get('#finish').click()
  }
}

export default CheckoutStepTwoPage