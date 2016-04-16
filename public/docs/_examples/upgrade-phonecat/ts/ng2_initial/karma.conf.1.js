module.exports = function(config){
  config.set({

    basePath: './app',

    // #docregion ng2
    files : [
    // #enddocregion ng2
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-mocks/angular-mocks.js',
      '../node_modules/systemjs/dist/system.src.js',
      // #docregion ng2
      '../node_modules/es6-shim/es6-shim.js',
      '../node_modules/angular2/bundles/angular2-polyfills.js',
      '../node_modules/angular2/bundles/angular2.dev.js',
      '../node_modules/angular2/bundles/upgrade.dev.js',
      // #enddocregion ng2
      // #docregion ng2-http
      '../node_modules/rxjs/bundles/Rx.js',
      '../node_modules/angular2/bundles/http.dev.js',
      // #enddocregion ng2-http
      // #docregion ng2-testing
      '../node_modules/angular2/bundles/testing.dev.js',
      // #enddocregion ng2-testing
      '../karma_test_shim.js',
      {pattern: '**/*.module.js', included: false, watched: true},
      {pattern: '*!(.module|.spec).js', included: false, watched: true},
      {pattern: '!(bower_components)/**/*!(.module|.spec).js', included: false, watched: true},
      {pattern: '**/*.spec.js', included: false, watched: true}
    // #docregion ng2
    ],
    // #enddocregion ng2
    // #enddocregion files

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'Firefox'],

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
