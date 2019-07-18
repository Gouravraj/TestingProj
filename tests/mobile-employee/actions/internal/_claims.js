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
import { CLAIMS as SELECTOR } from '../../selectors';
import ClaimsScreen from '../../screenobjects/claims.screen';
import wait from '../../helpers/api/wait';

export function _patientDetails(dependent, isPN = false, isCN = false) {
  if (isPN) {
    const selectPName = select(
      SELECTOR.selectPatientName,
      txt('Select Patient Name')
    );

    selectPName(txtTo(dependent));
  }

  if (isCN) {
    $(SELECTOR.inputContactNumber).click();

    // TODO: implement for ios
    // $('~Contact number').clearValue();

    $(SELECTOR.inputContactNumber).setValue(87654321);
    kbd('hide');
  }

  driver.pause(1000);

  $(SELECTOR.buttonAddClaimDetails).click();
}

export function _claimDetails(type, diagnosis, amount) {
  const selectCType = select(
    SELECTOR.selectConsultationType,
    txt('Consultation Type')
  );
  const selectDia = select(SELECTOR.selectDiagnosis, txt('Diagnosis'));

  selectCType(txtTo(type));
  selectDia(txtTo(diagnosis));

  date('toggle', SELECTOR.dateConsultationDate);

  $(SELECTOR.inputReceiptAmount).click();
  $(SELECTOR.inputReceiptAmount).setValue(amount);
  kbd('hide');

  $(SELECTOR.buttonAddDocuments).click();
}

export function _addDocuments(image, isRefer = false) {
  const platform = getPlatform();

  if (platform === 'ios') {
    $(SELECTOR.photoAddDocumentReceipts).click();
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
    const refSelector =
      platform === 'ios'
        ? '(//XCUIElementTypeOther[@name="Add document for Referral letter"])[6]'
        : SELECTOR.photoAddDocumentForReferralLetter;

    $(refSelector).click();
    photo('select', {
      permit: false,
      photo: image[platform]
    });

    checkIfDisplayedWithScrollDown($(SELECTOR.buttonReviewClaim), 100, 0);
  }

  $(SELECTOR.buttonReviewClaim).click();
}

export function _reviewClaim(submitClaimButton) {
  const platform = getPlatform();
  // NOTE: hack; to prevent previous event (click)
  tap(1, 1);

  checkIfDisplayedWithScrollDown($(SELECTOR.buttonSubmitClaim), 100, 0);

  if (platform === 'ios') {
    $(submitClaimButton.ios).click();
  } else if (platform === 'android') {
    $(submitClaimButton.android).click();
  }
}

export function _termsConditions() {
  $(SELECTOR.buttonAcceptTermsConditions).click();
}

export function _viewSubmittedClaims(viewSubmittedClaim) {
  const platform = getPlatform();

  if (platform === 'ios') {
    wait(viewSubmittedClaim.ios);
    $(viewSubmittedClaim.ios).click();
  } else if (platform === 'android') {
    wait(viewSubmittedClaim.android);
    $(viewSubmittedClaim.android).click();
  }
}
export function _clickPendingClaims(gmpPendingClaim) {
  const platform = getPlatform();
  driver.pause(4000);
  if (platform === 'ios') {
    wait(gmpPendingClaim.ios);
    const elements = driver.$$(gmpPendingClaim.ios);
    $(elements[0].selector).click();
  } else if (platform === 'android') {
    wait(gmpPendingClaim.android);
    $(gmpPendingClaim.android).click();
  }
}

export function _reimbursedAmount(isReimbursedAmountVisible) {
  const platform = getPlatform();
  let isVisible;

  try {
    if (platform === 'ios') {
      isVisible = wait(isReimbursedAmountVisible.ios);
    } else if (platform === 'android') {
      isVisible = wait(isReimbursedAmountVisible.android);
    }
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _checkLoadedImageOnPendingClaims(pendingClaimLoadedImage) {
  const platform = getPlatform();
  let isVisible;
  driver.pause(4000);
  try {
    if (platform === 'ios') {
      isVisible = wait(pendingClaimLoadedImage.ios);
    } else if (platform === 'android') {
      isVisible = wait(pendingClaimLoadedImage.android);
    }
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _getSettlementDate() {
  let isVisible;
  try {
    isVisible = wait(ClaimsScreen.settlementDate);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _receiptImage(receiptImage) {
  const platform = getPlatform();
  let isVisible;

  try {
    if (platform === 'ios') {
      checkIfDisplayedWithScrollDown($(receiptImage.ios), 3, 0);
      isVisible = wait(receiptImage.ios);
    } else if (platform === 'android') {
      checkIfDisplayedWithScrollDown($(receiptImage.android), 3, 0);
      isVisible = wait(receiptImage.android);
    }
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _referralLetter(receiptImage, referralLetter) {
  const platform = getPlatform();
  let isVisible;

  try {
    if (platform === 'ios') {
      checkIfDisplayedWithScrollDown($(receiptImage.ios), 3, 0);
      isVisible = wait(referralLetter.ios);
    } else if (platform === 'android') {
      checkIfDisplayedWithScrollDown($(receiptImage.android), 3, 0);
      isVisible = wait(referralLetter.android);
    }
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _outpatientClaimLabel(outpatientClaimLabel) {
  const platform = getPlatform();
  var data;

  try {
    if (platform === 'ios') {
      data = $(outpatientClaimLabel.ios).getText();
    } else if (platform === 'android') {
      wait(outpatientClaimLabel.android);
      data = $(outpatientClaimLabel.android).getText();
    }
  } catch (error) {
    data = 'Not Found';
  }
  return data;
}
