import AppScreen from './app.screen';
import { checkIfDisplayedWithScrollDown } from '../helpers/api';
import txt from '../helpers/text';
import '../helpers/format';

const SELECTORS = {
  HEALTH_UPDATE_SCREEN: '~Height',
  ABOUT_ME: 'About Me',
  HEIGHT_FIELD: '~Height',
  WEIGHT_FIELD: '~Weight',
  WAIST_FIELD: '~Waist circumference',
  ETHNICITY_DROPDOWN: '',
  EXERCISE_20: '~I exercise more than 20 minutes each day',
  SUGARY_BEVERAGE: '~0 to 2 times per week',
  NOT_AT_ALL_INTERESTING:
    '(//android.view.ViewGroup[@content-desc="Not at all"])[1]/android.view.ViewGroup/android.widget.TextView',
  NOT_AT_ALL_DEPRESS:
    '(//android.view.ViewGroup[@content-desc="Not at all"])[2]/android.view.ViewGroup/android.widget.TextView',

  NEXT: '~Next'
};

class HealthUpdateScreen extends AppScreen {
  constructor() {
    super(SELECTORS.HEALTH_UPDATE_SCREEN);
  }
  get ethnicityDropdown() {
    return $(txt(SELECTORS.ETHNICITY_DROPDOWN));
  }

  get exercise20() {
    return $(SELECTORS.EXERCISE_20);
  }

  get sugaryBeverage() {
    return $(SELECTORS.SUGARY_BEVERAGE);
  }
  get notAtAllInteresting() {
    return $(SELECTORS.NOT_AT_ALL_INTERESTING);
  }

  get notAtAllDepress() {
    return $(SELECTORS.NOT_AT_ALL_DEPRESS);
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

  scrollToNext() {
    checkIfDisplayedWithScrollDown($(SELECTORS.NEXT), 100, 0);
  }
}

export default new HealthUpdateScreen();
