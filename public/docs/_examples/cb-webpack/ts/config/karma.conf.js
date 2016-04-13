// #docregion
var webpackConfig = require('./webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      {pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: false},
      {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: false},
      {pattern: './config/spec-bundle.js', watched: false}
    ],

    preprocessors: {
      './config/spec-bundle.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },
    
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],    
    singleRun: true
  };
  
  config.set(_config);
};
// #enddocregion