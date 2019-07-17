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
  _getSettlementDate
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
  submitClaimButton
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
  console.log('In the getSettlementDate');
  return _getSettlementDate();
}

export function loadedImage() {
  return _checkLoadedImageOnPendingClaims(pendingClaimLoadedImage);
}
