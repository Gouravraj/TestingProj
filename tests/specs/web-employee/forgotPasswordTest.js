import login from '../../web-employee/actions/login.action';
import forgot from '../../web-employee/actions/forgotpassword.action';
import forgotPasswordSuccess from '../../web-employee/actions/forgotPasswordSuccess.action';
import forgotPwd from '../../data/login.data';

describe('Forgot Password Page label,', function() {
  it('Navigate to Forgot Password Page Label  ', function() {
    expect(forgot.getForgotPageLabel()).toEqual('Forgot your password?');
  });
});

describe('enter email for forgot password ,', function() {
  it('after entrering email then navigate to forgotPasswordSuccess page  ', function() {
    // browser.pause(3000)
    forgot.enterEmailandGetSuccessPage(forgotPwd.forgotPwdEmail);
    expect(forgotPasswordSuccess.getForgotPasswordSuccessPageLabel()).toContain(
      'Check your email'
    );
  });
});

describe('forgot password Success Page email ,', function() {
  it('forgotPasswordSuccess page email presence in the page ', function() {
    expect(forgotPasswordSuccess.getForgotPwdSuccessEmailMsg()).toContain(
      forgotPwd.forgotPwdEmail.emailAddress
    );
  });
});

describe('forgot password Success Page Resend Link existence ,', function() {
  it('forgotPasswordSuccess page Resend link existence in  the page ', function() {
    expect(
      forgotPasswordSuccess.getForgotPasswordSuccessResendButton()
    ).toContain('Resend Link');
  });
});

describe('forgot password Success Page back to login page  ,', function() {
  it('From forgotPasswordSuccess page  return to login page by clicking on back to login button ', function() {
    forgotPasswordSuccess.clickForgotPwdSuccessLoginButton();
    expect(login.getLoginPageLabel()).toContain('Employee Portal');
  });
});
