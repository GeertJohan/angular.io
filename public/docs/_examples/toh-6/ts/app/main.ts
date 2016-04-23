import { bootstrap }    from 'angular2/platform/browser';
import { AppComponent } from './app.component';

// #docregion rxjs
import 'rxjs/Rx'; // adds all rxjs operators
// #enddocregion rxjs

bootstrap(AppComponent);
