import AppScreen from './app.screen';
import { platform as getPlatform } from '../helpers/api';
import txt from '../helpers/text';

const SELECTORS = {
  HEALTH_UPDATE_SCREEN: '~Height',
  ABOUT_ME: 'About Me',
  HEIGHT_FIELD: '~Height',
  WEIGHT_FIELD: '~Weight',
  WAIST_FIELD: '~Waist circumference',
  ETHNICITY_DROPDOWN_IOS:
    '(//XCUIElementTypeOther[starts-with(@name,"Ethnicity")])[2]',
  ETHNICITY_DROPDOWN_ANDROID: '',
  EXERCISE_20: '~I exercise more than 20 minutes each day',
  SUGARY_BEVERAGE: '~0 to 2 times per week',
  NOT_AT_ALL_INTERESTING_IOS: '(//XCUIElementTypeOther[@name="Not at all"])[1]',
  NOT_AT_ALL_INTERESTING_ANDROID:
    '(//android.view.ViewGroup[@content-desc="Not at all"])[1]/android.view.ViewGroup/android.widget.TextView',
  NOT_AT_ALL_DEPRESS_IOS: '(//XCUIElementTypeOther[@name="Not at all"])[2]',
  NOT_AT_ALL_DEPRESS_ANDROID:
    '(//android.view.ViewGroup[@content-desc="Not at all"])[2]/android.view.ViewGroup/android.widget.TextView',
  NEXT: '~Next'
};

class HealthUpdateScreen extends AppScreen {
  constructor() {
    super(SELECTORS.HEALTH_UPDATE_SCREEN);
  }

  get ethnicityDropdown() {
    const platform = getPlatform();
    if (platform === 'ios') {
      return $(SELECTORS.ETHNICITY_DROPDOWN_IOS);
    } else {
      return $(txt(SELECTORS.ETHNICITY_DROPDOWN_ANDROID));
    }
  }

  get exercise20() {
    return $(SELECTORS.EXERCISE_20);
  }

  get sugaryBeverage() {
    return $(SELECTORS.SUGARY_BEVERAGE);
  }
  get notAtAllInteresting() {
    const platform = getPlatform();
    if (platform === 'ios') {
      return $(SELECTORS.NOT_AT_ALL_INTERESTING_IOS);
    } else {
      return $(SELECTORS.NOT_AT_ALL_INTERESTING_ANDROID);
    }
  }

  get notAtAllDepress() {
    const platform = getPlatform();
    if (platform === 'ios') {
      return $(SELECTORS.NOT_AT_ALL_DEPRESS_IOS);
    } else {
      return $(SELECTORS.NOT_AT_ALL_DEPRESS_ANDROID);
    }
  }

  get heightField() {
    return $(SELECTORS.HEIGHT_FIELD);
  }

  get weightField() {
    return $(SELECTORS.WEIGHT_FIELD);
  }

  get waistField() {
    return $(SELECTORS.WAIST_FIELD);
  }

  get AboutMe() {
    return $(txt(SELECTORS.ABOUT_ME));
  }

  get next() {
    return $(SELECTORS.NEXT);
  }
}
export default new HealthUpdateScreen();
