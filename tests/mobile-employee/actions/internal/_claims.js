import {
  select,
  date,
  kbd,
  photo,
  tap,
  platform as getPlatform,
  checkIfDisplayedWithScrollDown,
  checkIfDisplayedWithScrollUp
} from '../../helpers/api';
import txt, { txtTo } from '../../helpers/text';
import { CLAIMS as SELECTOR } from '../../selectors';
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

  $(submitClaimButton[platform]).click();
}

export function _termsConditions() {
  $(SELECTOR.buttonAcceptTermsConditions).click();
}

export function _viewSubmittedClaims(viewSubmittedClaim) {
  const platform = getPlatform();

  wait(viewSubmittedClaim[platform]);
  $(viewSubmittedClaim[platform]).click();
}

export function _clickPendingClaims(gmpPendingClaim) {
  const platform = getPlatform();
  driver.pause(4000);
  checkIfDisplayedWithScrollDown($(gmpPendingClaim[platform]), 100, 0);
  $(gmpPendingClaim[platform]).click();
}

export function _reimbursedAmount(isReimbursedAmountVisible) {
  const platform = getPlatform();
  let isVisible;

  try {
    isVisible = wait(isReimbursedAmountVisible[platform]);
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
    isVisible = wait(pendingClaimLoadedImage[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _getSettlementDate(settlementDate) {
  const platform = getPlatform();
  let isVisible;
  try {
    if (platform === 'ios') {
      isVisible = wait(settlementDate.ios);
    } else if (platform === 'android') {
      isVisible = wait(settlementDate.android);
    }
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _receiptImage(receiptImage) {
  const platform = getPlatform();
  let isVisible;

  try {
    checkIfDisplayedWithScrollDown($(receiptImage[platform]), 7, 0);
    isVisible = wait(receiptImage[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _referralLetter(referralLetter) {
  const platform = getPlatform();
  let isVisible;

  try {
    checkIfDisplayedWithScrollDown($(referralLetter[platform]), 7, 0);
    isVisible = wait(referralLetter[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _outpatientClaimLabel(outpatientClaimLabel) {
  const platform = getPlatform();
  var data;

  try {
    data = $(outpatientClaimLabel[platform]).getText();
  } catch (error) {
    data = 'Not Found';
  }
  return data;
}

export function _approvedClaims(approvedClaim) {
  const platform = getPlatform();
  let isVisible;

  try {
    checkIfDisplayedWithScrollDown($(approvedClaim[platform]), 100, 0);
    isVisible = wait(approvedClaim[platform]);
    if (isVisible) {
      $(approvedClaim[platform]).click();
    }
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _checkLoadedImageOnApprovedClaims(verifyImageLoadedCheck) {
  const platform = getPlatform();
  let isVisible;
  driver.pause(4000);
  try {
    isVisible = wait(verifyImageLoadedCheck[platform]);
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}

export function _backButton(backButton) {
  const platform = getPlatform();

  try {
    wait(backButton[platform]);
    $(backButton[platform]).click();
  } catch (error) {
    console.log('Error is ', error);
  }
}

export function _startFromIntial(startInitialPendingText) {
  const platform = getPlatform();

  try {
    checkIfDisplayedWithScrollUp($(startInitialPendingText[platform]), 100, 0);
    wait(startInitialPendingText[platform]);
  } catch (error) {
    console.log('Error is ', error);
  }
}

export function _rejectedClaims(rejectedClaim) {
  const platform = getPlatform();
  let isVisible;

  try {
    checkIfDisplayedWithScrollDown($(rejectedClaim[platform]), 100, 0);
    isVisible = wait(rejectedClaim[platform]);
    if (isVisible) {
      $(rejectedClaim[platform]).click();
    }
  } catch (error) {
    isVisible = false;
  }
  return isVisible;
}
