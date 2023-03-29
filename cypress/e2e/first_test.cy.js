///<reference types="Cypress" />

// it('By Id', () => {
//     cy.visit("https://facebook.com/")
//     cy.get("#email")
// })

// it('By Class', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get.html#Syntax")
//     cy.get(".searchBox_ZlJk")
// })

// it('By Tag', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get.html#Syntax")
//     cy.get("nav")
// })

// it('By Tag Value', () => {
//     cy.visit("https://facebook.com")
//     cy.get('[name="pass"]')
// })

// it('By Different Tag ', () => {
//     cy.visit("https://facebook.com")
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')
// })

// it.only('By Different Tag ', () => {
//     cy.visit("https://next.privat24.ua")
//     cy.get('*[class^="card"]')
// })

//COMENT FOR GIT

it('Usint get and Find equality', () => {
    cy.visit("https://next.privat24.ua/deposit/open")
    cy.get('tbody').find('td').find('div').find('button').eq(0)
})

it.only('Usint get and Find equality', () => {
    cy.viewport(1800, 700)
    cy.visit("https://docs.cypress.io/api/commands/get.html#Syntax")
    cy.get('div')
})


