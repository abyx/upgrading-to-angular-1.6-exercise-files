angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/tasks.html',
      controller: 'TasksCtrl',
      resolve: {
        resolvedTasks: function(Tasks) {
          return Tasks.get();
        }
      }
    });
  }).
  config(function($compileProvider) {
    $compileProvider.preAssignBindingsEnabled(true);
  });
