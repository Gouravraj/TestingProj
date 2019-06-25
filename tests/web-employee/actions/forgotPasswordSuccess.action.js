import ForgotPasswordSuccessPage from '../pageObjects/forgotPasswordSuccessPage';

function getForgotPasswordSuccessPageLabel() {
  ForgotPasswordSuccessPage.forgotPwdSuceesPageLabel().waitForExist(5000);
  const text = ForgotPasswordSuccessPage.forgotPwdSuceesPageLabel().getText();
  return text;
}

function getForgotPwdSuccessEmailMsg() {
  ForgotPasswordSuccessPage.forgotPwdSuccessEmailMsg().waitForExist(5000);
  const text = ForgotPasswordSuccessPage.forgotPwdSuccessEmailMsg().getText();
  return text;
}

function clickForgotPwdSuccessLoginButton() {
  ForgotPasswordSuccessPage.forgotPwdSuccessLoginButton().waitForExist(5000);
  ForgotPasswordSuccessPage.forgotPwdSuccessLoginButton().click();
}

function getForgotPasswordSuccessResendButton() {
  ForgotPasswordSuccessPage.forgotPasswordSuccessResendButton().waitForExist(
    5000
  );
  return ForgotPasswordSuccessPage.forgotPasswordSuccessResendButton().getText();
}

module.exports = {
  getForgotPasswordSuccessPageLabel,
  getForgotPwdSuccessEmailMsg,
  clickForgotPwdSuccessLoginButton,
  getForgotPasswordSuccessResendButton
};
