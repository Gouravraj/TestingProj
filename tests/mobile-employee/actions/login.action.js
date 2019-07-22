import { isNavigationBarVisible } from './navigator.action';
import LoginScreen from '../screenobjects/login.screen';
import nativeAlert from '../helpers/NativeAlert';
import txt from '../helpers/text';

export function loginAs(empDetail) {
  LoginScreen.waitForIsShown(true);

  LoginScreen.companyNameField().click();
  LoginScreen.companyNameField().setValue(empDetail.companyName);

  LoginScreen.emailAddressField().click();
  LoginScreen.emailAddressField().setValue(empDetail.emailAddress);

  // $(txt('Welcome to')).click();

  LoginScreen.passwordField().click();
  LoginScreen.passwordField().setValue(empDetail.password);

  $(txt('Welcome to')).click();

  LoginScreen.loginButton().click();
}

export function isLoggedin() {
  return isNavigationBarVisible();
}

export function isLoginErrorMessageVisible() {
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
