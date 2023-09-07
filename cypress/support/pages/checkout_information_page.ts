import { JsxEmit } from "typescript"

export class CheckoutInformationPage{
    firstname = '#first-name'
    lastname = '#last-name'
    postalcode = '#postal-code'

    inputFirstName(first_name: string){
        cy.get(this.firstname).type(first_name)
    }
    inputLastName(last_name: string){
        cy.get(this.lastname).type(last_name)
    }
    inputPostalCode(postal_code: string){
        cy.get(this.postalcode).type(postal_code)
    }
    clickContinue(){
        cy.contains('Continue').click()
    }

    inputData(first_name : string, last_name: string, postal_code: string){
        this.inputFirstName(first_name)
        this.inputLastName(last_name)
        this.inputPostalCode(postal_code)
        this.clickContinue()
    }
}