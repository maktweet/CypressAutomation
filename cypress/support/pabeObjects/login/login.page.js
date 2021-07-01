/// <reference types="cypress"/>

const TXT_USERNAME = "#text";
const TXT_PASSWORD = "#password";
const BTN_LOGIN = "#login-button";

class LoginPage {

  static EnterUserNameAndPassword(username, password) {
    cy.get(TXT_USERNAME).type(username);
    cy.get(TXT_PASSWORD).type(password);
  }

  static ClickOnLoginButton() {
    const stub = cy.stub()
    cy.on("window:alert", stub)
    cy.get(BTN_LOGIN).click().then(() => {
        expect(stub.getCall(0)).to.be.calledWith("validation succeeded")
    })
  }

}
export default LoginPage;
