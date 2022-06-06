import {Given} from "@wdio/cucumber-framework";
import sauceDemoLoginPage from "../../page-objects/sauceDemoLogin.page";

Given(/^I open the page "(.*)"$/, async function(url){
    await browser.url(url);
    //await browser.maximizeWindow();
});

Given(/^I open the web page$/, async function(url){
    await browser.url("/");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000});
    await browser.maximizeWindow();
});

Given(/^I login into sauce demo page with user "(.*)" and password "(.*)"$/, async function(user, password){
    await sauceDemoLoginPage.open();
    await sauceDemoLoginPage.submitForm(user, password);
});
