import ForgotPasswordPage from '../pageObjects/forgotPasswordPage';

function getForgotPageLabel() {
  ForgotPasswordPage.open();
  const text = ForgotPasswordPage.forgotPwdageLabel().getText();
  return text;
}

function enterEmailandGetSuccessPage(forgotPwd) {
  ForgotPasswordPage.forgotPwdEmailInput().setValue(forgotPwd.emailAddress);
  ForgotPasswordPage.forgotPasswordResetButton().click();
}
module.exports = {
  getForgotPageLabel,
  enterEmailandGetSuccessPage
};
