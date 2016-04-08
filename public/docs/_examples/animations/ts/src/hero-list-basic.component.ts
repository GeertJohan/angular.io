 // #docregion
import {Component, Input} from 'angular2/core';
import {animation, state, style, animate, transition, group} from 'angular2/animate';
import {Hero, Heroes} from './hero.service';

@Component({
  selector: 'hero-list-basic',
  // #docregion template
  template: `
    <div class="hero" *ngFor="let hero of heroes.get()"
         @flyInOut>
      {{hero.name}}
    </div>
  `,
  // #enddocregion template
  styles: [require('./hero-list.component.css').toString()],
  animations: [
    // #docregion animationdef
    animation('flyInOut', [
      transition('void => *', [
        style({opacity: 0, transform: 'translate(-100px)'}),
        animate(100, style({opacity: 1, transform: 'translate(0)'}))
      ]),
      transition('* => void', [
        style({opacity: 1, transform: 'translate(0)'}),
        animate(100, style({opacity: 0, transform: 'translate(100px)'}))
      ])
    ])
    // #enddocregion animationdef
  ]
})
export class HeroListBasic {
  @Input() heroes:Heroes;
}
