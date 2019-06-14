import navigator from './navigator.action';
import LoginScreen from '../screenobjects/login.screen';
import nativeAlert from '../helpers/NativeAlert';
import { getElementByText } from '../selectors';

function loginAs(empDetail) {
  LoginScreen.waitForIsShown(true);

  LoginScreen.companyNameField().click();
  LoginScreen.companyNameField().setValue(empDetail.companyName);

  LoginScreen.emailAddressField().click();
  LoginScreen.emailAddressField().setValue(empDetail.emailAddress);

  LoginScreen.passwordField().click();
  LoginScreen.passwordField().setValue(empDetail.password);

  // driver.hideKeyboard();
  getElementByText('Welcome to').click();

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
    isVisible = errorMessage.includes('Unable to log in') ? true : false;
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
