import navigator from './navigator.action';
import LoginScreen from '../screenobjects/login.screen';
import nativeAlert from '../helpers/NativeAlert';

function loginAs(empDetail) {
  LoginScreen.waitForIsShown(true);
  LoginScreen.companyNameField().setValue(empDetail.companyName);
  LoginScreen.emailAddressField().setValue(empDetail.emailAddress);
  LoginScreen.passwordField().setValue(empDetail.password);

  driver.hideKeyboard();

  LoginScreen.loginButton().click();
}

function isLoggedin() {
  return navigator.isNavigationBarVisible();
}
function isLoginErrorMessageVisible() {
  let isVisible;
  const platform = driver.capabilities.platformName;
  try {
    nativeAlert.waitForAlertToVisible[platform]();
    const errorMessage = nativeAlert.text[platform]();
    isVisible = errorMessage.includes('Error') ? true : false;
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}
module.exports = {
  loginAs,
  isLoggedin,
  isLoginErrorMessageVisible
};
