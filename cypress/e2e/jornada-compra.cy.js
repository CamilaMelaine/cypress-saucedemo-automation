import SwagLabsPage from '../pageObjects/SwagLabsPage';

describe('Jornada de Compra Completa - Swag Labs (com Page Object Model)', () => {
  beforeEach(() => {
    SwagLabsPage.visit();
  });

  it('Deve completar toda a jornada usando Page Object Model', () => {
    SwagLabsPage.login('standard_user', 'secret_sauce');
    SwagLabsPage.addFirstProductToCart();
    SwagLabsPage.goToCart();
    SwagLabsPage.proceedToCheckout();
    SwagLabsPage.fillCheckoutInformation();
    SwagLabsPage.finishOrder();
    SwagLabsPage.validateSuccessMessage();
  });
});