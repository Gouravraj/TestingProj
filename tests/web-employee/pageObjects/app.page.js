import { DEFAULT_TIMEOUT } from '../../constants';

export default class Page {
  constructor(selector) {
    this.selector = selector;
  }
  open(path) {
    browser.url(path);
  }

  waitForPageToLoad(locator) {
    if ($(locator).isDisplayed()) {
      $(locator).waitForDisplayed(DEFAULT_TIMEOUT);
    }
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
}
