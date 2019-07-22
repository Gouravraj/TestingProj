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

export function loginAsNimit() {
  LoginScreen.waitForIsShown(true);

  LoginScreen.companyNameField().click();
  LoginScreen.companyNameField().setValue('t');
  LoginScreen.companyNameField().setValue('w');
  LoginScreen.companyNameField().setValue('c');
  LoginScreen.companyNameField().setValue('l');
  LoginScreen.companyNameField().setValue('i');
  LoginScreen.companyNameField().setValue('e');
  LoginScreen.companyNameField().setValue('n');
  LoginScreen.companyNameField().setValue('t');
  LoginScreen.companyNameField().setValue('3');

  LoginScreen.emailAddressField().click();
  LoginScreen.emailAddressField().setValue('c');
  LoginScreen.emailAddressField().setValue('x');
  LoginScreen.emailAddressField().setValue('a');
  LoginScreen.emailAddressField().setValue('t');
  LoginScreen.emailAddressField().setValue('e');
  LoginScreen.emailAddressField().setValue('s');
  LoginScreen.emailAddressField().setValue('t');
  LoginScreen.emailAddressField().setValue('2');
  LoginScreen.emailAddressField().setValue('@');
  LoginScreen.emailAddressField().setValue('t');
  LoginScreen.emailAddressField().setValue('e');
  LoginScreen.emailAddressField().setValue('s');
  LoginScreen.emailAddressField().setValue('t');
  LoginScreen.emailAddressField().setValue('.');
  LoginScreen.emailAddressField().setValue('c');
  LoginScreen.emailAddressField().setValue('o');
  LoginScreen.emailAddressField().setValue('m');

  // $(txt('Welcome to')).click();

  LoginScreen.passwordField().click();
  LoginScreen.passwordField().setValue('P');
  LoginScreen.passwordField().setValue('@');
  LoginScreen.passwordField().setValue('s');
  LoginScreen.passwordField().setValue('s');
  LoginScreen.passwordField().setValue('w');
  LoginScreen.passwordField().setValue('0');
  LoginScreen.passwordField().setValue('r');
  LoginScreen.passwordField().setValue('d');

  $(txt('Welcome to')).click();

  LoginScreen.loginButton().click();
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
