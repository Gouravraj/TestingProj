import Page from './page';

const SELECTORS = {
  USER_NAME: 'id=username',
  PASSWORD: 'id=password',
  LOGIN_BUTTON: "//button[@type='submit']",
  FORGOT_PWD: "//span[contains(text(),'Forgot Password?')]"
};

class LoginPage extends Page {
  open() {
    super.open('login');
    super.waitForPageToLoad(SELECTORS.FORGOT_PWD);
  }

  userNameField() {
    return $(SELECTORS.USER_NAME);
  }

  passwordField() {
    return $(SELECTORS.PASSWORD);
  }

  loginButton() {
    return $(SELECTORS.LOGIN_BUTTON);
  }

  forgotPasswordLink() {
    return $(SELECTORS.FORGOT_PWD);
  }
}
export default new LoginPage();
