import LoginPage from '../pageObjects/login.page';

export function loginAs(empDetail) {
  LoginPage.open();
  LoginPage.userNameField().setValue(empDetail.emailAddress);
  LoginPage.passwordField().setValue(empDetail.password);
  LoginPage.loginButton().click();
}

export function getLoginPageLabel() {
  return LoginPage.loginPageLabel().getText();
}
