class CheckoutStepOnePage {

  fillForm(firstName, lastName, postalCode) {
    cy.get('#first-name').type(firstName)
    cy.get('#last-name').type(lastName)
    cy.get('#postal-code').type(postalCode)
  }

  continue() {
    cy.get('#continue').click()
  }
}

export default CheckoutStepOnePage
