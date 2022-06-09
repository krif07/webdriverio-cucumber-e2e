import Page from './page';
import * as chai from "chai";
import reporter from "../helper/reporter";

class SauceHomePage extends Page{
    constructor() {
        super();
    }
    /** Page Objects */
    get userNameInput(){
        return $('#user-name');
    }
    get passwordInput(){
        return $('#password');
    }
    get loginButton(){
        return $('#login-button');
    }
    /** Page Methods */
    async enterUserName(userName: string){
        if(!userName) throw Error(`Given user name ${userName} is not valid`);
        userName = userName.trim();
        await this.type(await this.userNameInput, userName);
        reporter.addStep(global.testId, "info", `UserName ${userName} entered successfully`);
    }
    async enterPassword(password: string){
        if(!password) throw Error(`Given password is not valid`);
        password = password.trim();
        await this.type(await this.passwordInput, password);
        reporter.addStep(global.testId, "info", `Password entered successfully`);
    }
    async clickLoginButton(){
        await this.click(await this.loginButton);
        reporter.addStep(global.testId, "info", `Login button clicked`);
    }

    async loginToSauceDemo(userName: string, password: string){
       await this.enterUserName(userName);
       await this.enterPassword(password);
       await this.clickLoginButton();
    }

}
export default new SauceHomePage();
