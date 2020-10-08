const LinkedInHomePage = require("./linkedinhome.po");

var LinkedInFeedPage = function(){
    var profileName = element(by.css("div[data-control-name='identity_welcome_message']")),
        searchBox = element(by.css("input[aria-label='Search']"));

    this.getProfileName = function(){
        return profileName.getText();
    }

}

module.exports = LinkedInFeedPage