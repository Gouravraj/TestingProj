import login from '../actions/login.action';
import loginData from '../../data/mobile.login.data';

describe('Employee should,', () => {
  it('be able to login to app with valid credentials', () => {
    login.loginAs(loginData.validCredentials);

    expect(login.isLoggedin()).toBeTruthy();
  });

  it('not be able to login to application with invalid credentials', () => {
    login.loginAs(loginData.invalidCredentials);

    //expect(login.isLoginErrorMessageVisible()).toBeTruthy();
  });

  afterEach(() => {
    driver.reset();
  });
});
