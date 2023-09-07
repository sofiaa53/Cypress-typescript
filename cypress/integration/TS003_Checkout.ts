import { LoginPage } from "../support/pages/login_pages"
import { DashboardPage } from "../support/pages/dashboard_pages"
import { ProductDetailPage } from "../support/pages/prod_detail_pages"
import { CartPage } from "../support/pages/cart_pages"
import { CheckoutInformationPage } from "../support/pages/checkout_information_page"
import { CheckoutOverviewPage } from "../support/pages/checkout_overview_page"
import { CheckoutCompletePage } from "../support/pages/checkout_complete_page"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let productDetailPage = new ProductDetailPage()
let cartPage = new CartPage()
let checkoutInformationPage = new CheckoutInformationPage()
let checkoutOverviewPage = new CheckoutOverviewPage()
let checkoutCompletePage = new CheckoutCompletePage()

const URL = 'https://www.saucedemo.com/'

it('User want to add product to cart', () => {
    loginPage.login(URL, 'standard_user', 'secret_sauce')
    dashboardPage.sauceLabsBackpack()
    productDetailPage.addtoCart()
    cartPage.clickCheckout()
    checkoutInformationPage.inputData('Sofia', 'Awiliyah', '40552')
    checkoutOverviewPage.clickbtnFinish()
    checkoutCompletePage.verifyOrderSuccess()
})