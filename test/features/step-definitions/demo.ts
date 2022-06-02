import {Given, When, Then} from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is open$/, async function(){
    browser.url("https://www.google.com");
});

When(/^Search with (.*)$/, async function(searchItem){
    console.log(`Search item ${searchItem}`);
    let element = await $('[name=q]');
    await element.setValue(searchItem);
    await browser.keys("Enter");
});

When(/^Click on the first search result*/, async function(){
   let element = await $('//h3/..'); // //h3/parent::a
   await element.click();
});

Then(/^Url should match (.*)*/, async function(expectedUrl){
    let url = await browser.getUrl();
    await chai.expect(url).to.equal(expectedUrl);
});
