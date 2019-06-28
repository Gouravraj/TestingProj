import CensusUploadPage from '../pageObjects/censusUploadPage';
const file = require('fs');
const path = require('path');

function downloadEmployeeCensusTemplate() {
  CensusUploadPage.downloadEmployeeCensusTemplateLink().click();
}

function isEmpCensusDownloaded() {
  browser.pause(5000);
  return file.existsSync(path.resolve('./Employee.xlsx'));
}
module.exports = {
  downloadEmployeeCensusTemplate,
  isEmpCensusDownloaded
};
