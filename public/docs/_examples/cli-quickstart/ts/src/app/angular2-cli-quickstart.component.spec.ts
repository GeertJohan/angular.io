/* tslint:disable:no-unused-variable */
// #docregion
import {
  async,
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject,
  ComponentFixture,
  TestComponentBuilder
} from 'angular2/testing';
import {Angular2CliQuickstartApp} from '../app/angular2-cli-quickstart.component';

beforeEachProviders(() => [Angular2CliQuickstartApp]);

describe('App: Angular2CliQuickstart', () => {
  it('should create the app', inject([Angular2CliQuickstartApp], (app: Angular2CliQuickstartApp) => {
    expect(app).toBeTruthy();
  }));

  // #docregion title
  it('should have as title \'My First Angular 2 App\'', inject([Angular2CliQuickstartApp], (app: Angular2CliQuickstartApp) => {
    expect(app.title).toEqual('My First Angular 2 App');
  }));
  // #enddocregion title
});
