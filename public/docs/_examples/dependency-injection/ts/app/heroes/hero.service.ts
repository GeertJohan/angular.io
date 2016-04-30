// #docregion
import { Injectable } from '@angular/core';

import { Hero }       from './hero';
import { HEROES }     from './mock-heroes';
import { Logger }     from '../logger.service';

@Injectable()
export class HeroService {
  private _user:string;

  // #docregion internals
  constructor(
    private logger: Logger,
    private isAuthorized: boolean) { }

  getHeroes() {
    let auth = this.isAuthorized ? 'authorized ': 'unauthorized';
    this.logger.log(`Getting heroes for ${auth} user.`);
    return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
  }
  // #enddocregion internals
}
