import {
  _getStarted,
  _patientDetails,
  _claimDetails,
  _addDocuments,
  _reviewClaim,
  _termsConditions
} from './internal/_claims';
import { details, detailsRefer, receiptAmount } from '../data/claims.data';
import { screen, navi } from '../helpers/api';

export function makeClaim() {
  _getStarted();

  navi('Patient Details', () => _patientDetails());
  navi('Claim Details', () =>
    _claimDetails(details.type, details.diagnosis, receiptAmount)
  );
  navi('Add Documents', () => _addDocuments());
  navi('Review Claim', () => _reviewClaim());
  navi('Terms & Conditions', () => _termsConditions());

  return screen('Claim submitted');
}

export function makeClaimWithRef() {
  _getStarted();

  navi('Patient Details', () => _patientDetails());
  navi('Claim Details', () =>
    _claimDetails(detailsRefer.type, detailsRefer.diagnosis, receiptAmount)
  );
  navi('Add Documents', () => _addDocuments(true));
  navi('Review Claim', () => _reviewClaim());
  navi('Terms & Conditions', () => _termsConditions());

  return screen('Claim submitted');
}

export function makeClaimWithDep() {
  _getStarted();

  navi('Patient Details', () => _patientDetails(true));
  navi('Claim Details', () =>
    _claimDetails(details.type, details.diagnosis, receiptAmount)
  );
  navi('Add Documents', () => _addDocuments());
  navi('Review Claim', () => _reviewClaim());
  navi('Terms & Conditions', () => _termsConditions());

  return screen('Claim submitted');
}

export function makeClaimWithContact() {
  _getStarted();

  navi('Patient Details', () => _patientDetails(false, true));
  navi('Claim Details', () =>
    _claimDetails(details.type, details.diagnosis, receiptAmount)
  );
  navi('Add Documents', () => _addDocuments());
  navi('Review Claim', () => _reviewClaim());
  navi('Terms & Conditions', () => _termsConditions());

  return screen('Claim submitted');
}
