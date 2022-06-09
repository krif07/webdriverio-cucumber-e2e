import {Given} from "@wdio/cucumber-framework";
import sauceHomePage from '../../page-objects/sauce.home.page';
import logger from "../../helper/logger";
import reporter from "../../helper/reporter";

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
    reporter.addStep(global.testId, "info",`Login into sauce demo with user ${user} and pass ${password}`);
    await sauceHomePage.open("/");
    await sauceHomePage.loginToSauceDemo(user, password);

    this.appId = "SauceDemoAppId_001";
    console.log(`>>>>>>>>>>>>> testId: ${global.testId}`)
});

Given(/^I check the sauce demo login page with different users$/, async function(dataTable){
    logger.info(`${global.testId}: Started to login sauce demo app....`);
    console.log(`>>>>>>>>>>>>>>> testId: ${global.testId}`)
    console.log(`>>>>>>>>>>>>>>> dataTable ${JSON.stringify(dataTable)}`)
    let dt = dataTable.hashes();
    console.log(`>>>>>>>>>>>>>>> dt ${JSON.stringify(dt)}`)

    await sauceHomePage.open("/");
    for(let i=0; i<dt.length; i++) {
        console.log(`>>>>>>>>>>>>>>> dataTable ${dt[i].userName} - ${dt[i].password}`)
        await sauceHomePage.loginToSauceDemo(dt[i].userName, dt[i].password);
        await browser.back();
        await browser.refresh();
    }
});
