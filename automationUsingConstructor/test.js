
HomePage.navigateToTheTestRoom();
var adoptionPage = HomePage.clickOnAdotionLink();
adoptionPage.navigateToTheTestRoom();

/* const { webdriver, Builder, By, Key, until } = require('selenium-webdriver'),
    test = require('selenium-webdriver/testing'),
// assert = require('assert');
var HomePage

test.describe('testHomePage', function () {
    test.before(function* () {
        HomePage = require('./home')
        HomePage.navigateToTheTestRoom();
    });

    test.it('whenCorrectUrlgiven_ShouldReturn_pagetitleOfWebPage', function () {
        //driver.findElement(By.xpath('/html/body/div[2]/div[1]')).click();
        driver.getTitle().then(function (title) {
            console.log("pageTitle : ", title);
        });
    });

    test.after(() => driver.quit());
}); */