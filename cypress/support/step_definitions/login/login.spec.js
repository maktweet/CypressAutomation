/// <reference types="cypress"/>

import LoginPage from "../../pabeObjects/login/login.page";

let data = ""
before(()=>{
  cy.fixture("user").then((user)=>{
    data = user
  })
})

Given("I am on login page", () => {
  cy.visit("Login-Portal/index.html");
});

Then("I enter username and password", () => {
    LoginPage.EnterUserNameAndPassword(data.username,data.password)
});

Then("I click on login button and I am successful Logged in", () => {
    LoginPage.ClickOnLoginButton()
});

