// #docplaster
// #docregion
import {Component, OnInit} from 'angular2/core';

import {Hero, HeroStoreService} from './hero-store.service';

@Component({
  selector: 'my-select-verbose',
  templateUrl: 'app/select-verbose.component.html'
})
export class SelectVerboseComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(private _store: HeroStoreService) { }
  // #docregion buttons-methods
  clear() {
    this.heroes = undefined;
    this.selectedHero = undefined;
  }
  // #enddocregion buttons-methods
  // #docregion select-methods
  isSelected(hero: Hero) {
    return this.selectedHero && hero.id === this.selectedHero.id;
  }
  // #enddocregion select-methods
  // #docregion buttons-methods
  ngOnInit() {
    this.reload();
    this.selectedHero = this.heroes[1];
  }
  // #enddocregion buttons-methods  
  // #docregion select-methods
  onChange(index: string) {
    this.selectedHero = this.heroes[+index];
  }
  // #enddocregion select-methods  
  // #docregion buttons-methods
  reload() {
    this.heroes = this._store.heroes.slice();
    this.selectedHero = this.heroes[0];
  }  
  removeSelected() {
    if (this.heroes && this.selectedHero) {
      const index = this.heroes.indexOf(this.selectedHero);
      this.heroes.splice(index, 1);
      this.selectedHero = this.heroes[1];
    }
  }
  // #enddocregion buttons-methods
}
// #enddocregion