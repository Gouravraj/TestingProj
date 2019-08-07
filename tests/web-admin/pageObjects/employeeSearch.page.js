import AppPage from './app.page';
import { DEFAULT_TIMEOUT } from '../../constants';

const SELECTORS = {
  EMPLOYEE_SEARCH_CAPTION: "//p[text()='Welcome to employee search']",
  SEARCH_INPUT_BOX: 'data-testid="employee-id-input"'
};

class EmployeeSearch extends AppPage {
  waitForPageToLoad() {
    return $(SELECTORS.EMPLOYEE_SEARCH_CAPTION).waitForDisplayed(
      DEFAULT_TIMEOUT
    );
  }
}

export default new EmployeeSearch();
