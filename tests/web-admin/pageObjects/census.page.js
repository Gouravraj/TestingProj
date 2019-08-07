import AppPage from './app.page';
import { DEFAULT_TIMEOUT } from '../../constants';

const SELECTORS = {
  EMPLOYEE_CENSUS_UPLOAD_BUTTON: 'data-testid=file-upload-input',
  DOWNLOAD_EMPLOYEE_CENSUS_TEMPLATE:
    ".//button[@id='download-employee-template']",
  CENSUS_CAPTION: "//p[text()='Census']"
};

class CensusPage extends AppPage {
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

export default new CensusPage();
