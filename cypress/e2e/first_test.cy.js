///<reference types="Cypress" />
import { mobileReplanishment } from "../support/pages/mobilerReplanishment";
import { transfers } from "../support/pages/transfers";
import { basePage } from "../support/pages/basePage";
import { archivePage } from "../support/pages/archive";


beforeEach('setup seucces response', ()=> {
    cy.intercept('https://next.privat24.ua/api/p24/pub/confirm/check?',{
     fixture: 'confirmResponse/success.json'})

})

it('check state of payment in archive', ()=> {
    cy.intercept('https://next.privat24.ua/api/p24/pub/archive', {
     fixture: 'archiveResponse/success.json'})

    basePage.open("https://next.privat24.ua/?lang=en")
    archivePage.selectArchiveMenu()
})

it('check state of payment in archive', ()=> {
    cy.intercept('https://next.privat24.ua/api/p24/pub/archive', {
     fixture: 'archiveResponse/error.json'})

    basePage.open("https://next.privat24.ua/?lang=en")
    archivePage.selectArchiveMenu()
})

it("Replanishment of", () => {
    basePage.open("https://next.privat24.ua/mobile?lang=en")
    mobileReplanishment.typePhoneNumber('686979712')
    basePage.typeAmount('1')
    basePage.typeDebitCardData('4149499610151407', '1123', '111')
    basePage.submitPayment()
    mobileReplanishment.checkDebitCard("4149 **** **** 1407")
    mobileReplanishment.checkDebitAmount("1")
    mobileReplanishment.checkPaymentCurrency("UAH")
    cy.contains('Pay')
        .click()

});

it.skip("mony transfer between foreign cards", () => {
    basePage.open("https://next.privat24.ua/money-transfer/card?lang=en")
    basePage.typeDebitCardData('4242424242424242', '1123', '111')
    transfers.typeDebitNameSurname('Shane', 'McConnel')
    transfers.typeReceiverCard("5309233034765085")
    transfers.typeReceiverNameSurname('Vahagn', 'Hovvyan')
    basePage.typeAmount('2000')
    transfers.typeComment("Cypress Test")
    basePage.submitPayment()
});


//Example HTTP GET Request
it.skip('Example sending thr Get request', ()=> {
    cy.request('https://next.privat24.ua')
        .then((response)=> {
            console.log(response)
        })
})


//Example HTTP POST Request
it.skip('Example sending thr POST request', ()=> {

        const requestBody = {
            action: "info",
            phone: "+380668697912",
            amount: 1205,
            currency: "UAH",
            cardCvv: "111",
            cardExp: "0525",
            card: "4242424242424242",
            xref: "07545d7d0dbe9bec295bbf05a8d3ca4e",
            _: 1680688716934    
        }

        const headersData = {
            cookie:'_ga=GA1.2.627332967.1680095427; pubkey=8843d4f11fe71c5a647a7f5d58a5a9a5; _gid=GA1.2.1231111345.1680686638; fp=13; lfp=3/29/2023, 5:10:37 PM; pa=1680688467468.71920.4173242293130457next.privat24.ua0.9395194213310396+1'
        }

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headersData,
    })
        .then((response)=> {
                expect(response).to.have.property('status').to.equal(200)
                expect(response.body).to.have.property('status').to.equal('success')
                expect(response.body.data).to.have.property('amount').to.have.equal('50.0')
                expect(response.body.data[0]).to.have.property('amount').to.have.equal('50.0')
            console.log(response)
        })
})

//Example HTTP POST Request with Should
it.skip('Example sending thr POST request with should verification', ()=> {
    
    const requestBody = {
        
        ction: "info",
        phone: "+380668697912",
        amount: 1205,
        currency: "UAH",
        cardCvv: "111",
        cardExp: "0525",
        card: "4242424242424242",
        xref: "07545d7d0dbe9bec295bbf05a8d3ca4e",
        _: 1680688716934
        
    };

    const headersData = {
        cookie:'_ga=GA1.2.627332967.1680095427; pubkey=8843d4f11fe71c5a647a7f5d58a5a9a5; _gid=GA1.2.1231111345.1680686638; _gat_gtag_UA_29683426_11=1; fp=14; lfp=3/29/2023, 5:10:37 PM; pa=1680690367315.750.3534293047783794next.privat24.ua0.8779905413919371+1'
    };

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        header: headersData,
    })
        .its('body')
        .should('contain', {
            status: 'success',
        })
        .its('data')
        .should('contain', {
            status: 'ok',
        })


    // cy.request({

    //     method: 'POST',
    //     url: 'https://next.privat24.ua/api/p24/pub/mobipay',
    //     body: requestBody,
    //     headers: headersData,
    // })
    //     .its('body')
    //     .should('contain', {
    //         status: 'success'
    //     })
    //     .its('data')
    //     .should('contain', {
    //         status: 'ok'
    //     })
    
    })