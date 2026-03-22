describe('Testes de API - jsonplaceholder (estável)', () => {
    it('Deve listar usuários com sucesso (GET)', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.length(10);
          expect(response.body[0]).to.have.property('email');
        });
    });
  
    it('Deve criar um novo post (POST)', () => {
      cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: {
          title: 'Automação Cypress - Camila Melaine',
          body: 'Teste de API',
          userId: 1
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
        expect(response.body.title).to.eq('Automação Cypress - Camila Melaine');
      });
    });
  });