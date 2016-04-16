// #docregion
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
// #docregion routeparams
import {RouteParams} from 'angular2/router';
// #enddocregion routeparams
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/fromArray';
import {
  describe,
  beforeEachProviders,
  injectAsync,
  it,
  expect,
  TestComponentBuilder
} from 'angular2/testing';
import PhoneDetail from './phone-detail.component';
import {Phone, PhoneData} from '../core/phone/phone.service';

function xyzPhoneData():PhoneData {
  return {
    name: 'phone xyz',
    snippet: '',
    images: ['image/url1.png', 'image/url2.png']
  }
}
class MockPhone extends Phone {
  get(id):Observable<PhoneData> {
    return Observable.fromArray([xyzPhoneData()]);
  }
}

describe('PhoneDetail', () => {

  // #docregion routeparams
  beforeEachProviders(() => [
    provide(Phone, {useClass: MockPhone}),
    provide(RouteParams, {useValue: new RouteParams({phoneId: 'xyz'})}),
    HTTP_PROVIDERS
  ]);
  // #enddocregion routeparams

  it('should fetch phone detail', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(PhoneDetail).then((fixture) => {
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1')).toHaveText(xyzPhoneData().name);
    });
  }));

});
