import LoginPage from '../pageObjects/loginPage';

export function loginAs(empDetail) {
  LoginPage.open();
  LoginPage.userNameField().setValue(empDetail.emailAddress);
  LoginPage.passwordField().setValue(empDetail.password);
  LoginPage.loginButton().click();
}

export function getLoginPageLabel() {
  return LoginPage.loginPageLabel().getText();
}
