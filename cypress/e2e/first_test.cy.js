///<reference types="Cypress" />

it('Replanishment of', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="phone-number"]')
        .type('686979712')
        .get('[data-qa-node="amount"]')
        .clear()
        .type('1')
        .get('[data-qa-node="numberdebitSource"]')
        .clear()
        .type('4242424242424242')
        .get('[data-qa-node="expiredebitSource"]')
        .clear()
        .type('0524')
        .get('[data-qa-node="cvvdebitSource"]')
        .clear()
        .type('111')
        .get('[data-qa-node="submit"]')
        .click()

        .get('[data-qa-node="card"]')
        .should('have.text', '4242 **** **** 4242')

        .get('[data-qa-node="amount"]')
        .should('contain.text', '1')

        .get('[data-qa-node="commission-currency"]')
        .eq(0)
        .should('contain.text', 'UAH')

        

})