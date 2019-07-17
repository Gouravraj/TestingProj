import AppScreen from './app.screen';
import txt from '../helpers/text';

const SELECTORS = {
  HEALTH_NAVIGATOR: '~Lifestyle, tab, 1 of 4',
  ADD_MY_HEALTH_DATA_BUTTON: '~Add My Health Data'
};

class HealthLandingScreen extends AppScreen {
  constructor() {
    super(SELECTORS.ADD_MY_HEALTH_DATA_BUTTON);
  }

  addMyHealthDataButton() {
    return $(SELECTORS.ADD_MY_HEALTH_DATA_BUTTON);
  }

  landingPageText() {
    return $(txt('Become a better version of yourself !'));
  }
}
export default new HealthLandingScreen();
