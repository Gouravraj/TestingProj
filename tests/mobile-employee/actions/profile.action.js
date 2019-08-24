import {
  isNavigationBarVisible,
  navigateToProfileScreen
} from '../actions/navigator.action';
import { swipe, scroll, wait } from '../helpers/api';
import txt from '../helpers/text';

export function formsAndDocuments(
  platform = driver.capabilities.platformName.toLowerCase()
) {
  navigateToProfileScreen();

  //$('~Useful Documents').isDisplayed();

  if (platform === 'ios') {
    $('~Useful documents ').click();
    $(
      '~ HSBC HealthPlus – Outpatient Benefit / Wellness Claims Claim Form'
    ).click();

    // add share script here
    //wait for share button
    wait('(//XCUIElementTypeOther[@name=""])[2]');
    //Click on Share button
    $('(//XCUIElementTypeOther[@name=""])[2]').click(); // 

    //wait for "Cancle" button
    wait('~Cancel');
    //Click on "Cancle" button
    $('~Cancel').click();

    swipe({ direction: 'up' }, () => {
      $('~header-back').click();
    });

    wait('~ HSBC HealthPlus - Maternity Subsidy Claim Form');
    $('~ HSBC HealthPlus - Maternity Subsidy Claim Form').click();

    // add share script here
    //Wait for share button
    wait('(//XCUIElementTypeOther[@name=""])[2]');
    //Click on Share button
    $('(//XCUIElementTypeOther[@name=""])[2]').click();

    //wait for "Cancle" button
    wait('~Cancel');
    //Click on "Cancle" button
    $('~Cancel').click();

    swipe({ direction: 'up' }, () => {
      $('~header-back').click();
    });

    wait('~ HSBC HealthPlus - Hospitalisation & Surgical Claim Form');
    $('~ HSBC HealthPlus - Hospitalisation & Surgical Claim Form').click();

    // add share script here
    //Wait for share button
    wait('(//XCUIElementTypeOther[@name=""])[2]');
    // Click on Share Button
    $('(//XCUIElementTypeOther[@name=""])[2]').click();

    //wait for "Cancle" button
    wait('~Cancel');
    //Click on "Cancle" button
    $('~Cancel').click();

    swipe({ direction: 'up' }, () => {
      $('~header-back').click();
    });
    return $('~Useful Documents').isDisplayed();
  } else if (platform === 'android') {
    scroll({ text: 'Useful documents' }, () => {
      $(txt('Useful documents')).click();
    });

    const usefulDocs =
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.TextView';

    // click the outpatient claim form
    $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'
    ).click();

    // wait for the pdf to load
    wait(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.RelativeLayout'
    );

    // add share script here
    // Click on Share Button
    $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'
    ).click();
    // Wait for gmail to appear on Layout
    wait(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]'
    );
    // Select Layout 1 (Gmail)
    $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout[3]'
    );
    // wait to appear Compose gmailbox
    wait(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.MultiAutoCompleteTextView'
    );
    // Enter email in to:field
    $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.MultiAutoCompleteTextView'
    ).setValue('abc@gmail.com');
    // Click on send
    $('~Send').click();

    //wait for Pdf page
    wait(
      '//android.widget.Button[@content-desc="Go back"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'
    );

    // scroll down the pdf, then click "X" close link afterwards
    scroll({ text: '2of 2' }, () => {
      $(
        '//android.widget.Button[@content-desc="Go back"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'
      ).click();
    });

    // click the dental claim form
    $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'
    ).click();

    // wait for the pdf to load
    wait(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.RelativeLayout'
    );

    // add share script here
    // Click on Share Button
    $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'
    ).click();
    // Wait for gmail to appear on Layout
    wait(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout[3]'
    );
    // Select Layout(Gmail)
    $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout[3]'
    );
    // wait to appear Compose gmailbox
    wait(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.MultiAutoCompleteTextView'
    );
    // Enter email in to:field
    $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.MultiAutoCompleteTextView'
    ).setValue('abc@gmail.com');
    //Click on send
    $('~Send').click();

    // scroll down the pdf, then click "X" close link afterwards
    scroll({ text: '2of 2' }, () => {
      $(
        '//android.widget.Button[@content-desc="Go back"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'
      ).click();
    });

    // click the hospitalisation & surgical claim form
    $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'
    ).click();

    // wait for the pdf to load
    wait(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.RelativeLayout'
    );

    // add share script here
    // Click on Share Button
    $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'
    ).click();
    // Wait for gmail to appear on Layout
    wait(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout[3]'
    );
    // Select Layout(Gmail)
    $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout[3]'
    );
    // wait to appear Compose gmailbox
    wait(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.MultiAutoCompleteTextView'
    );
    // Enter email in to:field
    $(
      '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.MultiAutoCompleteTextView'
    ).setValue('abc@gmail.com');
    //Click on send
    $('~Send').click();

    // scroll down the pdf, then click "X" close link afterwards
    scroll({ text: '2of 2' }, () => {
      $(
        '//android.widget.Button[@content-desc="Go back"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'
      ).click();
    });
    return usefulDocs;
  }
}

