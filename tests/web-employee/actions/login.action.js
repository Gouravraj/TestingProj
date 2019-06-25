import LoginPage from '../pageObjects/loginPage';

function loginAs(empDetail) {
  LoginPage.open();
  LoginPage.userNameField().setValue(empDetail.emailAddress);
  LoginPage.passwordField().setValue(empDetail.password);
  LoginPage.loginButton().click();
}

function getLoginPageLabel() {
  return LoginPage.loginPageLabel().getText();
}
module.exports = {
  loginAs,
  getLoginPageLabel
};
