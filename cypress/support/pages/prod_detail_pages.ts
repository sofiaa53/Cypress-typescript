export class ProductDetailPage{

    clickAddtoCart(){
        cy.contains('Add to cart').click()
    }

    clickbtnCart() {
        cy.get('#shopping_cart_container').click()
    }

    addtoCart() {
        cy.contains('Add to cart').click()
        cy.get('#shopping_cart_container').click()
    }
}