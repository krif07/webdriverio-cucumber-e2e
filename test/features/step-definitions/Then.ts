import {Then} from "@wdio/cucumber-framework";
import * as chai from "chai";
import {TableObject} from "../../page-objects/table.object";

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

Then(/^I expect that element "(.*)" contain (.*) items$/, async function(element, numberOfItems){
    let listOfItems = await $$(element);
    chai.expect(listOfItems.length).to.equal(parseInt(numberOfItems));
});

Then(/^I expect that elements "(.*)" contain value (equal to|greater than|less than) (.*)$/,
    async function(elements, compareType, numberToAssert){
    let listOfElements = await $$(elements);
    let strNumberArr = [];
    for(let i=0; i<listOfElements.length; i++){
        let strNumber = await listOfElements[i].getText();
        strNumberArr.push(strNumber);
    }
    // + : convert string to number
    let numberArr = strNumberArr.map(
        ele => parseFloat(ele.toString().replace('$', ''))
    );
    let validNumbers;
    if(compareType === 'greater than') {
        validNumbers = numberArr.filter(ele => ele > parseFloat(numberToAssert));
    }
    else if(compareType === 'equal to'){
        validNumbers = numberArr.filter(ele => ele == parseFloat(numberToAssert));
    }
    else if(compareType === 'less than'){
        validNumbers = numberArr.filter(ele => ele < parseFloat(numberToAssert));
    }

    console.log(`>>>>>>>>>>> numberArr: ${numberArr}`);
    console.log(`>>>>>>>>>>> validNumbers: ${validNumbers}`);
    console.log(`>>>>>>>>>>> strNumberArr: ${strNumberArr}`);

    chai.expect(validNumbers.length).to.equal(strNumberArr.length);
});

Then(/^I expect each value for the column (.*) of the table "(.*)" is (greater than) (.*)$/,
    async function(column, table, compareType, expectedValue){
    let tableObject = new TableObject(table);
    let result = await tableObject.compareEachColumnElementWithGivenValue(column, compareType, expectedValue);
    chai.expect(result).to.equal(true);
});

Then(/^I expect that the (sum) column (.*) of the table "(.*)" is (.*)$/,
    async function(operation, column, table, expectedResult){
    let tableObject = new TableObject(table);
    let sum = await tableObject.getSumColumn(column);
    chai.expect(sum).to.equal(parseFloat(expectedResult));
});
