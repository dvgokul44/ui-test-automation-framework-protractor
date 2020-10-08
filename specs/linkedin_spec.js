var linkedInHome = require('../pageobjects/linkedinhome.po.js'),
    linkedInFeed = require('../pageobjects/linkedinfeed.po.js');

describe('Access LinkedIn and search Appveen', function(){
    it ('should login to LinkedIn', function() {
        var homepage = new linkedInHome();

        homepage.doLogin();
        homepage.gotoHomePage();        
    });
    it('should go to feeds and verify user', function(){
        var feedpage = new linkedInFeed();
        expect(feedpage.getProfileName()).toEqual('Danush Viswa Gokul');

    })

})