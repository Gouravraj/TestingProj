module.exports = {
  login: {
    ios: {
      clientName:
        '(//XCUIElementTypeTextField[@name="RNE__Input__text-input"])[1]',
      username:
        '(//XCUIElementTypeTextField[@name="RNE__Input__text-input"])[2]',
      password:
        '//XCUIElementTypeSecureTextField[@name="RNE__Input__text-input"]',
      submit: '(//XCUIElementTypeOther[@name="Log In"])[3]'
    },

    android: {
      screen:
        '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup',
      clientName:
        '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText',
      username:
        '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.EditText',
      password:
        '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.EditText',
      submit: '//android.view.ViewGroup[@content-desc="Log In"]'
    }
  },

  navi: {
    ios: {
      health: '//XCUIElementTypeButton[@name="Health, tab, 1 of 4"]'
    },

    android: {
      health: '//android.widget.Button[@content-desc="Health, tab, 1 of 4"]'
    }
  }
};
