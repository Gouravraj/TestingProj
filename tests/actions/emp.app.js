import LoginScreen from '../screenobjects/login.screen';

function loginAs(empDetail) {
  LoginScreen.waitForIsShown(true);
  LoginScreen.companyNameField().setValue(empDetail.companyName);
  LoginScreen.emailAddressField().setValue(empDetail.emailAddress);
  LoginScreen.passwordField().setValue(empDetail.password);
  LoginScreen.loginButton().click();
}

module.exports = {
  loginAs
};
