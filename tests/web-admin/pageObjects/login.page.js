import AppPage from './app.page';

const SELECTORS = {
  EMAIL_ID: ".//input[@id='email']",
  PASSWORD: ".//input[@id='password']",
  LOGIN_BUTTON: ".//button[@id='login']"
};

class LoginPage extends AppPage {
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
