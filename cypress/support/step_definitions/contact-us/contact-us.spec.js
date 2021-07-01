/// <reference types="cypress"/>
import ContactUs from "../../pabeObjects/contact-us/contact-us.page";


let data =""
before(()=>{
    cy.fixture("user").then((userDetails) => {
        data = userDetails
    })
})
Given("I am on Contact Us page", () => {
    cy.visit("/Contact-Us/contactus.html")
});
Then("I enter firstname", () => {
    ContactUs.EnterFirstName(data.contactDetails.FirstName)
});
And("I enter lastname", () => {
    ContactUs.EnterLastName(data.contactDetails.LastName)
});
And("I enter email address", () => {
    ContactUs.EnterEmailAddress(data.contactDetails.Email)
});
And("I enter comments", () => {
    ContactUs.EnterComments(data.comments)
});
When("I click on submit button", () => {
    ContactUs.ClickOnSubmit()
});

Then("I can see that contact us form is successfully submitted", () => {
    ContactUs.ContactformSubmitted("Thank You for your Message!")
});

Then("I can see that contact us form is not submitted", () => {
    ContactUs.ContactFormNotSubmited("all fields are required")
});
