// #docregion
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import PhoneList from './phone-list/phone-list.component';
import PhoneDetail from './phone-detail/phone-detail.component';

@RouteConfig([
  {path:'/phones', name: 'Phones', component: PhoneList},
  {path:'/phones/:phoneId', name: 'Phone', component: PhoneDetail},
  {path:'/', redirectTo: ['Phones']}
])
@Component({
  selector: 'phonecat-app',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})
export default class AppComponent {
}
