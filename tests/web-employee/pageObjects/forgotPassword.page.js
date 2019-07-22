import Page from './app.page';

const SELECTORS = {
  FORGOTPWD_EMAIL_INPUT: '//input[@data-testid="input-resetEmail"]',
  FORGOTPWD_PAGE_LABLE: "//span[contains(text(),'Forgot')]",
  FORGOTPWD_EMAIL_MSG: "//span[contains(text(),'link')]",
  FORGOTPWD_RESET_BUTTON: '//button[@data-testid="btn-resetPassword"]'
};

class ForgotPasswordPage extends Page {
  open() {
    super.open('forgotPassword');
    super.waitForPageToLoad(SELECTORS.FORGOTPWD_RESET_BUTTON);
  }

  forgotPwdEmailInput() {
    return $(SELECTORS.FORGOTPWD_EMAIL_INPUT);
  }

  forgotPwdageLabel() {
    return $(SELECTORS.FORGOTPWD_PAGE_LABLE);
  }

  forgotPwdEmailMsg() {
    return $(SELECTORS.FORGOTPWD_EMAIL_MSG);
  }

  forgotPasswordResetButton() {
    return $(SELECTORS.FORGOTPWD_RESET_BUTTON);
  }
}
export default new ForgotPasswordPage();
