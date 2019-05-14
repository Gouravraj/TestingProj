import AppScreen from './app.screen';

const SELECTORS = {
  BMI_SCREEN: '~Health, tab, 1 of 4',
  BMI_BUTTON: ''
};

class BmiScreen extends AppScreen {
  constructor() {
    super(SELECTORS.BMI_SCREEN);
  }

  bmiScreen() {
    return $(SELECTORS.BMI_SCREEN);
  }

  bmiButton() {
    return $(SELECTORS.LOGIN_BUTTON);
  }
}

export default new BmiScreen();
