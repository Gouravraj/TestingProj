import file from 'fs';
import path from 'path';
import CensusUploadPage from '../pageObjects/census.page';

export function downloadEmployeeCensusTemplate() {
  CensusUploadPage.downloadEmployeeCensusTemplateLink().click();
}

export function isEmpCensusDownloaded() {
  browser.pause(5000);
  return file.existsSync(path.resolve('./Employee.xlsx'));
}
