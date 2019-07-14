import { loginAs } from '../actions/login.action';
import { validCredentials } from '../../data/login.data';

describe('Employee should,', function() {
  it('be able to login to employee web with valid credentials ', function() {
    loginAs(validCredentials);
  });
});
