import Page from './page';

const SELECTORS = {
  FORGOTPWD_SUCCESS_LABEL: "//span[contains(text(),'Check')]",
  FORGOTPWD_SUCCESS_EMAIL_MSG: "//span[contains(text(),'sent')]",
  FORGOTPWD_SUCCESS_LOGIN_BUTTON: "//a[@data-testid='btn-backToLogin']",
  FORGOTPWD_SUCCESS_RESENDLINK_BUTTON: '//button[@data-testid="btn-resendLink"]'
};

class ForgotPasswordSuccessPage extends Page {
  open() {
    super.waitForPageToLoad(SELECTORS.FORGOTPWD_SUCCESS_RESENDLINK_BUTTON);
  }
  forgotPwdSuceesPageLabel() {
    return $(SELECTORS.FORGOTPWD_SUCCESS_LABEL);
  }

  forgotPwdSuccessEmailMsg() {
    return $(SELECTORS.FORGOTPWD_SUCCESS_EMAIL_MSG);
  }

  forgotPwdSuccessLoginButton() {
    return $(SELECTORS.FORGOTPWD_SUCCESS_LOGIN_BUTTON);
  }

  forgotPasswordSuccessResendButton() {
    return $(SELECTORS.FORGOTPWD_SUCCESS_RESENDLINK_BUTTON);
  }
}
export default new ForgotPasswordSuccessPage();
