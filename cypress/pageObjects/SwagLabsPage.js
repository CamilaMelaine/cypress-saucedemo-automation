class SwagLabsPage {
    // Navegação
    visit() {
      cy.visit('/');
    }
  
    // Login
    login(username, password) {
      cy.get('#user-name').type(username);
      cy.get('#password').type(password);
      cy.get('#login-button').click();
    }
  
    // Ações da jornada
    addFirstProductToCart() {
      cy.get('.inventory_item').first().contains('Add to cart').click();
    }
  
    goToCart() {
      cy.get('.shopping_cart_link').click();
    }
  
    proceedToCheckout() {
      cy.get('#checkout').click();
    }
  
    fillCheckoutInformation() {
      cy.get('#first-name').type('Camila');
      cy.get('#last-name').type('Melaine');
      cy.get('#postal-code').type('50000-000');
      cy.get('#continue').click();
    }
  
    finishOrder() {
      cy.get('#finish').click();
    }
  
    // Validações
    validateSuccessMessage() {
      cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    }
  }
  
  export default new SwagLabsPage();