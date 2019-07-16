import { loginAs, isCsLoggedin } from '../actions/login.action';
import { csCredentials } from '../../data/login.data';

describe('CS should,', () => {
  it('be able to login to admin portal  with valid credentials', () => {
    loginAs(csCredentials);
    expect(isCsLoggedin()).toBeTruthy();
  });

  it('be able to search employee', () => {});
});
