var  data = require("../testdata/testdata.json");
var LinkedInHomePage = function (){

    var signInButton = element(by.css('.nav__button-secondary')),
        userName = element(by.css('#username')),
        passWord = element(by.css('#password')),
        loginButton = element(by.css("button[type='submit']"));

    this.doLogin = function(){
        browser.ignoreSynchronization = true
        browser.get('https://www.linkedin.com/');
        signInButton.click();
        userName.sendKeys(data.username);
        passWord.sendKeys(data.password);
        loginButton.click();
    }

    this.gotoHomePage = function(){
        browser.navigate('https://www.linkedin.com/feeds');
    }


}

module.exports = LinkedInHomePage