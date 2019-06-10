import LoginPage from '../pageObjects/loginPage';

function loginAs(empDetail) {
  LoginPage.open();
  LoginPage.userNameField().setValue(empDetail.emailAddress);
  LoginPage.passwordField().setValue(empDetail.password);
  LoginPage.loginButton().click();
}

module.exports = {
  loginAs
};
