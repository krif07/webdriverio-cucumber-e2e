import {Then} from "@wdio/cucumber-framework";
import * as chai from "chai";

Then(/^I expect that element "(.*)" contain the text "(.*)"$/, async function(element, text){
    let elementText = await $(element).getText();
    chai.expect(elementText).to.equal(text);
});
