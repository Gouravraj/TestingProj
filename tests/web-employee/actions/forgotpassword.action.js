import ForgotPasswordPage from '../pageObjects/forgotPassword.page';

export function getForgotPageLabel() {
  ForgotPasswordPage.open();
  const text = ForgotPasswordPage.forgotPwdageLabel().getText();
  return text;
}

export function enterEmailandGetSuccessPage(forgotPwd) {
  ForgotPasswordPage.forgotPwdEmailInput().setValue(forgotPwd.emailAddress);
  ForgotPasswordPage.forgotPasswordResetButton().click();
}
