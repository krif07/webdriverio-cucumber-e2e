import {When} from "@wdio/cucumber-framework";
import chai from "chai";
import path from "path";

When(/^I wait on the element "(.*)" to be displayed$/, async function(element){
    await $(element).waitForDisplayed();
});

When(/^I click on the element "(.*)"$/, async function(element){
    await $(element).click();
});

When(/^I set the value "(.*)" to the element "(.*)"$/, async function(value, element){
    await $(element).setValue(value);
});

/*When(/^I scroll to the element "(.*)"$/, async function(element){
    await $(element).scrollIntoView();
});*/

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

When(/^I switch the window to "(.*)"$/, async function(windowName){
    let windowHandles = await browser.getWindowHandles();
    for(let i=0; i<windowHandles.length; i++){
        await browser.switchToWindow(windowHandles[i]);
        let currentTitle = await browser.getTitle();
        if(currentTitle === windowName) {
            break;
        }
    }
});

When(/^I (accept|cancel) the (alert) message$/, async function(action, alertType){
    if(action === 'accept') {
        await browser.acceptAlert();
    }
    else{
        await browser.dismissAlert();
    }
});

When(/^I enter the text "(.*)" to the alert$/, async function(text){
    await browser.sendAlertText(text);
});

When(/^I upload a file "(.*)"$/, async function(fileName){
    const filePath = path.join(__dirname, `../../../data/${fileName}`);
    //const filePath = path.join(process.cwd(), `../../../data/${fileName}`);
    const remoteFilePath = await browser.uploadFile(filePath);
    await $('#file-upload').setValue(remoteFilePath);
    await $('#file-submit').click();
});

When(/^I go to the iframe "(.*)"$/, async function(element){
    let iframe = await $(element);
    await browser.switchToFrame(iframe);
});

When(/^I go to the parent frame$/, async function(){
    await browser.switchToParentFrame();
});

When(/^I use the key value "(.*)"$/, async function(keyValue){
    await browser.keys(keyValue);
});

When(/^I use two key values "(.*)" "(.*)"$/, async function(keyValue1, keyValue2){
    await browser.keys([keyValue1, keyValue2]);
});

When(/^I scroll into the element "(.*)" to the top (true|false)$/, async function(element, onTop){
    await $(element).scrollIntoView(onTop);
});
