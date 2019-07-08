import AppScreen from './app.screen';
import { checkIfDisplayedWithScrollDown } from '../helpers/api';
import txt from '../helpers/text';

const SELECTORS = {
  HEALTH_UPDATE_SCREEN: '~Height',
  HEIGHT_FIELD: '~Height',
  WEIGHT_FIELD: '~Weight',
  WAIST_FIELD: '~Waist circumference',
  ABOUT_ME: 'About Me',
  NEXT: '~Next'
};

class HealthUpdateScreen extends AppScreen {
  constructor() {
    super(SELECTORS.HEALTH_UPDATE_SCREEN);
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
