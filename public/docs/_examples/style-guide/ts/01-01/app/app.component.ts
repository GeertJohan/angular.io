// #docregion
/* recommended */

// app.component.ts
import { Component } from '@angular/core';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './heroes/hero.service';

@Component({
  selector: 'toh-app',
  template: `
      <toh-heroes></toh-heroes>
    `,
  styleUrls: ['app/app.component.css'],
  directives: [HeroesComponent],
  providers: [HeroService]
})
export class AppComponent { }
