import LoginScreen from '../screenobjects/login.screen';
import navigator from './app.navigator';

function loginAs(empDetail) {
  LoginScreen.waitForIsShown(true);
  LoginScreen.companyNameField().setValue(empDetail.companyName);
  LoginScreen.emailAddressField().setValue(empDetail.emailAddress);
  LoginScreen.passwordField().setValue(empDetail.password);
  LoginScreen.loginButton().click();
}

function isLoggedin() {
  return navigator.isNavigationBarVisible();
}
module.exports = {
  loginAs,
  isLoggedin
};
