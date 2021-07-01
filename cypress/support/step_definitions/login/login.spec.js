/// <reference types="cypress"/>
import { Given } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../pabeObjects/login/login.page";

Given("I am on login page", () => {
  cy.visit("Login-Portal/index.html");
});

Then("I enter username and password", () => {
    LoginPage.EnterUserNameAndPassword("webdriver","webdriver123")
});

Then("I click on login button and I am successful Logged in", () => {
    LoginPage.ClickOnLoginButton()
});

