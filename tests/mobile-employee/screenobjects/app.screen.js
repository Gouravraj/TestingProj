import { DEFAULT_TIMEOUT } from '../../constants';
import {
  checkIfDisplayedWithScrollDown,
  swipeLeftOnElementToFindElement
} from '../helpers/api';
import txt from '../helpers/text';

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
  waitForElementIsShown(element, isShown = true) {
    return element.waitForDisplayed(DEFAULT_TIMEOUT, !isShown);
  }

  waitForIsShown(isShown = true) {
    return $(this.selector).waitForDisplayed(DEFAULT_TIMEOUT, !isShown);
  }

  scrollRightOnElementToFindElement(scrollOnElement, toFindElement) {
    swipeLeftOnElementToFindElement(scrollOnElement, toFindElement, 50, 0);
  }

  scrollDownToElement(element, maxScrolls) {
    checkIfDisplayedWithScrollDown(element, maxScrolls, 0);
  }

  getAttributeOfElement(element, attributeName) {
    return element.getAttribute(attributeName);
  }

  isTextExisting(text) {
    return $(txt(text)).isExisting();
  }
}
