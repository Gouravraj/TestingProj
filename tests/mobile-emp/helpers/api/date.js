import txt from '../text';
import getPlatform from './platform';

/**
 * Input to open native date
 * @param  {string}    action
 * @param  {Element}   el
 * @return {undefined}
 */
export default function date(action, el) {
  const platform = getPlatform();

  el.click();

  if (action === 'toggle') {
    const selector =
      platform === 'ios' ? '~Confirm' : txt('OK', 'android.widget.Button');

    $(selector).click();
  }
}
