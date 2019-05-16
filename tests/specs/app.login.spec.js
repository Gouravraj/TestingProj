import emp from '../actions/app.login';

const empDetail = require('../../testdata/emp.detail')();

describe('Employee should ,', () => {
  it('be able to login to app with valid credentials', () => {
    emp.loginAs(empDetail);
    expect(emp.isLoggedin()).toBeTruthy();
  });
});
