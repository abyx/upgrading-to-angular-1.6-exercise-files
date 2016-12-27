//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '.',

    files: [
      'angular.min.js',
      'angular-route.min.js',
      'angular-mocks.js',
      'node_modules/angular-stub-changes/index.js',
      'app/app.js',
      'app/**/*.js'
    ],

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ]
  });
};
