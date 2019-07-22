import ForgotPasswordSuccessPage from '../pageObjects/forgotPasswordSuccess.page';

export function getForgotPasswordSuccessPageLabel() {
  ForgotPasswordSuccessPage.forgotPwdSuceesPageLabel().waitForExist(5000);
  const text = ForgotPasswordSuccessPage.forgotPwdSuceesPageLabel().getText();
  return text;
}

export function getForgotPwdSuccessEmailMsg() {
  ForgotPasswordSuccessPage.forgotPwdSuccessEmailMsg().waitForExist(5000);
  const text = ForgotPasswordSuccessPage.forgotPwdSuccessEmailMsg().getText();
  return text;
}

export function clickForgotPwdSuccessLoginButton() {
  ForgotPasswordSuccessPage.forgotPwdSuccessLoginButton().waitForExist(5000);
  ForgotPasswordSuccessPage.forgotPwdSuccessLoginButton().click();
}

export function getForgotPasswordSuccessResendButton() {
  ForgotPasswordSuccessPage.forgotPasswordSuccessResendButton().waitForExist(
    5000
  );
  return ForgotPasswordSuccessPage.forgotPasswordSuccessResendButton().getText();
}
