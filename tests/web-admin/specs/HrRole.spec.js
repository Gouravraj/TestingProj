import {
  loginAs,
  isHrLoggedin,
  isLoginErrorMessageVisible
} from '../actions/login.action';
import {
  downloadEmployeeCensusTemplate,
  isEmpCensusDownloaded
} from '../actions/census.action';
import { hrCredentials, invalidCredentials } from '../../data/login.data';

describe('HR should,', () => {
  it('be able to login to admin portal  with valid credentials', () => {
    loginAs(hrCredentials);
    expect(isHrLoggedin()).toBeTruthy();
  });

  it.skip('not be able to login to admin portal  with invalid credentials', () => {
    loginAs(invalidCredentials);
    expect(isLoginErrorMessageVisible()).toBeTruthy(); //currently error message is not implemented.
  });

  it('be able to download employee census template', () => {
    downloadEmployeeCensusTemplate();
    expect(isEmpCensusDownloaded()).toBeTruthy();
  });

  it('be able to upload employee census file', () => {});
});
