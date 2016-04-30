describe('Drag and Drop', function () {

  beforeAll(function () {
    browser.get(''); 
  });

  it('should drag hero to assignment', function () {
    var hero = element(by.xpath('//div[text()="Mr. Nice"]'));
    var assignment = element(by.xpath('//div[text()="Rescue village from dragon(s)"]'));

    browser.actions()
           .dragAndDrop(hero, assignment)
           .perform();    

    assignment = element(by.xpath('//div[@class="assignment ui-droppable selected" and text()="Rescue village from dragon(s)"]'));

    expect(assignment).toBeDefined();
        
  });
});
