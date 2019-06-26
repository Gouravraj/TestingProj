import Page from './page';

const SELECTORS = {
  EMAIL_ID: 'id=email',
  PASSWORD: 'id=password',
  LOGIN_BUTTON: 'id=login'
};

class LoginPage extends Page {
  open() {
    super.open('login');
    super.waitForPageToLoad(SELECTORS.EMAIL_ID);
  }

  emailField() {
    return $(SELECTORS.EMAIL_ID);
  }

  passwordField() {
    return $(SELECTORS.PASSWORD);
  }

  loginButton() {
    return $(SELECTORS.LOGIN_BUTTON);
  }
}
export default new LoginPage();
