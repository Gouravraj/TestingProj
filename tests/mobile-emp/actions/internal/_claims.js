import navigator from '../navigator.action';
import cs from '../../screenobjects/claims.screen';
import {
  select,
  date,
  kbd,
  photo,
  tap,
  platform as getPlatform,
  checkIfDisplayedWithScrollDown
} from '../../helpers/api';
import txt, { txtTo } from '../../helpers/text';

export function _getStarted() {
  navigator.isNavigationBarVisible();
  navigator.navigateToClaimsScreen();

  cs.buttonMakeClaim.click();
}

export function _patientDetails(dependent, isPN = false, isCN = false) {
  if (isPN) {
    const selectPName = select(
      cs.selectPatientName,
      txt('Select Patient Name')
    );

    selectPName(txtTo(dependent));
  }

  if (isCN) {
    cs.inputContactNumber.click();

    // TODO: implement for ios
    // $('~Contact number').clearValue();

    cs.inputContactNumber.setValue(87654321);
    kbd('hide');
  }

  driver.pause(1000);

  cs.buttonAddClaimDetails.click();
}

export function _claimDetails(type, diagnosis, amount) {
  const selectCType = select(
    cs.selectConsultationType,
    txt('Consultation Type')
  );
  const selectDia = select(cs.selectDiagnosis, txt('Diagnosis'));

  selectCType(txtTo(type));
  selectDia(txtTo(diagnosis));

  date('toggle', cs.dateConsultationDate);

  cs.inputReceiptAmount.click();
  cs.inputReceiptAmount.setValue(amount);
  kbd('hide');

  cs.buttonButtonAddDocuments.click();
}

export function _addDocuments(image, isRefer = false) {
  const platform = getPlatform();

  if (platform === 'ios') {
    cs.photoAddDocumentReceipts.click();
  } else if (platform === 'android') {
    // $(
    //   '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]'
    // ).click();
    // NOTE: tap will do faster than we expected, so make it delays
    driver.pause(2000);
    tap(335, 867);
  }

  // cs.photoAddDocumentReceipts.click();
  photo('select', {
    permit: platform === 'ios',
    photo: image[platform]
  });

  if (isRefer) {
    const refEl =
      platform === 'ios'
        ? $(
            '(//XCUIElementTypeOther[@name="Add document for Referral letter"])[6]'
          )
        : cs.photoAddDocumentForReferralLetter;

    refEl.click();
    photo('select', {
      permit: false,
      photo: image[platform]
    });

    checkIfDisplayedWithScrollDown(cs.buttonReviewClaim, 100, 0);
  }

  cs.buttonReviewClaim.click();
}

export function _reviewClaim() {
  // NOTE: hack; to prevent previous event (click)
  tap(1, 1);

  checkIfDisplayedWithScrollDown(cs.buttonSubmitClaim, 100, 0);
  cs.buttonSubmitClaim.click();
}

export function _termsConditions() {
  cs.buttonAcceptTermsConditions.click();
}
