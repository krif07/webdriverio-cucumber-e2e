class SauceDemoLoginPage {

    async open(){
        await browser.url("/");
        await browser.setTimeout({ implicit: 15000, pageLoad: 10000});
        await browser.maximizeWindow();
    }

    get userNameInput(){
        return $('#user-name');
    }

    get passwordInput(){
        return $('#password');
    }

    get loginButton(){
        return $('#login-button');
    }

    async submitForm(userName, password){
        await this.userNameInput.setValue(userName);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}
export default new SauceDemoLoginPage();
