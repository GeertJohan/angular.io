// #docplaster
// #docregion
import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

import { provide } from 'angular2/core';

//#docregion http
//Required import for Http in general
import { HTTP_PROVIDERS } from 'angular2/http';

//These imports are only required for the in-memory web api 
import { InMemoryBackendService, SEED_DATA } from 'a2-in-memory-web-api/core';
import { XHRBackend } from 'angular2/http';
import { InMemoryDataService } from './in-memory-data.service';

@Component({
  selector: 'my-app',

  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS, 
    HeroService,
    
    HTTP_PROVIDERS, //Required registration of HTTP_PROVIDERS 
    
    // Only required for the in-memory web api 
    provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    provide(SEED_DATA,  { useClass: InMemoryDataService }) // in-mem server data
  ]
})
//#enddocregion http
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }
])
export class AppComponent {
  title = 'Tour of Heroes';
}
