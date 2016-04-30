// #docregion
import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { HeroService } from './shared';
import { NavComponent } from './layout/nav.component';

@Component({
  selector: 'toh-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, NavComponent],
  providers: [
    ROUTER_PROVIDERS,
    HeroService
  ]
})
@RouteConfig([
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/heroes/...', name: 'Heroes', component: HeroesComponent },
])
export class AppComponent {}
