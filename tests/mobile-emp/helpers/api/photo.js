import wait from './wait';
import txt from '../text';
import getPlatform from './platform';

/**
 * Input to open image native gallery
 * @param  {string}    action
 * @param  {Object}    options
 * @return {undefined}
 */
export default function photo(action, options) {
  options = {
    permit: false,
    ...options
  };

  const platform = getPlatform();

  if (action === 'select') {
    if (platform === 'ios') {
      wait('~Choose from Library');
      $('~Choose from Library').click();

      if (options.permit) {
        driver.execute('mobile:alert', { action: 'accept' });
      }

      wait('~Moments');
      $('~Moments').click();
    } else if (platform === 'android') {
      wait(txt('Choose from Library'));
      $(txt('Choose from Library')).click();

      if (options.permit) {
        $(txt('ALLOW', 'android.widget.Button')).click();
        $(txt('ALLOW', 'android.widget.Button')).click();
      }

      wait(txt('Pictures'));
      $(txt('Pictures')).click();
    }

    $(options.photo).click();
  } else if (action === 'take') {
    if (platform === 'ios') {
      // not support
    } else if (platform === 'android') {
      wait(txt('Take a Photo'));
      $(txt('Take a Photo')).click();

      if (options.permit) {
        $(txt('ALLOW', 'android.widget.Button')).click();
        $(txt('ALLOW', 'android.widget.Button')).click();
      }

      $('~Shutter').click();
      $('~Done').click();
    }
  }

  driver.pause(3000);
}
