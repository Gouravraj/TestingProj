import {
  _getStarted,
  _patientDetails,
  _claimDetails,
  _addDocuments,
  _reviewClaim,
  _termsConditions
} from './internal/_claims';
import { details, detailsRefer, receiptAmount } from '../data/claims.data';
import { screen } from '../helpers/api';
import navi from '../helpers/navi';

export function makeClaim() {
  const { type, diagnosis } = details;

  _getStarted();

  navi('Patient Details', _patientDetails);
  navi('Claim Details', () => _claimDetails(type, diagnosis, receiptAmount));
  navi('Add Documents', _addDocuments);
  navi('Review Claim', _reviewClaim);
  navi('Terms & Conditions', _termsConditions);

  return screen('Claim submitted');
}

export function makeClaimWithRef() {
  const { type, diagnosis } = detailsRefer;

  _getStarted();

  navi('Patient Details', _patientDetails);
  navi('Claim Details', () => _claimDetails(type, diagnosis, receiptAmount));
  navi('Add Documents', () => _addDocuments(true));
  navi('Review Claim', _reviewClaim);
  navi('Terms & Conditions', _termsConditions);

  return screen('Claim submitted');
}

export function makeClaimWithDep() {
  const { type, diagnosis } = details;

  _getStarted();

  navi('Patient Details', () => _patientDetails(true));
  navi('Claim Details', () => _claimDetails(type, diagnosis, receiptAmount));
  navi('Add Documents', _addDocuments);
  navi('Review Claim', _reviewClaim);
  navi('Terms & Conditions', _termsConditions);

  return screen('Claim submitted');
}

export function makeClaimWithContact() {
  const { type, diagnosis } = details;

  _getStarted();

  navi('Patient Details', () => _patientDetails(false, true));
  navi('Claim Details', () => _claimDetails(type, diagnosis, receiptAmount));
  navi('Add Documents', _addDocuments);
  navi('Review Claim', _reviewClaim);
  navi('Terms & Conditions', _termsConditions);

  return screen('Claim submitted');
}
