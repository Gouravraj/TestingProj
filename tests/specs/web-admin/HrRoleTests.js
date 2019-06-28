import login from '../../web-admin/actions/login.action';
import census from '../../web-admin/actions/census.action';
import loginData from '../../data/login.data';

describe('HR should,', () => {
  it('be able to login to admin portal  with valid credentials', () => {
    login.loginAs(loginData.hrCredentials);
    expect(login.isHrLoggedin()).toBeTruthy();
  });
});

describe('HR should be ,', () => {
  it('be able to download employee census template', () => {
    census.downloadEmployeeCensusTemplate();
    expect(census.isEmpCensusDownloaded()).toBeTruthy();
  });
});
