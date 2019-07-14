import { getLoginPageLabel } from '../actions/login.action';
import {
  getForgotPageLabel,
  enterEmailandGetSuccessPage
} from '../actions/forgotpassword.action';
import {
  getForgotPasswordSuccessPageLabel,
  getForgotPwdSuccessEmailMsg,
  getForgotPasswordSuccessResendButton,
  clickForgotPwdSuccessLoginButton
} from '../actions/forgotPasswordSuccess.action';
import { forgotPwdEmail } from '../../data/login.data';

describe('Forgot Password Page label,', function() {
  it('Navigate to Forgot Password Page Label  ', function() {
    expect(getForgotPageLabel()).toEqual('Forgot your password?');
  });
});

describe('enter email for forgot password ,', function() {
  it('after entrering email then navigate to forgotPasswordSuccess page  ', function() {
    // browser.pause(3000)
    enterEmailandGetSuccessPage(forgotPwdEmail);
    expect(getForgotPasswordSuccessPageLabel()).toContain('Check your email');
  });
});

describe('forgot password Success Page email ,', function() {
  it('forgotPasswordSuccess page email presence in the page ', function() {
    expect(getForgotPwdSuccessEmailMsg()).toContain(
      forgotPwdEmail.emailAddress
    );
  });
});

describe('forgot password Success Page Resend Link existence ,', function() {
  it('forgotPasswordSuccess page Resend link existence in  the page ', function() {
    expect(getForgotPasswordSuccessResendButton()).toContain('Resend Link');
  });
});

describe('forgot password Success Page back to login page  ,', function() {
  it('From forgotPasswordSuccess page  return to login page by clicking on back to login button ', function() {
    clickForgotPwdSuccessLoginButton();
    expect(getLoginPageLabel()).toContain('Employee Portal');
  });
});
