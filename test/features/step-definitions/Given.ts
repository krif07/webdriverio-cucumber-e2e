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
    this.appId = "SauceDemoAppId_001";
});

Given(/^I check the sauce demo login page with different users$/, async function(dataTable){
    console.log(`>>>>>>>>>>>>>>> dataTable ${JSON.stringify(dataTable)}`)
    let dt = dataTable.hashes();
    console.log(`>>>>>>>>>>>>>>> dt ${JSON.stringify(dt)}`)

    await sauceDemoLoginPage.open();
    for(let i=0; i<dt.length; i++) {
        console.log(`>>>>>>>>>>>>>>> dataTable ${dt[i].userName} - ${dt[i].password}`)
        await sauceDemoLoginPage.submitForm(dt[i].userName, dt[i].password);
        await browser.back();
        await browser.refresh();
    }
});
