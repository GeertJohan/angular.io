// #docregion
import {Component, OnInit} from 'angular2/core';
import {Hero, HeroStoreService} from './hero-store.service';
import {SelectorComponent} from './selector.component';

// #docregion hero-fan
class HeroFan {
  constructor(
    public id:number = 0, 
    public name:string, 
    public heroId?:number) { 
  }
    
  get heroName() { 
    let hero = this.heroId && 
              // DEMO ONLY: Do NOT do it this way
              HeroStoreService.heroCache
                             .filter(h => h.id === this.heroId)[0]
    return hero ? hero.name  : '';
  }
}
// #enddocregion hero-fan

// #docregion component
@Component({
  selector: 'my-selector-host',
  templateUrl: 'app/selector-host.component.html',
  directives: [SelectorComponent],
  providers: [HeroStoreService]
})
export class SelectorHostComponent implements OnInit {
  heroes: Hero[];
  heroFan = new HeroFan(42, 'Lucy');
  selectedHero: Hero;

  constructor(private _store: HeroStoreService) { }
  
  ngOnInit() {
    this.reload();
    this.selectedHero = this.heroes[0];
    this.heroFan.heroId = this.heroes[1].id;
  }

  clear() {
    this.heroes = undefined;
    this.selectedHero = undefined;
  }

  reload() {
    this.heroes = this._store.heroes.slice(0);
    this.selectedHero = this.heroes[0];
  }

  removeSelected() {
    if (this.heroes && this.selectedHero) {
      let index = this.heroes.indexOf(this.selectedHero);
      this.heroes.splice(index, 1);
      this.selectedHero = this.heroes[0];
    }
  }
}
// #enddocregion component
// #enddocregion