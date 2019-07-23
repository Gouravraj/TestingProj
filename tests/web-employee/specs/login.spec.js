import { loginAs } from '../actions/login.action';
import { validCredentials } from '../../data/login.data';
import {
  isNavigationBarVisible,
  navigateToClaimsPage
} from '../actions/navigator.action';
describe('Employee should,', function() {
  it('be able to login to employee web with valid credentials ', function() {
    browser.pause(3000);
    console.log('1 login');
    loginAs(validCredentials);
    browser.pause(3000);
    console.log('2 login');
    isNavigationBarVisible();
    browser.pause(3000);
    console.log('3 login');
    navigateToClaimsPage();
    browser.pause(3000);
  });
});
