import { DEFAULT_TIMEOUT } from '../../constants';
import { checkIfDisplayedWithScrollDown } from '../helpers/api';
// import txt from '../helpers/text';

export default class AppScreen {
  constructor(selector) {
    this.selector = selector;
  }

  /**
   * Wait for the login screen to be visible
   *
   * @param  {boolean} isShown
   * @return {boolean}
   */
  waitForIsShown(isShown = true) {
    return $(this.selector).waitForDisplayed(DEFAULT_TIMEOUT, !isShown);
  }

  scrollDownToElement(element) {
    checkIfDisplayedWithScrollDown(element, 100, 0);
  }

  isTextExisting(text) {
    // return $(txt(text)).isExisting();
    console.log(text);
  }
}
