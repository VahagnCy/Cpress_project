///<reference types="Cypress" />

it('SHOULD', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
        .clear()
        .type(100)
        .should('have.value', 100)
        .and('be.visible')
})

it('EXPECT', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
        .clear()
        .type(100).then( input=> {
            expect(input).to.have.value(100)
        })      
})

it('CHECK default value', () => {
    cy.visit('https://next.privat24.ua/deposit/open?lang=en')
    cy.get('[data-qa-node="UAH"]')
        .should('be.checked')     
})

it('check is visible archive', () => {
    cy.visit('https://next.privat24.ua/deposit/open?lang=en')
    cy.contains('My deposits')
        .trigger('mouseover')
        .get('[data-for="lobby"]').contains('Archive')
        .should('be.visible')     
})

it('check attribute in button', () => {
    cy.visit('https://next.privat24.ua?lang=en')
    cy.contains('Show cards')
        .should('have.attr', 'type')
        .and('match', /button/)
})

it.only('check is correct Url', ()=> {
    cy.visit('https://next.privat24.ua?lang=en')
    cy.url()
        .should('eq', 'https://next.privat24.ua/?lang=en')
})