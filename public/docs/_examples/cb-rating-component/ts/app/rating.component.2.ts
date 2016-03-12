// #docregion
import {Component} from 'angular2/core';

@Component({
  selector: 'my-hero-rating',
  // #docregion template
  template: `
    <template ngFor [ngForOf]="range" #index="index">
      <span class="sr-only">(*)</span>
      <i class="glyphicon glyphicon-star"></i>
    </template>
  `
  // #enddocregion template
})
export class HeroRatingComponent { }
// #enddocregion