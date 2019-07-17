export const details = {
  type: 'General Medical Practitioner',
  diagnosis: 'Abscess'
};

export const detailsRefer = {
  type: 'Diagnostic X-Ray & Laboratory tests and imaging',
  diagnosis: 'Abdominal Pain'
};

export const receiptAmount = 500;

export const image = {
  ios:
    '//XCUIElementTypeCell[contains(@name,"Photo, Portrait, August 09, 2012")]',
  android:
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.view.ViewGroup'
};

export const dependent = 'Karen Brown';

export const isReimbursedAmountVisible = {
  ios: '~Reimbursed amount',
  android: '//*[@text="Reimbursed amount"]'
};

export const gmpPendingClaim = {
  ios:
    '(//XCUIElementTypeOther[contains(@name,"General Medical Practitioner")])[2]',
  android:
    '//*[@text="Pending"]/parent::android.view.ViewGroup/parent::android.view.ViewGroup/parent::android.view.ViewGroup//*[@text="General Medical Practitioner"][1]'
};

export const pendingClaimLoadedImage = {
  ios: '(//XCUIElementTypeOther[starts-with(@name," ")])[2]',
  android:
    '//*[@text="Pending"]/parent::android.view.ViewGroup/parent::android.view.ViewGroup/parent::android.view.ViewGroup/android.view.ViewGroup[3]//*[@text=""]'
};

export const submitClaimButton = {
  ios: '(//XCUIElementTypeOther[@name="Submit Claim"])[4]',
  android: '~Submit Claim'
};

export const viewSubmittedClaim = {
  ios: '(//XCUIElementTypeOther[@name="View Submitted Claims"])[3]',
  android: '~View Submitted Claims'
};
