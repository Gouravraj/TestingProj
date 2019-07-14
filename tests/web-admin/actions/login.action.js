import LoginPage from '../pageObjects/loginPage';
import CensusUploadPage from '../pageObjects/censusUploadPage';

export function loginAs(empDetail) {
  LoginPage.open();
  LoginPage.emailField().setValue(empDetail.emailAddress);
  LoginPage.passwordField().setValue(empDetail.password);
  LoginPage.loginButton().click();
}

export function isHrLoggedin() {
  return CensusUploadPage.waitForPageToLoad();
}

export function isCsLoggedin() {}
