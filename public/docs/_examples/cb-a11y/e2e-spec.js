describe('A11y Cookbook', function () {

  describe('A11y Cookbook main index', function () {

    beforeAll(function () {
      browser.get('');
    });

    it('should display the main heading', function () {
      testTag('h1', 'Angular 2 A11y Cookbook', 'The main heading should display');
    });

    it('should link to the form control labels section and back', function () {
      testBasicLinkNav(0, 'Accessible form control labels');
    });

    it('should link to the focus management section and back', function () {
      testBasicLinkNav(1, 'Managing focus');
    });


    it('should link to the roles section and back', function () {
      testBasicLinkNav(2, 'Roles for custom component widgets');
    });


    it('should link to the dev tools a11y failed section and back', function () {
      var labelLink = element.all(by.tagName('a')).get(3);
      labelLink.click().then(function () {
        var internalLink = element.all(by.tagName('a')).get(0);
        expect(internalLink.getText()).toBe('Demo with a11y errors', 'The second index page should show');
        internalLink.click().then(function () {
          testTag('h3', 'Demo with a11y errors', 'The correct page should appear');
          var returnLink = element.all(by.tagName('a')).last();
          returnLink.click().then(function () {
            expect(element.all(by.tagName('a')).get(3).getText()).toBe('Developer tools', 'The main index page should appear with original link');
          });
        });
      });
    });

    it('should link to the dev tools a11y passed section and back', function () {
      var labelLink = element.all(by.tagName('a')).get(3);
      labelLink.click().then(function () {
        var internalLink = element.all(by.tagName('a')).get(1);
        expect(internalLink.getText()).toBe('Demo with full a11y features', 'The second index page should show');
        internalLink.click().then(function () {
          testTag('h2', 'Demo with full a11y features', 'The correct page should appear');
          var returnLink = element.all(by.tagName('a')).last();
          returnLink.click().then(function () {
            expect(element.all(by.tagName('a')).get(3).getText()).toBe('Developer tools', 'The main index page should appear with original link');
          });
        });
      });
    });

    function testBasicLinkNav(navIndex, pageLinkText) {
      var labelLink = element.all(by.tagName('a')).get(navIndex);
      labelLink.click().then(function () {
        testTag('h2', pageLinkText, 'The correct page should appear');
        var returnLink = element.all(by.tagName('a')).last();
        returnLink.click().then(function () {
          expect(element.all(by.tagName('a')).get(navIndex).getText()).toBe(pageLinkText, 'The main index page should appear with original link');
        });
      });
    }

  });

  describe('A11y Cookbook control labels', function () {

    beforeAll(function () {
      browser.get('');
      var labelLink = element.all(by.tagName('a')).get(0);
      labelLink.click();
    });

    it('should have the correct page heading', function () {
      expect(element(by.tagName('h2')).getText()).toBe('Accessible form control labels', 'Page heading not correct');
    });

    it('should have the correct sections', function () {
      var headings = element.all(by.tagName('h3'));
      expect(headings.get(0).getText()).toBe('Implicit labeling', 'Implicit labeling section missing');
      expect(headings.get(1).getText()).toBe('Explicit labeling', 'Explicit labeling section missing');
      expect(headings.get(2).getText()).toBe('Hiding labels', 'Hiding labels section missing');
      expect(headings.get(3).getText()).toBe('Labeling custom controls', 'Labeling custom controls section missing');
    });

    it('should have a working implicitly labelled input', function () {
      var testVal = 'Some text';
      var label = element.all(by.tagName('label')).get(0);
      expect(label.getText()).toBe('Type something:', 'Incorrect label text');
      var input = element.all(by.css('label > input')).get(0);
      expect(input.getAttribute('value')).toBe('', 'Incorrect initial input value');
      sendKeys(input, testVal);
      input.getAttribute('value').then(function (value) {
        expect(value).toBe(testVal, 'Incorrect resultant input value');
        testValueDecorator(0, testVal)
      });
    });

    it('should have a working implicitly labelled textarea', function () {
      var testVal = 'Some text';
      var label = element.all(by.tagName('label')).get(1);
      expect(label.getText()).toBe('Type some text:', 'Incorrect label text');
      var textarea = element.all(by.css('label > textarea')).get(0);
      expect(textarea.getAttribute('value')).toBe('', 'Incorrect initial textarea value');
      sendKeys(textarea, testVal);
      textarea.getAttribute('value').then(function (value) {
        expect(value).toBe(testVal, 'Incorrect resultant textarea value');
        testValueDecorator(1, testVal)
      });
    });

    it('should have working implicitly labelled checkboxes', function () {
      var legend = element.all(by.css('fieldset legend')).get(0);
      testText(legend, 'What do you like most about Angular 2?', 'Incorrect legend value');
      var checkBoxLabel1 = element.all(by.css('fieldset')).get(0).all(by.css('label')).get(0);
      testText(checkBoxLabel1, 'Template syntax', 'Wrong template syntax checkbox label');
      var checkBoxLabel2 = element.all(by.css('fieldset')).get(0).all(by.css('label')).get(1);
      testText(checkBoxLabel2, 'Observables', 'Wrong observables checkbox label');
      var checkBoxLabel3 = element.all(by.css('fieldset')).get(0).all(by.css('label')).get(2);
      testText(checkBoxLabel3, 'Components', 'Wrong components checkbox label');
      var checkBoxLabel4 = element.all(by.css('fieldset')).get(0).all(by.css('label')).get(3);
      testText(checkBoxLabel4, 'Forms', 'Wrong forms checkbox label');
      var checkBox1 = element.all(by.css('fieldset')).get(0).all(by.css('input')).get(0);
      testSelected(checkBox1, false, 'Template syntax checkbox should not be selected');
      var checkBox2 = element.all(by.css('fieldset')).get(0).all(by.css('input')).get(1);
      testSelected(checkBox2, true, 'Observables checkbox should be selected');
      var checkBox3 = element.all(by.css('fieldset')).get(0).all(by.css('input')).get(2);
      testSelected(checkBox3, true, 'Components checkbox should be selected');
      var checkBox4 = element.all(by.css('fieldset')).get(0).all(by.css('input')).get(3);
      testSelected(checkBox4, false, 'Forms checkbox should not be selected');
      testValueDecorator(2, '[ "Observables", "Components" ]');
      checkBox2.click().then(function () {
        testValueDecorator(2, '[ "Components" ]');
        checkBox1.click().then(function () {
          testValueDecorator(2, '[ "Components", "Template syntax" ]');
        })
      });
    });

    it('should have working implicitly labelled radiobuttons', function () {
      var legend = element.all(by.css('fieldset legend')).get(1);
      testText(legend, 'Choose your favourite Angular 2 language:', 'Incorrect legend value');
      var radioLabel1 = element.all(by.css('fieldset')).get(1).all(by.css('label')).get(0);
      testText(radioLabel1, 'TypeScript', 'Wrong TypeScript radio label');
      var radioLabel2 = element.all(by.css('fieldset')).get(1).all(by.css('label')).get(1);
      testText(radioLabel2, 'JavaScript', 'Wrong JavaScript radio label');
      var radioLabel3 = element.all(by.css('fieldset')).get(1).all(by.css('label')).get(2);
      testText(radioLabel3, 'ES6', 'Wrong ES6 radio label');
      var radioLabel4 = element.all(by.css('fieldset')).get(1).all(by.css('label')).get(3);
      testText(radioLabel4, 'Dart', 'Wrong Dart radio label');
      var radio1 = element.all(by.css('fieldset')).get(1).all(by.css('input')).get(0);
      testSelected(radio1, true, 'TypeScriptcheckbox should be selected');
      var radio2 = element.all(by.css('fieldset')).get(1).all(by.css('input')).get(1);
      testSelected(radio2, false, 'JavaScript checkbox should not be selected');
      var radio3 = element.all(by.css('fieldset')).get(1).all(by.css('input')).get(2);
      testSelected(radio3, false, 'ES6 checkbox should not be selected');
      var radio4 = element.all(by.css('fieldset')).get(1).all(by.css('input')).get(3);
      testSelected(radio4, false, 'Dart checkbox should not be selected');
      testValueDecorator(3, 'TypeScript');
      radio2.click().then(function () {
        testValueDecorator(3, 'JavaScript');
      });
    });

    it('should have a working implicitly labelled select', function () {
      var label = element.all(by.tagName('label')).get(10);
      label.getText().then(function (labelText) {
        expect(labelText.indexOf('Why are you interested in a11y?') != -1).toBeTruthy('Incorrect label text');
      });
      var select = element.all(by.tagName('select')).get(0);
      select.getAttribute('value').then(function (value) {
        expect(value).toBe('Curiosity', 'Select should have the correct init value');
      });
      testValueDecorator(4, 'Curiosity');
    });

    it('should have a working explicitly labelled input', function () {
      var testVal = 'Some text';
      var label = element.all(by.tagName('label[for="inputexplicit"]')).get(0);
      label.getText().then(function (labelText) {
        expect(labelText).toBe('Label for input:', 'Incorrect label text');
      });
      var input = element.all(by.css('#inputexplicit')).get(0);
      expect(input.getAttribute('value')).toBe('', 'Incorrect initial input value');
      sendKeys(input, testVal);
      input.getAttribute('value').then(function (value) {
        expect(value).toBe(testVal, 'Incorrect resultant input value');
        testValueDecorator(5, testVal)
      });
    });

    it('should have a working input with hidden label', function () {
      var testVal = 'Some text';
      var label = element.all(by.tagName('label.visually-hidden')).get(0);
      label.getText().then(function (labelText) {
        expect(labelText).toBe('Search:', 'Incorrect label text');
      });
      var input = element.all(by.css('#inputsearch')).get(0);
      expect(input.getAttribute('value')).toBe('', 'Incorrect initial input value');
      sendKeys(input, testVal);
      input.getAttribute('value').then(function (value) {
        expect(value).toBe(testVal, 'Incorrect resultant input value');
        testValueDecorator(6, testVal)
      });
    });

    it('should have a working input with aria-label', function () {
      var testVal = 'Some text';
      var input = element.all(by.css('input[aria-label="Filter:"')).get(0);
      expect(input.getAttribute('value')).toBe('', 'Incorrect initial input value');
      sendKeys(input, testVal);
      input.getAttribute('value').then(function (value) {
        expect(value).toBe(testVal, 'Incorrect resultant input value');
        testValueDecorator(7, testVal)
      });
    });

    it('should have a working editable div with label', function () {
      var testVal = 'Some text';
      var label = element.all(by.tagName('div.col-xs-6 label')).get(0);
      label.getText().then(function (labelText) {
        expect(labelText).toBe('Write in this labeled div:', 'Incorrect label text');
      });
      var input = element.all(by.css('div.col-xs-6 div.edit-box')).get(0);
      input.getText().then(function (inputText) {
        expect(inputText).toBe('', 'Incorrect initial input value');
      });
      sendKeys(input, testVal);
      input.getText().then(function (inputText) {
        expect(inputText).toBe(testVal, 'Incorrect resultant input value');
        testValueDecorator(7, testVal);
      });
    });

    it('should have a working wrapped input', function () {
      var testVal = 'Test';
      var label = element.all(by.tagName('div.col-xs-6 label span')).get(0);
      label.getText().then(function (labelText) {
        expect(labelText).toBe('Write in this wrapped input:', 'Incorrect label text');
      });
      var input = element.all(by.css('div.input-group input')).get(0);
      expect(input.getAttribute('value')).toBe('', 'Incorrect initial input value');
      sendKeys(input, testVal).then(function () {
        input.getAttribute('value').then(function (value) {
          expect(value).toBe(testVal, 'Incorrect resultant input value');
        });
      });
    });

  });

  describe('A11y Cookbook managing focus', function () {

    beforeAll(function () {
      browser.get('');
      var labelLink = element.all(by.tagName('a')).get(1);
      labelLink.click();
    });

    it('should have the correct page heading', function () {
      expect(element(by.tagName('h2')).getText()).toBe('Managing focus', 'Page heading not correct');
    });

    it('should have the correct sections', function () {
      var headings = element.all(by.tagName('h3'));
      expect(headings.get(0).getText()).toBe('The focus outline', 'Focus outline section missing');
      expect(headings.get(1).getText()).toBe('Focus flow', 'Focus flow section missing');
      expect(headings.get(2).getText()).toBe('Focusing custom controls', 'Focusing custom controls section missing');
      expect(headings.get(3).getText()).toBe('Internal focus in a component', 'Internal focus controls section missing');
    });

    it('should have the focus outline elements', function () {
      testElementWithText('label', 'Focus me for the standard browser outline:', 'Normal outline input not present');
      testElementWithText('label', 'Focus me for a new and unusual outline:', 'Custom outline input not present');
    });

    it('should have the focus flow elements', function () {
      testElementWithText('label', 'Which city of The USA did you work in:', 'USA input not present');
      testElementWithText('label', 'How many months did you work in The USA:', 'USA months input not present');
      testElementWithText('label', 'Which city of The Netherlands did you work in:', 'The Netherlands input not present');
      testElementWithText('label', 'How many months did you work in The Netherlands:', 'The Netherlands months input not present');
      testElementWithText('label', 'Which city of South Africa did you work in:', 'South Africa input not present');
      testElementWithText('label', 'How many months did you work in South Africa:', 'South Africa months input not present');
      testElementWithText('label', 'Which city of Germany did you work in:', 'Germany input not present');
      testElementWithText('label', 'How many months did you work in Germany:', 'Germany months input not present');
      testElementWithText('label', 'Which city of The UK did you work in:', 'The UK input not present');
      testElementWithText('label', 'How many months did you work in The UK:', 'The UK months input not present');
    });

    it('should have a clickable custom button component', function () {
      element.all(by.tagName('a11y-custom-button')).get(0).click().then(function () {
        testValueDecorator(0, 'Button has been clicked 1 times');
      });
    });

    it('should have an error toggling component', function () {
      var showErrorButton = element(by.css('a11y-error-demo button.btn.btn-primary'));
      showErrorButton.getText().then(function (buttonText) {
        expect(buttonText).toBe('Show error', 'Button text is incorrect')
      });
      var errorBanner = element(by.css('a11y-error-demo div.alert'));
      expect(errorBanner.isDisplayed()).toBeFalsy('Error banner should not be shown initially');
      showErrorButton.click().then(function () {
        expect(errorBanner.isDisplayed()).toBeTruthy('Error banner should be shown when clicked');
      });
      var closeButton = element(by.css('a11y-error-demo button.close'));
      closeButton.click().then(function () {
        expect(errorBanner.isDisplayed()).toBeFalsy('Error banner should not be shown when closed');
      });
    });

  });

  describe('A11y Cookbook roles for custom components', function () {

    beforeAll(function () {
      browser.get('');
      var labelLink = element.all(by.tagName('a')).get(2);
      labelLink.click();
    });

    it('should have the correct page heading', function () {
      expect(element(by.tagName('h2')).getText()).toBe('Roles for custom component widgets', 'Page heading not correct');
    });

    it('should have the correct sections', function () {
      var headings = element.all(by.tagName('h3'));
      expect(headings.get(0).getText()).toBe('Roles in the template', 'Roles in the template section missing');
      expect(headings.get(1).getText()).toBe('Roles of the host element', 'Roles of the host element section missing');
    });

    it('should have a working editable div with label and internal role', function () {
      var testVal = 'Test';
      var label = element.all(by.tagName('div.col-xs-6 label')).get(0);
      label.getText().then(function (labelText) {
        expect(labelText).toBe('I set the role in my template:', 'Incorrect label text');
      });
      var input = element.all(by.css('div[role="textbox"]')).get(0);
      input.getText().then(function (inputText) {
        expect(inputText).toBe('', 'Incorrect initial input value');
      });
      sendKeys(input, testVal).then(function () {
        input.getText().then(function (inputText) {
          expect(inputText).toBe(testVal, 'Incorrect resultant input value');
        });
      });
    });

    it('should have a clickable custom button component with role', function () {
      element.all(by.css('a11y-custom-button[role="button"]')).get(0).click().then(function () {
        testValueDecorator(1, 'Button has been clicked 1 times');
      });
    });

  });

  function testElementWithText(selector, containingText, messageText) {
    var normalOutline = element.all(by.cssContainingText(selector, containingText)).get(0);
    expect(normalOutline.isPresent()).toBeTruthy(messageText);
  }

  function testTag(selector, expectedText, messageText) {
    element(by.css(selector)).getText().then(function (elementText) {
      expect(elementText).toBe(expectedText, messageText);
    });
  }

  function testText(element, valueText, errorText) {
    element.getText().then(function (elementText) {
      expect(elementText).toBe(valueText, errorText);
    });
  }

  function testSelected(element, isSelected, errorText) {
    if (isSelected) {
      element.isSelected().then(function (isSelected) {
        expect(isSelected).toBeTruthy(errorText);
      });
    } else {
      element.isSelected().then(function (isSelected) {
        expect(isSelected).toBeFalsy(errorText);
      });
    }
  }

  function testValueDecorator(index, contentText) {
    element.all(by.css('a11y-value-helper span')).get(index).getText().then(function (valueText) {
      expect(valueText).toBe('Current value: ' + contentText, 'Incorrect value decorator value');
    });
  }

});
