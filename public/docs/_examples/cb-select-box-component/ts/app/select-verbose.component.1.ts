// #docregion
import {Component, OnInit} from 'angular2/core';

import {Hero, HeroStoreService} from './hero-store.service';

@Component({
  selector: 'my-select-verbose',
  templateUrl: 'app/select-verbose.component.html'
})
export class SelectVerboseComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero;
  
  constructor(private _store: HeroStoreService) { }
  
  ngOnInit() {
    this.heroes = this._store.heroes.slice();
    this.selectedHero = this.heroes[1];
  }
}
// #enddocregion