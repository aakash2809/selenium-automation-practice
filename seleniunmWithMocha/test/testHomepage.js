const Homepage = require('../pageObjects/homepage')
const BasePage = require('../pageObjects/basepage')
describe("This is the describe block", function () {
    //this.timeout(50000);
    beforeEach(function () {
        //action performed before test
    })

    afterEach(function () {
        //action performed after test

    })

    it('POM Test', function () {
        //Enter test steps
        var baseurl = "https://www.google.com";
        Homepage.enter_search(baseurl, 'what is selenium automation');
    })
})

