import {When} from "@wdio/cucumber-framework";

When(/^I wait on the element "(.*)" to be displayed$/, async function(element){
    await $(element).waitForDisplayed();
});

When(/^I click on the element (.*)$/, async function(element){
    await $(element).click();
});

When(/^I set the value "(.*)" to the element "(.*)"$/, async function(value, element){
    await $(element).setValue(value);
});

When(/^I scroll to the element "(.*)"$/, async function(element){
    await $(element).scrollIntoView();
});

When(/^I type the value "(.*)" to the element "(.*)"$/, async function(value, element){
    await $(element).click();
    for(let i=0; i<value.length; i++ ){
        let charValue = value.charAt(i);
        await browser.pause(100);
        await browser.keys(charValue);
    }
});
