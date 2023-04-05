///<reference types="Cypress" />
import { mobileReplanishment } from "../support/pages/mobilerReplanishment";
import { transfers } from "../support/pages/transfers";
import { basePage } from "../support/pages/basePage";

it("Replanishment of", () => {
    basePage.open("https://next.privat24.ua/mobile?lang=en")
    mobileReplanishment.typePhoneNumber('686979712')
    basePage.typeAmount('1')
    basePage.typeDebitCardData('4242424242424242', '2504', '111')
    basePage.submitPayment()
    mobileReplanishment.checkDebitCard("4242 **** **** 4242")
    mobileReplanishment.checkDebitAmount("1")
    mobileReplanishment.checkPaymentCurrency("UAH")
});

it.only("mony transfer between foreign cards", () => {
    basePage.open("https://next.privat24.ua/money-transfer/card?lang=en")
    basePage.typeDebitCardData('4242424242424242', '2504', '111')
    transfers.typeDebitNameSurname('Shane', 'McConnel')
    transfers.typeReceiverCard("5309233034765085")
    transfers.typeReceiverNameSurname('Vahagn', 'Hovvyan')
    basePage.typeAmount('2000')
    transfers.typeComment("Cypress Test")
    basePage.submitPayment()
});
