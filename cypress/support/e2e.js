Cypress.on('fail', (error, runnable) => {
  cy.screenshot(`error-${runnable.title}`)
  throw error
})