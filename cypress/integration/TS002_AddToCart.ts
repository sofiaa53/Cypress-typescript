import {LoginPage} from "../support/pages/login_pages"
import {DashboardPage} from "../support/pages/dashboard_pages"
import { ProductDetailPage } from "../support/pages/prod_detail_pages"
import { CartPage } from "../support/pages/cart_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let productDetailPage = new ProductDetailPage()
let cartPage = new CartPage()
const URL = 'https://www.saucedemo.com/'

it('User want to add product to cart', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    dashboardPage.sauceLabsBackpack()
    productDetailPage.clickAddtoCart()
    productDetailPage.clickbtnCart()
    cy.wait(1000)
    cartPage.verifyProduct()
})