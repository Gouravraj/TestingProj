import { loginAs } from '../actions/login.action';
import { validCredentials } from '../../data/login.data';
import * as profile from '../actions/profile.action';

describe('Employee should be', () => {
  beforeEach(() => {
    loginAs(validCredentials);
  });

  it('able to view forms & documents', () => {
    expect(profile.formsAndDocuments()).toBeTruthy();
  });

  it('able to view e-health card', () => {
    expect(profile.eHealthCard()).toBeTruthy();
  });

  it('able to view my benefits', () => {
    expect(profile.myBenefits()).toBeTruthy();
  });

  afterEach(() => {
    driver.reset();
  });
});
