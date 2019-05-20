import emp from '../actions/app.login';
import empDetail from '../../testdata/emp.detail';

describe('Employee should,', () => {
  it('be able to login to app with valid credentials', () => {
    emp.loginAs(empDetail.validCredentials);
    expect(emp.isLoggedin()).toBeTruthy();
  });

  it('not be able to login to application with invalid credentials', () => {
    emp.loginAs(empDetail.invalidCredentials);
    expect(emp.isLoginErrorMessageVisible()).toBeTruthy();
  });

  afterEach(() => {
    driver.reset();
  });
});
