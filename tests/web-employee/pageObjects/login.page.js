import Page from './app.page';

const SELECTORS = {
  USER_NAME: "//input[@data-testid='input-email']",
  PASSWORD: "//input[@data-testid='input-password']",
  LOGIN_BUTTON: "//button[@data-testid='btn-login']",
  FORGOT_PWD: "//a[contains(text(),'Forgot Password?')]",
  LOGIN_PAGE_LABEL: "//span[contains(text(),'Employee Portal')]"
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
  loginPageLabel() {
    return $(SELECTORS.LOGIN_PAGE_LABEL);
  }
}
export default new LoginPage();
