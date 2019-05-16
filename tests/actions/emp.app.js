import LoginScreen from '../screenobjects/login.screen';
import NavigationBar from '../screenobjects/navigationbar.component';

function loginAs(empDetail) {
  LoginScreen.waitForIsShown(true);
  LoginScreen.companyNameField().setValue(empDetail.companyName);
  LoginScreen.emailAddressField().setValue(empDetail.emailAddress);
  LoginScreen.passwordField().setValue(empDetail.password);
  LoginScreen.loginButton().click();
}

function isLogedin() {
  return NavigationBar.waitForIsShown(true);
}
module.exports = {
  loginAs,
  isLogedin
};
