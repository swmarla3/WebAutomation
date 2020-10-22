
describe('AppUsers Test cases',function(){
    //Sunnyvale commmunity Services (Can write multiple lines to click on other serivces to test)
    it('click on services',function(){
        browser.get('https://strappd.app/#/charity/Shelter')
        element(by.css('[ng-click="detail($event,item.id,$index)"]')).click();
        //browser.sleep(10000)

});
    it('Mark favourite and verify in favorites',function(){
        element(by.css('[ng-click="favorite()"]')).click();//mark favourite
        element(by.css('[ng-click="$buttonTapped(button, $event)"]')).click(); // click ok
        element(by.css('[ng-click="myGoBack()"]')).click();//go back
        element(by.css('[ng-click="refreshNumber()"]')).click(); //Click on options to check favorites
        var fav = element(by.className('icon ion-android-star'));
        fav.click();
       // browser.sleep(10000)
    });
    // Community services agency
    it('Verify the marked favorite',function(){
        var fav0 = element(by.id('favorite-0'));
        fav0.click();
        var verifyFav = element(by.className('ng-binding'))
        expect(verifyFav.getText()).toBe('Community Services Agency');
        browser.sleep(10000)
        
});
});

