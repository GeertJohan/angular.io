describe('Rating compomnent', function () {
  
  beforeAll(function () {
    browser.get('');
  });
  
  it('should show 5 stars for windstorm', function () {
    var windstormRating = element.all(by.tagName('my-hero-rating')).get(0);
    var windstormStars = windstormRating.all(by.css('.glyphicon-star'));
    expect(windstormStars.count()).toBe(5);
  });
  
  it('should show 1 star for bombasto', function() {
    var bombastoRating = element.all(by.tagName('my-hero-rating')).get(1);
    var bombastoStars = bombastoRating.all(by.css('.glyphicon-star'));
    expect(bombastoStars.count()).toBe(1);
  });
  
  it('should change the rate on click', function() {
    var bombastoRating = element.all(by.tagName('my-hero-rating')).get(1);
    var bombastoFourthStar = bombastoRating.all(by.css('.glyphicon')).get(3);
    bombastoFourthStar.click().then(function() {
      var bombastoStars = bombastoRating.all(by.css('.glyphicon-star'));
      expect(bombastoStars.count()).toBe(4);
      
      var div = element.all(by.tagName('div')).get(0);
      expect(div.getText()).toEqual('Bombasto rate is 4');
    });
  });
});