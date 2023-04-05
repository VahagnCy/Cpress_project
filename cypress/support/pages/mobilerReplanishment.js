export class MobileReplanishment {
    typePhoneNumber(phoneNumber) {
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }

    typeAmount(amount) {
        cy.get('[data-qa-node="amount"]')
            .clear()
            .type(amount)
    }
   
    checkDebitCard(debitCard) {
        cy.get('[data-qa-node="card"]')
            .should("contain.text", debitCard)
    }

    checkDebitAmount(debitAmount) {
        cy.get('[data-qa-node="amount"]')
            .should("contain.text", debitAmount)
    }

    checkPaymentCurrency(paymentCurrency) {
        cy.get('[data-qa-node="commission-currency"]')
            .eq(0)
            .should("contain.text", paymentCurrency);
    }

    

}

export const mobileReplanishment = new MobileReplanishment()