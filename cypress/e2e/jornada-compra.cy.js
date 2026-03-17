describe('Jornada de Compra Completa - Swag Labs', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Deve fazer login com sucesso', () => {
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.url().should('include', '/inventory.html');
    });
  
    it('Deve completar toda a jornada de compra end-to-end', () => {
      cy.login('standard_user', 'secret_sauce');
  
      cy.get('.inventory_item').first().contains('Add to cart').click();
      cy.get('.shopping_cart_badge').should('have.text', '1');
  
      cy.get('.shopping_cart_link').click();
      cy.get('#checkout').click();
  
      cy.get('#first-name').type('Amelie');
      cy.get('#last-name').type('Steiger');
      cy.get('#postal-code').type('50000-000');
      cy.get('#continue').click();
  
      cy.get('#finish').click();
      cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    });
  });