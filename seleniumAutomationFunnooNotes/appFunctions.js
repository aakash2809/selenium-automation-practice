const { Builder, By, Key, until } = require('selenium-webdriver');
require("chromedriver");
var fs = require('fs');


class FundooNotes {

    getDriver = async () => {
        return await new Builder().forBrowser('chrome').build();
    };

    fundooRegister = async () => {
        let driver = await this.getDriver();
        try {
            await driver.get('http://localhost:8081/register');
            driver.getTitle().then(function (title) {
                console.log(title);
            });
            await driver.manage().window().maximize();
            await driver.findElement(By.id('first-name')).sendKeys('Hritik');
            await driver.findElement(By.id("last-name")).sendKeys('Patil');
            await driver.findElement(By.id("email")).sendKeys('patilhritik@gmail.com');
            await driver.findElement(By.id("password")).sendKeys('Hritik@32');
            await driver.findElement(By.id("cpassword")).sendKeys('Hritik@32');
            await (await driver.findElement(By.id("register"))).click();
            await driver.sleep(10000);
        }
        catch (error) {
            console.log("caught error", error);
        } finally {
            await driver.quit();
        }
    }

    switchRegisterToLoginPage = async () => {
        let driver = await this.getDriver();
        try {
            await driver.get('http://localhost:8081/register');
            await driver.manage().window().maximize();
            await driver.sleep(1000);
            await (await driver.findElement(By.id("move-to-login"))).click();
            await driver.sleep(10000);
        }
        catch (error) {
            console.log("caught error", error);
        } finally {
            await driver.quit();
        }
    }

    fundooLogin = async () => {
        let driver = await this.getDriver();
        try {
            await driver.get('http://localhost:8081/');
            await driver.manage().window().maximize();
            await driver.findElement(By.id('email')).sendKeys('aakashrajak2809@gmail.com');
            await driver.findElement(By.id("password")).sendKeys('System123#');
            await (await driver.findElement(By.id("login"))).click();
            await driver.sleep(10000);

        }
        catch (error) {
            console.log("caught error", error);
            driver.takeScreenshot().then(function (data) {
                fs.writeFileSync('img.png', data, 'base64');
            });
        } finally {
            await driver.quit();
        }
    }

    switchLoginToRegisterPage = async () => {
        let driver = await this.getDriver();
        try {
            await driver.get('http://localhost:8081/');
            await driver.manage().window().maximize();
            await (await driver.findElement(By.id("move-to-register"))).click();
            await driver.sleep(10000);
        }
        catch (error) {
            console.log("caught error", error);
            driver.takeScreenshot().then(function (data) {
                fs.writeFileSync('img.png', data, 'base64');
            });
        } finally {
            await driver.quit();
        }
    }

    switchLoginToForgotPasswordPage = async () => {
        let driver = await this.getDriver();
        try {
            await driver.get('http://localhost:8081/');
            await driver.manage().window().maximize();
            await (await driver.findElement(By.id("move-to-forgotPassword"))).click();
            await driver.sleep(10000);
        }
        catch (error) {
            console.log("caught error", error);
            driver.takeScreenshot().then(function (data) {
                fs.writeFileSync('img.png', data, 'base64');
            });
        } finally {
            await driver.quit();
        }
    }


    forgotPassword = async () => {
        let driver = await this.getDriver();
        try {
            await driver.get('http://localhost:8081/forgotPassword');
            await driver.manage().window().maximize();
            await (await driver.findElement(By.id("email"))).sendKeys('aakashrajak2809@gmail.com');
            await (await driver.findElement(By.id("send-mail")));
            await driver.sleep(10000);
        }
        catch (error) {
            console.log("caught error", error);
            driver.takeScreenshot().then(function (data) {
                fs.writeFileSync('img.png', data, 'base64');
            });
        } finally {
            await driver.quit();
        }
    }

    dashboardCreateNote = async () => {
        let driver = await this.getDriver();
        try {
            await driver.get('http://localhost:8081/dashboard');
            await driver.manage().window().maximize();
            await driver.findElement(By.id('noteCard')).click();
            await driver.findElement(By.name("note-title")).sendKeys('iphone');
            await driver.findElement(By.name("note-description")).sendKeys('got in gift');
            await (await driver.findElement(By.id("close-card"))).click();
            await driver.sleep(10000);
        }
        catch (error) {
            console.log("caught error", error);
        } finally {
            await driver.quit();
        }
    }

    clickOnsideNavNotes = async () => {
        let driver = await this.getDriver();
        try {
            await driver.get('http://localhost:8081/dashboard');
            await driver.manage().window().maximize();
            await driver.findElement(By.id('side-nav-option')).click();
            await driver.sleep(10000);
        }
        catch (error) {
            driver.takeScreenshot().then(function (data) {
                fs.writeFileSync('img.png', data, 'base64');
            });
        } finally {
            await driver.quit();
        }
    }
}

module.exports = new FundooNotes();