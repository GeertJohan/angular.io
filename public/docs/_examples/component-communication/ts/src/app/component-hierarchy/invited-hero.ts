// #docregion
import {Component} from 'angular2/angular2';

@Component({
  selector: 'invited-hero',
  template: `
  <div class='invited-hero'>
    <h3 class='hero-name'>Job Request for [hero.name]</h4>
    <h4 class=job-request>[request]</h4>
    <button>I'll take it!</button>
  </div>
  `,
  styleUrls: ['app/invited-hero.css']
})
export class InvitedHero {
}
// #enddocregion