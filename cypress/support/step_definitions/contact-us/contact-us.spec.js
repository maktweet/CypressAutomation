/// <reference types="cypress"/>
import ContactUs from "../../pabeObjects/contact-us/contact-us.page";

Given("I am on Contact Us page", () => {
    cy.visit("/Contact-Us/contactus.html")
});
Then("I enter firstname", () => {
    ContactUs.EnterFirstName("Mohammad ALi Khan")
});
And("I enter lastname", () => {
    ContactUs.EnterLastName("Khan")
});
And("I enter email address", () => {
    ContactUs.EnterEmailAddress("mak@gmail.com")
});
And("I enter comments", () => {
    ContactUs.EnterComments("lorem ipsum test comments putting herer")
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
