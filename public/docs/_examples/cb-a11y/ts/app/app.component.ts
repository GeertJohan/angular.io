import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {A11yFormControls} from "./form-controls/a11y-form-controls.component";
import {A11yIndex} from "./a11y-index.component";
import {A11yHelper} from "./services/a11y-helper.service";
import {A11yManagingFocus} from "./managing-focus/a11y-managing-focus.component";
import {A11yComponentRoles} from "./component-roles/a11y-component-roles.component";
import {A11yDevTools} from "./dev-tools/a11y-dev-tools.component";
import {Router} from "@angular/router-deprecated";

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  directives:[
    ROUTER_DIRECTIVES
  ],
  providers: [
    ROUTER_PROVIDERS,
    A11yHelper
  ]
})
@RouteConfig([
  {path:'/', name: 'Index', component: A11yIndex},
  {path:'/form-controls', name: 'FormControls', component: A11yFormControls},
  {path:'/managing-focus', name: 'ManagingFocus', component: A11yManagingFocus},
  {path:'/component-roles', name: 'ComponentRoles', component: A11yComponentRoles},
  {path:'/dev-tools/...', name: 'DevTools', component: A11yDevTools}
])
export class AppComponent {

  constructor(private _router: Router){
  }

  isIndex():boolean {
    let instruction = this._router.generate(['Index']);
    return this._router.isRouteActive(instruction);
  }

}
