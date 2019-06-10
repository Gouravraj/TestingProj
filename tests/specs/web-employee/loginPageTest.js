import login from '../../web-employee/actions/login.action';
import loginData from '../../data/login.data';

describe('Employee should,', function() {
  it('be able to login to employee web with valid credentials ', function() {
    login.loginAs(loginData.validCredentials);
  });
});
