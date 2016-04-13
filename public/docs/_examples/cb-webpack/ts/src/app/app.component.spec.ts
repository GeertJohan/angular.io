// #docregion
import {
  it,
  inject,
  describe,
  beforeEachProviders,
  expect
} from 'angular2/testing';

import {AppComponent} from './app.component';

describe('App', () => {
  beforeEachProviders(() => [
    AppComponent
  ]);
  
  it ('should work', inject([AppComponent], (app) => {
    // Add real test here
    expect(2).toBe(2);
  }));
});
// #enddocregion