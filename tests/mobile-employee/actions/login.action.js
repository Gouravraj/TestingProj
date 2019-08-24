import { isNavigationBarVisible } from './navigator.action';
import LoginScreen from '../screenobjects/login.screen';
import nativeAlert from '../helpers/NativeAlert';
import txt from '../helpers/text';
// import {sendKeys} from '../helpers/api';

export function loginAs(empDetail) {
  LoginScreen.waitForIsShown(true);

  LoginScreen.companyNameField().click();
  LoginScreen.companyNameField().setValue(empDetail.companyName);
  $(txt('Welcome to')).click();
  LoginScreen.emailAddressField().click();
  LoginScreen.emailAddressField().setValue(empDetail.emailAddress);
  $(txt('Welcome to')).click();

  LoginScreen.passwordField().click();
  LoginScreen.passwordField().setValue(empDetail.password);
  $(txt('Welcome to')).click();
  LoginScreen.loginButton().click();

  /*
  empDetail.companyName = '';
  LoginScreen.companyNameField().click();
  // LoginScreen.companyNameField().setValue(empDeStail.companyName);
  // sendKeys(LoginScreen.companyNameField(),'twclient3');
  LoginScreen.companyNameField().addValue('t');
  LoginScreen.companyNameField().addValue('w');
  LoginScreen.companyNameField().addValue('c');
  LoginScreen.companyNameField().addValue('l');
  LoginScreen.companyNameField().addValue('i');
  LoginScreen.companyNameField().addValue('e');
  LoginScreen.companyNameField().addValue('n');
  LoginScreen.companyNameField().addValue('t');
  LoginScreen.companyNameField().addValue('3');

      $(txt('Welcome to')).click();
  LoginScreen.emailAddressField().click();
  // LoginScreen.emailAddressField().setValue(empDetail.emailAddress);
  LoginScreen.emailAddressField().addValue('t');
  LoginScreen.emailAddressField().addValue('e');
  LoginScreen.emailAddressField().addValue('s');
  LoginScreen.emailAddressField().addValue('t');
  LoginScreen.emailAddressField().addValue('3');
  LoginScreen.emailAddressField().addValue('@');
  LoginScreen.emailAddressField().addValue('t');
  LoginScreen.emailAddressField().addValue('e');
  LoginScreen.emailAddressField().addValue('s');
  LoginScreen.emailAddressField().addValue('t');
  LoginScreen.emailAddressField().addValue('.');
  LoginScreen.emailAddressField().addValue('c');
  LoginScreen.emailAddressField().addValue('o');
  LoginScreen.emailAddressField().addValue('m');

  
  // $(txt('Welcome to')).click();
  LoginScreen.passwordField().click();
  // LoginScreen.passwordField().setValue(empDetail.password);
  LoginScreen.passwordField().addValue('P');
  LoginScreen.passwordField().addValue('@');
  LoginScreen.passwordField().addValue('s');
  LoginScreen.passwordField().addValue('s');
  LoginScreen.passwordField().addValue('w');
  LoginScreen.passwordField().addValue('0');
  LoginScreen.passwordField().addValue('r');
  LoginScreen.passwordField().addValue('d');


  //$(txt('Welcome to')).click();

  LoginScreen.loginButton().click();
  */
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
