// #docregion
import {Component, Input} from 'angular2/core';

@Component({
  selector: 'my-hero-rating',
  // #docregion template
  template: `
    <template ngFor [ngForOf]="range" #index="index">
      <span class="sr-only">({{ index < rate ? '*' : ' ' }})</span>
      <i class="glyphicon {{index < rate ? 'glyphicon-star' : 'glyphicon-star-empty'}}"></i>
    </template>
  `
  // #enddocregion template
})
export class HeroRatingComponent {
  @Input() rate: number;
  // #docregion update-method
  update(value: number) {
    this.rate = value;
  }
  // #enddocregion
}
// #enddocregion