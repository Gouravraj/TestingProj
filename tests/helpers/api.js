import { compose } from 'ramda';
import getPlatform from './platform';
import txt from './text';
import { DEFAULT_TIMEOUT } from '../constants';

export function wait(selector) {
  return $(selector).waitForDisplayed(DEFAULT_TIMEOUT, false);
}

export const screen = compose(
  wait,
  txt
);

export function navi(name, cb) {
  screen(name);

  if (typeof cb === 'function') {
    return cb();
  }
}

export function select(select, page) {
  return (option) => {
    select.click();
    wait(page);
    $(option).click();
  };
}

export const visible = screen;

export function date(action, el) {
  const platform = getPlatform();

  el.click();

  if (action === 'toggle') {
    const selector =
      platform === 'ios' ? '~Confirm' : txt('OK', 'android.widget.Button');

    $(selector).click();
  }
}

export function kbd(action, options = { x: 100, y: 100 }) {
  const platform = getPlatform();

  if (action === 'hide') {
    if (platform === 'ios') {
      driver.execute('mobile:tap', options);
    } else if (platform === 'android') {
      driver.hideKeyboard();
    }
  }
}

export function scroll(options, cb) {
  const platform = getPlatform();

  if (platform === 'ios') {
    driver.execute('mobile:scroll', options);
  } else if (platform === 'android') {
    $(
      `android=new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().textContains("**/${options.text}/**").instance(0))`
    );
  }

  if (typeof cb === 'function') {
    cb();
  }
}

export function photo(action, options) {
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

  driver.pause(5000);
}

export function swipe(options, cb) {
  const platform = getPlatform();

  if (platform === 'ios') {
    driver.execute('mobile:swipe', options);
  } else if (platform === 'android') {
    // not support
  }

  if (typeof cb === 'function') {
    cb();
  }
}

export function tap(x, y) {
  driver.touchPerform([
    { action: 'tap', options: { x, y } },
    { action: 'release' }
  ]);
}
