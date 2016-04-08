import {Component, Input} from 'angular2/core';
import {animation, state, style, animate, transition, group} from 'angular2/animate';
import {Hero, Heroes} from './hero.service';

@Component({
  selector: 'hero-list-timings',
  template: `
    <div class="hero"
         *ngFor="let hero of heroes.get()"
         @flyInOut="hero.state"
         (click)="hero.toggleActivation()">
       {{hero.name}}
    </div>
  `,
  styles: [require('./hero-list.component.css').toString()],
  animations: [
    // #docregion animationdef
    animation('flyInOut', [
      transition('void => *', [
        style({opacity: 0, transform: 'translate(-100px)'}),
        animate('0.2s ease-in', style({opacity: 1, transform: 'translate(0)'}))
      ]),
      transition('* => void', [
        style({opacity: 1, transform: 'translate(0)'}),
        animate('0.2s ease-out', style({opacity: 0, transform: 'translate(100px)'}))
      ])
    ])
    // #enddocregion animationdef
  ]
})
export class HeroListTimings {
  @Input() heroes:Heroes;
}
