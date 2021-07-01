/// <reference types="cypress"/>

const FIRST_NAME = "[name='first_name']"
const LAST_NAME = "[name='last_name']"
const EMAIL_ADD = "[name='email']"
const MESSAGE_FIELD = "[name='message']"
const SUBMIT_CONTACT_FORM = "[type='submit']"
const SUBMISSION_TEXT = "#contact_reply"
const REQUIRED_TEXT = "body"
class ContactUs{

    static EnterFirstName(name){
        cy.get(FIRST_NAME).type(name)
    }

    static EnterLastName(name){
        cy.get(LAST_NAME).type(name)
    }

    static EnterEmailAddress(email){
        cy.get(EMAIL_ADD).type(email)
    }

    static EnterComments(comments){
        cy.get(MESSAGE_FIELD).type(comments)
    }

    static ClickOnSubmit(){
        cy.get(SUBMIT_CONTACT_FORM).click()
    }

    static ContactformSubmitted(text){
        cy.get(SUBMISSION_TEXT).should("contain", text)
    }

    static ContactFormNotSubmited(text){
        cy.get(REQUIRED_TEXT).should("contain", text)
    }
}

export default ContactUs