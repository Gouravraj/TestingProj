import login from '../../web-admin/actions/login.action';
import census from '../../web-admin/actions/census.action';
import loginData from '../../data/login.data';

describe('HR should,', () => {
  it('be able to login to admin portal  with valid credentials', () => {
    login.loginAs(loginData.hrCredentials);
    expect(login.isHrLoggedin()).toBeTruthy();
  });

  it('be able to download employee census template', () => {
    census.downloadEmployeeCensusTemplate();
    // expect(census.isCensusDownloaded()).toBeTruthy();
  });

  it('be able to upload employee census csv file', () => {});

  it('be able to download Dependant census template', () => {});

  it('be able to upload Dependant census csv file', () => {});
});
