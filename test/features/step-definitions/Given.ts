import {Given} from "@wdio/cucumber-framework";

Given(/^I open the page "(.*)"$/, async function(url){
    await browser.url(url);
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000});
    await browser.maximizeWindow();
});

Given(/^I open the web page$/, async function(url){
    await browser.url("/");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000});
    await browser.maximizeWindow();
});

