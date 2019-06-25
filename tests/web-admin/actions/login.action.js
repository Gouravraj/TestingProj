import LoginPage from '../pageObjects/loginPage';
import CensusUploadPage from '../pageObjects/censusUploadPage';

function loginAs(empDetail) {
  LoginPage.open();
  LoginPage.emailField().setValue(empDetail.emailAddress);
  LoginPage.passwordField().setValue(empDetail.password);
  LoginPage.loginButton().click();
}

function isHrLoggedin() {
  return CensusUploadPage.waitForPageToLoad();
}
function isCsLoggedin() {}

module.exports = {
  loginAs,
  isHrLoggedin,
  isCsLoggedin
};
