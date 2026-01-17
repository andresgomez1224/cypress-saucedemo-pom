import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import CheckoutStepOnePage from '../pages/CheckoutStepOnePage'
import CheckoutStepTwoPage from '../pages/CheckoutStepTwoPage'

describe('Compra completa con POM', () => {

  const loginPage = new LoginPage()
  const inventoryPage = new InventoryPage()
  const cartPage = new CartPage()
  const checkoutStepOne = new CheckoutStepOnePage()
  const checkoutStepTwo = new CheckoutStepTwoPage()

  beforeEach(() => {
    cy.fixture('userData').as('user')
  })

  it('Debe realizar una compra exitosa', function () {

    // Login
    loginPage.visit()
    loginPage.login(this.user.username, this.user.password)

    // Producto
    inventoryPage.addBackpackToCart()
    inventoryPage.goToCart()

    // Checkout
    cartPage.checkout()

    // Formulario
    checkoutStepOne.fillForm(
      this.user.firstName,
      this.user.lastName,
      this.user.postalCode
    )
    checkoutStepOne.continue()

    // Resumen y finalización
    checkoutStepTwo.validateSummary()
    checkoutStepTwo.finish()

    // Validación final
    cy.contains('Thank you for your order!').should('be.visible')
  })

})