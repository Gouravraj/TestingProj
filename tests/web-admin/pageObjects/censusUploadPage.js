import Page from './page';
import { DEFAULT_TIMEOUT } from '../../constants';

const SELECTORS = {
  EMPLOYEE_CENSUS_UPLOAD_BUTTON: 'data-testid=file-upload-input',
  DOWNLOAD_EMPLOYEE_CENSUS_TEMPLATE:
    ".//button[@id='download-employee-template']",
  CENSUS_CAPTION: "//span[text()='Census']"
};

class CensusUploadPage extends Page {
  waitForPageToLoad() {
    return $(SELECTORS.CENSUS_CAPTION).waitForDisplayed(DEFAULT_TIMEOUT);
  }
  downloadEmployeeCensusTemplateLink() {
    return $(SELECTORS.DOWNLOAD_EMPLOYEE_CENSUS_TEMPLATE);
  }
  employeeCensusUploadButton() {
    return $(SELECTORS.DOWNLOAD_EMPLOYEE_CENSUS_TEMPLATE);
  }
  censusCaption() {
    return $(SELECTORS.CENSUS_CAPTION);
  }
}

export default new CensusUploadPage();
