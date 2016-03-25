// #docregion
import {Component} from 'angular2/core';

import {HeroStoreService} from './hero-store.service';
import {SelectVerboseComponent} from './select-verbose.component';
import {SelectorHostComponent} from './selector-host.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>Favorite Hero</h1>
    <my-select-verbose></my-select-verbose>
    <hr>
    <my-selector-host></my-selector-host> 
  `,
  directives: [SelectVerboseComponent, SelectorHostComponent],
  providers: [HeroStoreService]
})
export class AppComponent {}
// #enddocregion