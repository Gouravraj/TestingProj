import AppScreen from './app.screen';
import txt from '../helpers/text';

const SELECTORS = {
  ADD_MY_HEALTH_DATA_BUTTON: '~Add My Health Data',
  SEARCH_FOR_CLINICS_BUTTON: '~Search for clinics'
};

class HealthLandingScreen extends AppScreen {
  constructor() {
    super(SELECTORS.ADD_MY_HEALTH_DATA_BUTTON);
  }

  searchForClinicButton() {
    return $(SELECTORS.SEARCH_FOR_CLINICS_BUTTON);
  }
  addMyHealthDataButton() {
    return $(SELECTORS.ADD_MY_HEALTH_DATA_BUTTON);
  }

  landingPageText() {
    return $(txt('Become a better version of yourself !'));
  }
}
export default new HealthLandingScreen();
