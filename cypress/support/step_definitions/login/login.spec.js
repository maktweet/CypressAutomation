/// <reference types="cypress"/>
import { Given } from "cypress-cucumber-preprocessor/steps";

Given("test is working fine",() => {
    
    cy.visit("/")
})