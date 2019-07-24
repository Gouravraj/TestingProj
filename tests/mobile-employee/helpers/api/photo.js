import wait from './wait';
import getPlatform from './platform';
import txt, { $txt } from '../text';

/**
 * Input to open image native gallery
 * @param  {string}    action
 * @param  {Object}    options
 * @return {undefined}
 */
export default function photo(action, options) {
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
      wait('~Moments');
      $('~Moments').click();
      $('~Photo, Landscape, 4:27 PM').click(); //todo: change photo later
    } else if (platform === 'android') {
      wait(txt('Choose from Library'));
      $txt('Choose from Library').click();

      if (options.permit) {
        if ($txt('ALLOW', 'android.widget.Button').isExisting()) {
          $txt('ALLOW', 'android.widget.Button').click();
          $txt('ALLOW', 'android.widget.Button').click();
        }
      }

      wait(txt('Download'));
      // $txt('Pictures').click();
      $txt('Download').click();
      $('~Photo taken on Jul 24, 2019 2:30:36 PM').click(); //todo: change photo later
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
    if (platform === 'ios') {
      //todo
      $('~').click();
      driver.execute('mobile:alert', { action: 'accept' });
    } else if (platform == 'android') {
      $txt('', 'android.widget.TextView').click();
      $txt('DELETE', 'android.widget.Button').click();
    }
  }

  driver.pause(3000);
}
