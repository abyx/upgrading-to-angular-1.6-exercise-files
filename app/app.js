angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.when('/', {
      template: '<tasks tasks="$resolve.tasks"></tasks>',
      resolve: {
        tasks: function(Tasks) {
          return Tasks.get();
        }
      }
    });
  }).
  config(function($compileProvider) {
    $compileProvider.preAssignBindingsEnabled(true);
  });
