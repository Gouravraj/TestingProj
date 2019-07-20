import {
  _patientDetails,
  _claimDetails,
  _addDocuments,
  _reviewClaim,
  _termsConditions,
  _viewSubmittedClaims,
  _clickPendingClaims,
  _reimbursedAmount,
  _checkLoadedImageOnPendingClaims,
  _getSettlementDate,
  _receiptImage,
  _referralLetter,
  _outpatientClaimLabel,
  _approvedClaims,
  _checkLoadedImageOnApprovedClaims
} from './internal/_claims';
import {
  details,
  detailsRefer,
  receiptAmount,
  image,
  dependent,
  isReimbursedAmountVisible,
  viewSubmittedClaim,
  gmpPendingClaim,
  pendingClaimLoadedImage,
  submitClaimButton,
  detailsSpecialistConsultation,
  specialistConsultationPendingClaim,
  dentalCarePendingClaim,
  detailsDentalCare,
  receiptImage,
  referralLetter,
  outpatientClaimLabel,
  approvedClaim,
  verifyImageLoadedCheck,
  approvedClaimLabel,
  settlementDate,
  approvedClaimGMP
} from '../../data/claims.data';
import { screen } from '../helpers/api';
import navi from '../helpers/navi';

export function makeClaim() {
  const { type, diagnosis } = details;

  navi('Patient Details', () => _patientDetails(dependent));
  navi('Claim Details', () => _claimDetails(type, diagnosis, receiptAmount));
  navi('Add Documents', () => _addDocuments(image));
  navi('Review Claim', _reviewClaim(submitClaimButton));
  navi('Terms & Conditions', _termsConditions);

  return screen('Claim submitted');
}

export function makeClaimSpecialistConsultation() {
  const { type, diagnosis } = detailsSpecialistConsultation;

  navi('Patient Details', () => _patientDetails(dependent));
  navi('Claim Details', () => _claimDetails(type, diagnosis, receiptAmount));
  navi('Add Documents', () => _addDocuments(image, true));
  navi('Review Claim', _reviewClaim(submitClaimButton));
  navi('Terms & Conditions', _termsConditions);

  return screen('Claim submitted');
}

export function makeClaimDentalCare() {
  const { type, diagnosis } = detailsDentalCare;

  navi('Patient Details', () => _patientDetails(dependent));
  navi('Claim Details', () => _claimDetails(type, diagnosis, receiptAmount));
  navi('Add Documents', () => _addDocuments(image));
  navi('Review Claim', _reviewClaim(submitClaimButton));
  navi('Terms & Conditions', _termsConditions);

  return screen('Claim submitted');
}

export function makeClaimWithRef() {
  const { type, diagnosis } = detailsRefer;

  navi('Patient Details', () => _patientDetails(dependent));
  navi('Claim Details', () => _claimDetails(type, diagnosis, receiptAmount));
  navi('Add Documents', () => _addDocuments(image, true));
  navi('Review Claim', _reviewClaim);
  navi('Terms & Conditions', _termsConditions);

  return screen('Claim submitted');
}

export function makeClaimWithDep() {
  const { type, diagnosis } = details;

  navi('Patient Details', () => _patientDetails(dependent, true));
  navi('Claim Details', () => _claimDetails(type, diagnosis, receiptAmount));
  navi('Add Documents', () => _addDocuments(image));
  navi('Review Claim', _reviewClaim);
  navi('Terms & Conditions', _termsConditions);

  return screen('Claim submitted');
}

export function makeClaimWithContact() {
  const { type, diagnosis } = details;

  navi('Patient Details', () => _patientDetails(dependent, false, true));
  navi('Claim Details', () => _claimDetails(type, diagnosis, receiptAmount));
  navi('Add Documents', () => _addDocuments(image));
  navi('Review Claim', _reviewClaim);
  navi('Terms & Conditions', _termsConditions);

  return screen('Claim submitted');
}
export function viewSubmittedClaims() {
  _viewSubmittedClaims(viewSubmittedClaim);
}
export function clickPendingClaims() {
  _clickPendingClaims(gmpPendingClaim);
}

export function reimbursedAmount() {
  return _reimbursedAmount(isReimbursedAmountVisible);
}

export function getSettlementDate() {
  return _getSettlementDate(settlementDate);
}

export function loadedImage() {
  return _checkLoadedImageOnPendingClaims(pendingClaimLoadedImage);
}

export function clickSpecialistConsultationPendingClaims() {
  _clickPendingClaims(specialistConsultationPendingClaim);
}

export function clickDentalCarePendingClaims() {
  _clickPendingClaims(dentalCarePendingClaim);
}

export function receiptImages() {
  return _receiptImage(receiptImage);
}

export function referralLetters() {
  return _referralLetter(receiptImage, referralLetter);
}

export function outpatientClaimLables() {
  return _outpatientClaimLabel(outpatientClaimLabel);
}

export function checkAndClickApprovedClaimsForDentalCare() {
  return _approvedClaims(approvedClaim);
}

export function verifyLoadedImageCheck() {
  return _checkLoadedImageOnApprovedClaims(verifyImageLoadedCheck);
}

export function approvedClaimLables() {
  return _outpatientClaimLabel(approvedClaimLabel);
}

export function checkAndClickApprovedClaimsForGeneralMedicalPractitioner() {
  return _approvedClaims(approvedClaimGMP);
}
