var heroes = [
  {"id": 11, "name": "Mr. Nice"},
  {"id": 12, "name": "Narco"},
  {"id": 13, "name": "Bombasto"},
  {"id": 14, "name": "Celeritas"},
  {"id": 15, "name": "Magneta"},
  {"id": 16, "name": "RubberMan"},
  {"id": 17, "name": "Dynama"},
  {"id": 18, "name": "Dr IQ"},
  {"id": 19, "name": "Magma"},
  {"id": 20, "name": "Tornado"}
];

describe('Select box component', function () {
  
  beforeAll(function () {
    browser.get('');
  });
  
  describe('Verbose select', function () {
    var verboseComponent, firstSelect;
    
    beforeEach(function () {
      verboseComponent = element.all(by.tagName('my-select-verbose')).get(0);
      firstSelect = verboseComponent.all(by.tagName('select')).get(0);
    });
    
    it('should show a selected hero both in the select and outside it', function () {      
      firstSelect.getAttribute('value').then(function (hero) {
        expect(heroes[hero].name).toEqual('Narco');
      });
      
      var heroOnPTag = verboseComponent.all(by.tagName('p')).last().getText();
      expect(heroOnPTag).toContain('Narco');
    });
    
    it('should change the selected hero on option change', function () {      
      firstSelect.all(by.cssContainingText('option', 'Bombasto')).first().click();
      
      firstSelect.getAttribute('value').then(function (hero) {
        expect(heroes[hero].name).toEqual('Bombasto');
      });
      
      var heroOnPTag = verboseComponent.all(by.tagName('p')).last().getText();
      expect(heroOnPTag).toContain('Bombasto');
    });
    
    it('should change select collection on button clicks', function () {
      var reloadButton = verboseComponent.all(by.buttonText('Reload'));
      var clearButton = verboseComponent.all(by.buttonText('Clear'));
      var removeButton = verboseComponent.all(by.buttonText('Remove'));
      
      var options = firstSelect.all(by.tagName('option'));
      expect(options.count()).toBe(10);
      
      removeButton.click().then(function () {
        options = firstSelect.all(by.tagName('option'));
        expect(options.count()).toBe(9);
        
        clearButton.click().then(function () {
          options = firstSelect.all(by.tagName('option'));
          expect(options.count()).toBe(0);
          
          reloadButton.click().then(function () {
            options = firstSelect.all(by.tagName('option'));
          expect(options.count()).toBe(10);
          });
        });
      });
    });
  });
  
  describe('First selector', function () {
    var selectorComponent, firstSelector;
    
    beforeEach(function () {
      selectorComponent = element.all(by.tagName('my-selector-host')).get(0);
      firstSelector = selectorComponent.all(by.tagName('select')).get(0);
    });
    
    it('should show a selected hero both in the select and outside it', function () {      
      firstSelector.getAttribute('value').then(function (hero) {
        expect(heroes[hero].name).toEqual('Mr. Nice');
      });
      
      var firstSelectorOutput = selectorComponent.all(by.tagName('div')).get(0);
      var heroOnPTag = firstSelectorOutput.all(by.tagName('p')).last().getText();
      expect(heroOnPTag).toContain('Mr. Nice');
    });
    
    it('should change the selected hero on option change', function () {      
      firstSelector.all(by.cssContainingText('option', 'Bombasto')).first().click();
      
      firstSelector.getAttribute('value').then(function (hero) {
        expect(heroes[hero].name).toEqual('Bombasto');
      });
      
      var firstSelectorOutput = selectorComponent.all(by.tagName('div')).get(0);
      var heroOnPTag = firstSelectorOutput.all(by.tagName('p')).last().getText();
      expect(heroOnPTag).toContain('Bombasto');
    });
    
    it('should change select collection on button clicks', function () {
      var reloadButton = selectorComponent.all(by.buttonText('Reload'));
      var clearButton = selectorComponent.all(by.buttonText('Clear'));
      var removeButton = selectorComponent.all(by.buttonText('Remove'));
      
      var options = firstSelector.all(by.tagName('option'));
      expect(options.count()).toBe(10);
      
      removeButton.click().then(function () {
        options = firstSelector.all(by.tagName('option'));
        expect(options.count()).toBe(9);
        
        clearButton.click().then(function () {
          options = firstSelector.all(by.tagName('option'));
          expect(options.count()).toBe(0);
          
          reloadButton.click().then(function () {
            options = firstSelector.all(by.tagName('option'));
          expect(options.count()).toBe(10);
          });
        });
      });
    });
  });
  
  describe('Second selector', function () {
    var selectorComponent, secondSelector;
    
    beforeEach(function () {
      selectorComponent = element.all(by.tagName('my-selector-host')).get(0);
      secondSelector = selectorComponent.all(by.tagName('select')).get(1);
    });
    
    it('should show a selected hero both in the select and outside it', function () {      
      secondSelector.getAttribute('value').then(function (hero) {
        expect(heroes[hero].name).toEqual('Narco');
      });
      
      var secondSelectorOutput = selectorComponent.all(by.tagName('div')).get(1);
      var heroOnPTag = secondSelectorOutput.all(by.tagName('p')).last().getText();
      expect(heroOnPTag).toContain('Narco');
    });
    
    it('should change the selected hero on option change', function () {      
      secondSelector.all(by.cssContainingText('option', 'Bombasto')).first().click();
      
      secondSelector.getAttribute('value').then(function (hero) {
        expect(heroes[hero].name).toEqual('Bombasto');
      });
      
      var secondSelectorOutput = selectorComponent.all(by.tagName('div')).get(1);
      var heroOnPTag = secondSelectorOutput.all(by.tagName('p')).last().getText();
      expect(heroOnPTag).toContain('Bombasto');
    });
  });
});