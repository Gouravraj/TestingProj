import wait from './wait';
import getPlatform from './platform';

const SELECTOR = {
  ios: '~header-back',
  android: '//android.widget.Button[@content-desc="Go back"]'
};

/**
 * Back button
 * @param  {string?}   selector
 * @param  {boolean?}  [willWait=false]
 * @return {undefined}
 */
export default function back(selector, willWait = false) {
  const platform = getPlatform();

  selector = selector || SELECTOR[platform];

  if (willWait) {
    wait(selector);
  }

  $(selector).click();
}
