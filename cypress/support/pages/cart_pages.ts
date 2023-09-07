export class CartPage{
    verifyProduct(){
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    clickCheckout() {
        cy.contains('Checkout').click()
    }
}