export function eHealthCard(
  platform = driver.capabilities.platformName.toLowerCase()
) {
  isNavigationBarVisible();
  navigateToProfileScreen();

  if (platform === 'ios') {
    $('~e-Health card ').click();
    //  wait('~William Brown');
    wait('~William Brown');
    $('~07-08-2019').isDisplayed(); // card details (date)
    $('~William Brown').isDisplayed(); // card details (name)
    $('~0000126').isDisplayed(); // card details (membership no)
    $('~GP: $20').isDisplayed(); // card details (gp)
    $('~SP: $20').isDisplayed(); // card details (sp)
    $('~PHY: $20').isDisplayed(); // card details (phy)

    // add qr code here

    // add carousell script here

    return $('~e-Health Card').isDisplayed();
  } else if (platform === 'android') {
    $(txt('e-Health card')).click();
    wait(txt('William Brown'));

    $(txt('07-08-2019'));
    $(txt('William Brown'));
    $(txt('0000126'));
    $(txt('GP: $20'));
    $(txt('SP: $20'));
    $(txt('PHY: $20'));

    // add qr code here

    // add carousell script here

    return $(txt('e-Health Card'));
  }
}

export function myBenefits(
  platform = driver.capabilities.platformName.toLowerCase()
) {
  isNavigationBarVisible();
  navigateToProfileScreen();

  if (platform === 'ios') {
    $('~My benefits ').click();
    wait('~View for, current selection is William Brown');

    // Employee details
    $('~View for, current selection is William Brown').isDisplayed();
    // $('~William Brown').isDisplayed();
    $('~Tier III(Employee) - Employee and dependant').isDisplayed();

    $('~Outpatient').isDisplayed();
    $('~Hospital and Surgical').isDisplayed();
    $('~Supplemental major medical').isDisplayed();
    $('~Maternity subsidy').isDisplayed();
    $('~Wellness flexible spending amount').isDisplayed();

    swipe({ direction: 'up' }, () => {
      $('~10288801GH').isDisplayed(); // policy number
      $('~AXA General Insurance Hong Kong Limited').isDisplayed(); // insurer
      $('~01 Jan 2019 - 31 Dec 2019').isDisplayed(); // effective period
    });

    // add dependant details here

    return $('~My benefits').isDisplayed();
  } else if (platform === 'android') {
    $(txt('My benefits')).click();
    wait(txt('View for'));

    // Employee details
    $(txt('William Brown'));
    $(txt('Tier III(Employee) - Employee and dependant'));

    $(txt('Outpatient'));
    $(txt('Hospital and Surgical'));
    $(txt('Supplemental major medical'));
    $(txt('Maternity subsidy'));
    $(txt('Wellness flexible spending amount'));

    scroll({ text: 'Effective period' }, () => {
      $(txt('10288801GH')); // policy number
      $(txt('AXA General Insurance Hong Kong Limited')); // insurer
      $(txt('01 Jan 2019 - 31 Dec 2019')); // effective period
    });

    // add dependant details here

    return $(txt('My benefits'));
  }
}
