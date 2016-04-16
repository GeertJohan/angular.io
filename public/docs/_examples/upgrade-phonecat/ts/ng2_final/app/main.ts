// #docregion
// #docregion importbootstrap
import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {
  LocationStrategy,
  HashLocationStrategy,
  ROUTER_PROVIDERS
} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Phone} from './core/phone/phone.service';
import AppComponent from './app.component';
// #enddocregion importbootstrap

// #docregion bootstrap
bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  Phone
]);
// #enddocregion bootstrap
