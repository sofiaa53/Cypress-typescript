export class CheckoutCompletePage{

    verifyOrderSuccess(){
        cy.contains('Thank you for your order!').should('be.visible') 
    }
}