import { DEFAULT_TIMEOUT } from '../../constants';

export default class Page {
  open(path) {
    browser.url(path);
  }

  waitForPageToLoad(locator) {
    if ($(locator).isDisplayed()) {
      $(locator).waitForDisplayed(DEFAULT_TIMEOUT);
    }
  }
}
