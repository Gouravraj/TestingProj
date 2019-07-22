export const details = {
  type: 'General Medical Practitioner',
  diagnosis: 'Abscess'
};

export const detailsSpecialistConsultation = {
  type: 'Specialist Consultation',
  diagnosis: 'Abscess'
};

export const detailsDentalCare = {
  type: 'Dental Care',
  diagnosis: 'Dysarthria'
};

export const detailsRefer = {
  type: 'Diagnostic X-Ray & Laboratory tests and imaging',
  diagnosis: 'Abdominal Pain'
};

export const receiptAmount = 500;

export const image = {
  ios:
    '//XCUIElementTypeCell[contains(@name,"Photo, Portrait, August 09, 2012")]',
  android: '//android.view.ViewGroup[contains(@content-desc,"Photo taken on")]'
};

export const dependent = 'Karen Brown';

export const isReimbursedAmountVisible = {
  ios: '~Reimbursed amount',
  android: '//*[@text="Reimbursed amount"]'
};

export const gmpPendingClaim = {
  ios:
    '(//XCUIElementTypeOther[@name="Pending"])[1]/following-sibling::XCUIElementTypeOther[contains(@name,"General Medical Practitioner")][1]',
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

export const specialistConsultationPendingClaim = {
  ios:
    '(//XCUIElementTypeOther[@name="Pending"])[1]/following-sibling::XCUIElementTypeOther[contains(@name,"Specialist Consultation")][1]',
  android:
    '//*[@text="Pending"]/parent::android.view.ViewGroup/parent::android.view.ViewGroup/parent::android.view.ViewGroup//*[@text="Specialist Consultation"][1]'
};

export const dentalCarePendingClaim = {
  ios:
    '(//XCUIElementTypeOther[@name="Pending"])[1]/following-sibling::XCUIElementTypeOther[contains(@name,"Dental Care")][1]',
  android:
    '//*[@text="Pending"]/parent::android.view.ViewGroup/parent::android.view.ViewGroup/parent::android.view.ViewGroup//*[@text="Dental Care"][1]'
};

export const receiptImage = {
  ios: '(//XCUIElementTypeOther[@name="View document of Receipts"])[7]',
  android: '//android.view.ViewGroup[@content-desc="View document of Receipts"]'
};

export const referralLetter = {
  ios: '(//XCUIElementTypeOther[@name="View document of Receipts"])[14]',
  android: '//*[@text="Referral letter"]'
};

export const outpatientClaimLabel = {
  ios:
    '//XCUIElementTypeStaticText[@name="Pending"]/following-sibling::XCUIElementTypeOther',
  android:
    '//*[@text="Pending"]/parent::android.view.ViewGroup/android.widget.TextView[contains(@text,"claim")]'
};
