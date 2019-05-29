import AppScreen from './app.screen';

const SELECTORS = {
  MAKE_A_CLAIM:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup'
};

class ClaimsScreen extends AppScreen {
  constructor() {
    super(SELECTORS.MAKE_A_CLAIM);
  }

  makeClaimButton() {
    return $(SELECTORS.MAKE_A_CLAIM);
  }
}

export default new ClaimsScreen();
