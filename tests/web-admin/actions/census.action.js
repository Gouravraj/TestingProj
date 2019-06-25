import CensusUploadPage from '../pageObjects/censusUploadPage';

function downloadEmployeeCensusTemplate() {
  CensusUploadPage.downloadEmployeeCensusTemplateLink().click();
}

function isCensusDownloaded() {
  return true;
}
module.exports = {
  downloadEmployeeCensusTemplate,
  isCensusDownloaded
};
