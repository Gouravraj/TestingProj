import file from 'fs';
import path from 'path';
import CensusPage from '../pageObjects/census.page';

export function downloadEmployeeCensusTemplate() {
  CensusPage.downloadEmployeeCensusTemplateLink().click();
}

export function isEmpCensusDownloaded() {
  browser.pause(5000);
  return file.existsSync(path.resolve('./Employee.xlsx'));
}

export function uploadEmployeeCensusFile() {}

export function isEmpCensusUploaded() {}
