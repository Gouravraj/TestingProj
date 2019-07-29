import wait from './wait';
import getPlatform from './platform';
import txt, { $txt } from '../text';

/**
 * Input to open image native gallery
 * @param  {string}    action
 * @param  {Object}    options
 * @return {undefined}
 */
export default function healthPhoto(action, options) {
  options = {
    permit: true,
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
      wait('~Recently Added');
      $('~Recently Added').click();
    } else if (platform === 'android') {
      wait(txt('Choose from Library'));
      $txt('Choose from Library').click();

      if (options.permit) {
        if ($txt('ALLOW', 'android.widget.Button').isExisting()) {
          $txt('ALLOW', 'android.widget.Button').click();
          $txt('ALLOW', 'android.widget.Button').click();
        }
      }

      wait(txt('Pictures'));
      $txt('Pictures').click();
    }

    // $(options.photo).click();
  } else if (action === 'take') {
    if (platform === 'ios') {
      // not support
    } else if (platform === 'android') {
      wait(txt('Take a Photo'));
      $txt('Take a Photo').click();

      if (options.permit) {
        if ($txt('ALLOW', 'android.widget.Button').isExisting());
        {
          $txt('ALLOW', 'android.widget.Button').click();
          $txt('ALLOW', 'android.widget.Button').click();
        }
      }

      $('~Shutter').click();
      $('~Done').click();
    }
  } else if (action === 'remove') {
    //add to photo
    if (platform === 'ios') {
      $('~').click();
      driver.execute('mobile:alert', { action: 'accept' });
    } else if (platform == 'android') {
      $txt('', 'android.widget.TextView').click();
      $txt('DELETE', 'android.widget.Button').click();
    }
  }

  driver.pause(3000);
}
