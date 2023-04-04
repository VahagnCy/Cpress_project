export class BasePage {

    open(url) {
        cy.visit(url)
    }

    typeAmount(amount) {
        cy.get('[data-qa-node="amount"]')
            .clear()
            .type(amount)
    }

    typeDebitCardData(cardNumber, expDate, cvv) {
        cy.get('[data-qa-node="numberdebitSource"]')
            .clear()
            .type(cardNumber)

            .get('[data-qa-node="expiredebitSource"]')
            .clear()
            .type(expDate)

            .get('[data-qa-node="cvvdebitSource"]')
            .clear()
            .type(cvv)
    }

    submitPayment() {
        cy.get('button[type="submit"]')
            .click()
    }
}

export const basePage = new BasePage()