describe('Claims', () => {
  describe('Navigation menu', () => {
    it('should able to press `Make a claim` button', () => {
      // NOTE: assert
      // - `Patient Details` title after press the botton
    });
  });

  describe('View: Patient Details', () => {
    it('should not be blank `Patient name` field', () => {
      // NOTE: assert
      // - Make sure data is loaded
    });

    it('should able to press `Add Claim Details` button', () => {
      // NOTE: assert
      // - `Claim Details` title after press the botton
    });
  });

  describe('View: Claims Details', () => {
    // TODO:
    // - currently, we use only `Genetal Medical Pratitioner`, `Abscess`

    it('should not able to press `Add Documents` button', () => {
      // NOTE: assert
      // - before input something
    });

    it('should not able to click Diagnosis', () => {
      // NOTE: assert
      // - before fill `Consultation type`
    });

    it('should not able to input inproper date', () => {
      // TODO: will check how to test with date field
    });

    it('should able to press `Add Documents` button', () => {
      // NOTE: assert
      // - do not press, only check available to press
    });

    it('should not able to press `Add Documents` with checked but without input', () => {
      // NOTE: assert
      // -
    });

    it('should able to press `Add Documents` button', () => {
      // NOTE: assert
      // `Add Documents` title
    });
  });

  describe('View: Add Documents', () => {
    it('should not able to press `Review Claim` button', () => {
      // NOTE: assert
      // - before upload any document
    });

    it('should able to upload thier pictures', () => {
      // NOTE: assert
      // - after click `+` button, native upload form come (upload API)
      // maximum documents => 5 (try 5 times, try 5 more times to fail)
    });

    it('should able to press `Review Claim` button', () => {
      // NOTE: assert
      // - after uploading document
    });
  });

  describe('View: Review claim', () => {
    it('should able to press `Submit Claim` button', () => {
      // NOTE: assert
      // - `Terms & Conditions` title after press the botton
    });
  });

  describe('View: Terms & Conditions', () => {
    it('should able to see "Submiting your claim..." message', () => {
      // NOTE: assert
      // - after click 'Accept Terms & Conditions', loading view will come up with message
      // - maximum timeout => 20 seconds
    });
  });

  describe('View: Claim submitted', () => {
    it('should able to see list of submitted claims', () => {
      // NOTE: assert
      // - after press 'View Submitted Claims' button, go back to first Claims view
    });

    it('should able to create another claim', () => {
      // NOTE: assert
      // - after press 'Make Another Claim' button, go back to `Patient Details` view
    });
  });
});
