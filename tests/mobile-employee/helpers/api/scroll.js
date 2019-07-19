import { swipeUp, swipeOnElementToLeft } from './swipe';
import getPlatform from './platform';

function noop() {}

/**
 * Scroll
 * @param  {Object}   options
 * @param  {Function} cb
 * @return {Function}
 */
export default function scroll(options, cb) {
  const platform = getPlatform();

  if (platform === 'ios') {
    driver.execute('mobile:scroll', options);
  } else if (platform === 'android') {
    $(
      `android=new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().textContains("**/${options.text}/**").instance(0))`
    );
  }

  return typeof cb === 'function' ? cb() : noop;
}

export function checkIfDisplayedWithScrollDown(
  element,
  maxScrolls,
  amount = 0
) {
  if (
    (!element.isExisting() || !element.isDisplayed()) &&
    amount <= maxScrolls
  ) {
    swipeUp(0.4);
    checkIfDisplayedWithScrollDown(element, maxScrolls, amount + 1);
  } else if (amount > maxScrolls) {
    throw new Error(
      `The element '${element}' could not be found or is not visible.`
    );
  }
}

// scroolOnElement: Element is scrolled on
// DestinationElement: Scroll will be stopped if this element is found
export function swipeLeftOnElementToFindElement(
  scrollOnElement,
  toFindElement,
  maxScrolls,
  amount = 0
) {
  if (
    (!toFindElement.isExisting() || !toFindElement.isDisplayed()) &&
    amount <= maxScrolls
  ) {
    swipeOnElementToLeft(scrollOnElement);
    swipeLeftOnElementToFindElement(
      scrollOnElement,
      toFindElement,
      maxScrolls,
      amount + 1
    );
  } else if (amount > maxScrolls) {
    throw new Error(
      `The element '${toFindElement}' could not be found or is not visible.`
    );
  }
}
