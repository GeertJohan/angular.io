import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {Angular2CliQuickstartApp} from './app/angular2-cli-quickstart.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2CliQuickstartApp);
