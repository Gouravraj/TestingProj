import wait from './wait';

/**
 * Select input
 * @param  {Element}  selectEl
 * @param  {string}   pageSelector
 * @return {Function}
 */
export default function select(selectEl, pageSelector) {
  /**
   * @param  {string}  pageSelector
   * @return {Element}
   */
  return (optionSelector) => {
    selectEl.click();
    wait(pageSelector);
    $(optionSelector).click();

    return selectEl;
  };
}
