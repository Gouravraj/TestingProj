const PREFIX = {
  ios: '-ios predicate string:',
  android: 'android='
};

const TYPES = {
  ios: 'XCUIElementTypeOther',
  android: 'android.widget.TextView'
};

/**
 * Get element by text
 * @param  {String}  text
 * @param  {String?} type element type (defaults - ios: any, android: TextView)
 * @return {Element}
 */
function getElementByText(text, type) {
  const platform = driver.capabilities.platformName.toLowerCase();
  const prefix = PREFIX[platform];
  let selector;

  type = type || TYPES[platform];

  if (platform === 'ios') {
    selector = `type == '${type}' && name CONTAINS '${text}'`;
  } else if (platform === 'android') {
    selector = `new UiSelector().text("${text}").className("${type}")`;
  }

  return $(`${prefix}${selector}`);
}

exports.getElementByText = getElementByText;
