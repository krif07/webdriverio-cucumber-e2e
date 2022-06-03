import {When} from "@wdio/cucumber-framework";

When(/^I wait on the element "(.*)" to be displayed$/, async function(element){
    await $(element).waitForDisplayed();
});

When(/^I click on the element "(.*)"$/, async function(element){
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

When(/^I select the (text|value|index) "(.*)" from dropdown "(.*)"$/, async function(type, value, element){
    if(type==='text') {
        await $(element).selectByVisibleText(value);
    }
    else if(type==='value'){
        await $(element).selectByAttribute("value", value)
    }
    else if(type==='index'){
        await $(element).selectByIndex(value)
    }
});

When(/^I (check|uncheck) the checkbox "(.*)"$/, async function(checkUncheck, element){
    if(checkUncheck === 'check' && !(await $(element).isSelected())){
        await $(element).click();
    }
    else if(checkUncheck === 'uncheck' && await $(element).isSelected()){
        await $(element).click();
    }
});

When(/^I (check|uncheck) all the checkboxes "(.*)"$/, async function(checkUncheck, elements){
    let arrElements = await $$(elements);
    for(let i=0; i<arrElements.length; i++){
        let element = arrElements[i];
        if(checkUncheck === 'check' && !(await $(element).isSelected())){
            await element.click();
        }
        else if(checkUncheck === 'uncheck' && await $(element).isSelected()){
            await element.click();
        }
    }
});
