angular.module('app').factory('Tasks', function($q) {
  return {
    get: function() {
      // A real app would probably fetch these via $http
      return $q.when([
        {id: 1, name: 'wrap in directives', done: false},
        {id: 2, name: 'isolate scopes', done: false},
        {id: 3, name: 'controller-as syntax', done: false}
      ]);
    }
  };
});
