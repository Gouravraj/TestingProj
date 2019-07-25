import { loginAs } from '../actions/login.action';
import { validCredentials } from '../../data/login.data';
import {
  isNavigationBarVisible,
  navigateToClaimsPage,
  navigateToHealthPage,
  navigateToShopPage,
  navigateToProfilePage
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
    console.log('3 claim');
    navigateToClaimsPage();

    browser.pause(3000);
    console.log('4 Health');
    navigateToHealthPage();

    browser.pause(3000);
    console.log('5 choices');
    navigateToShopPage();

    browser.pause(3000);
    console.log('6 me');
    navigateToProfilePage();

    browser.pause(3000);

    //TODO:: added assertion in each navigation 
  });
});
 