import {Component} from 'angular2/core';

import {HeroGrid} from './hero-grid.component';

@Component({
  selector:'app',
  template:'<hero-grid></hero-grid>',
  directives:[HeroGrid]
})

export class AppComponent{

}