import LoginPage from '../pageObjects/login.page';
import CensusUploadPage from '../pageObjects/census.page';
import EmployeeSearchPage from '../pageObjects/employeeSearch.page';

export function loginAs(empDetail) {
  LoginPage.open();
  LoginPage.emailField().setValue(empDetail.emailAddress);
  LoginPage.passwordField().setValue(empDetail.password);
  LoginPage.loginButton().click();
}

export function isHrLoggedin() {
  return CensusUploadPage.waitForPageToLoad();
}

export function isCsLoggedin() {
  return EmployeeSearchPage.waitForPageToLoad();
}
