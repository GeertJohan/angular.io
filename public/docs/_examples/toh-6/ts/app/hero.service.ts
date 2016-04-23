// #docplaster
// #docregion
import { Hero } from './hero';
import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';

@Injectable()
export class HeroService {

  private _heroesUrl = 'app/heroes';  // URL to web api

  constructor(private _http: Http) { }

  // #docregion get-heroes
  getHeroes(): Promise<Hero[]> {
    return this._http
    // #docregion to-promise
               .get(this._heroesUrl).toPromise()
    // #enddocregion to-promise
    // #docregion to-data
               .then(response => response.json().data)
    // #enddocregion to-data
    // #docregion catch
               .catch(this._handleError);
    // #enddocregion catch
  }
  // #enddocregion get-heroes

  getHero(id: number) {
    return this.getHeroes()
               .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }

  // #docregion save
  save(hero: Hero): Promise<Hero>  {
    if (hero.id) {
      return this._put(hero);
    }
    return this._post(hero);
  }
  // #enddocregion save

  // #docregion delete-hero
  delete(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this._heroesUrl}/${hero.id}`;

    return this._http
               .delete(url, headers)
               .toPromise()
               .catch(this._handleError);
  }
  // #enddocregion delete-hero

  // #docregion post-hero
  // Add new Hero
  private _post(hero: Hero): Promise<Hero> {
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this._http
               .post(this._heroesUrl, JSON.stringify(hero), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this._handleError);
  }
  // #enddocregion post-hero

  // #docregion put-hero
  // Update existing Hero
  private _put(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this._heroesUrl}/${hero.id}`;

    return this._http
               .put(url, JSON.stringify(hero), {headers: headers})
               .toPromise()
               .then(() => hero)
               .catch(this._handleError);
  }
  // #enddocregion put-hero

  // #docregion error-handler
  private _handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  // #enddocregion error-handler
}
// #enddocregion
