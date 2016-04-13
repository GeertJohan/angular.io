// #docregion
import {bootstrap} from 'angular2/platform/browser'
import {enableProdMode} from 'angular2/core';

import {AppComponent} from './app/app.component';

// #docregion enable-prod
if (process.env.ENV === 'production') {
  enableProdMode();
}
// #enddocregion enable-prod

bootstrap(AppComponent, []);
// #enddocregion