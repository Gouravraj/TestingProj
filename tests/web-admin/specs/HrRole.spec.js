import { loginAs, isHrLoggedin } from '../actions/login.action';
import {
  downloadEmployeeCensusTemplate,
  isEmpCensusDownloaded
} from '../actions/census.action';
import { hrCredentials } from '../../data/login.data';

describe('HR should,', () => {
  it('be able to login to admin portal  with valid credentials', () => {
    loginAs(hrCredentials);
    expect(isHrLoggedin()).toBeTruthy();
  });

  it('be able to download employee census template', () => {
    downloadEmployeeCensusTemplate();
    expect(isEmpCensusDownloaded()).toBeTruthy();
  });
});
