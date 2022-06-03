import {Then} from "@wdio/cucumber-framework";
import * as chai from "chai";

Then(/^I expect that element "(.*)" contain the text "(.*)"$/, async function(element, text){
    let elementText = await $(element).getText();
    chai.expect(elementText).to.equal(text);
});

Then(/^I expect that checkbox "(.*)" is (checked|unchecked)$/, async function(element, state){
    let actualState = await $(element).isSelected();
    if(state === 'checked'){
        chai.expect(actualState).to.be.true;
    }
    else if(state === 'unchecked'){
        chai.expect(actualState).to.be.false;
    }
});

Then(/^I expect that the page title is "(.*)"$/, async function(title){
    let pageTitle = await browser.getTitle();
    chai.expect(pageTitle).to.equal(title);
});

Then(/^I expect that (alert) is open$/, async function(alertType){
    chai.expect(await browser.isAlertOpen()).to.be.true;
});

Then(/^I expect that (alert) text is "(.*)"$/, async function(alertType, text){
    chai.expect(await browser.getAlertText()).to.equal(text);
});
