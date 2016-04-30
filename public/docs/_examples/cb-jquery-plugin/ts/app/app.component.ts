// #docregion
import {Component}     from  '@angular/core'
import {HeroComponent} from  './hero.component';
import {HeroAssignmentComponent} from './hero-assignment.component';
@Component({
  selector: 'my-app',
  template: `
    <div id="hero-wrapper">
      <h2>Hero Assignments</h2>
     
      <div *ngFor="let assignment of assignments">
        <cb-assignment [title]="assignment"></cb-assignment>
      </div>
      
      <div style="clear:both;">
        <div *ngFor="let hero of heroes">
          <cb-hero [name]="hero"></cb-hero>
        </div>
      </div>
    </div>
  `,
  directives: [HeroComponent, HeroAssignmentComponent]
}) 
export class AppComponent {
  heroes = ['Mr. Nice', 'Bombasto', 'Celeritas', 'Tornado'];
  assignments = ['Help Granny cross the street', 
                 'Rescue village from dragon(s)', 
                 'Rescue princess from tower'];
}
