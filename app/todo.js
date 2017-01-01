angular.module('app').controller('TodoCtrl', function($scope, $timeout) {
  var wayToGoPromise = undefined;
  var self = this;

  $scope.$watch('todo', function() {
    var name = self.todo.name;
    self.formattedTodoName = name.charAt(0).toUpperCase()
        + name.substring(1).toLowerCase();
  });

  $scope.$watch('todo.done', displayWayToGoMessage);

  function displayWayToGoMessage() {
    if (self.todo.done) {
      self.showWayToGo = true;

      if (wayToGoPromise) {
        $timeout.cancel(wayToGoPromise);
      }

      wayToGoPromise = $timeout(function() {
        self.showWayToGo = false;
      }, 1500);
    }
  }
});

angular.module('app').directive('todo', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/todo.html',
    scope: {
      todo: '<',
      deleteTodo: '&'
    },
    controller: 'TodoCtrl',
    controllerAs: '$ctrl',
    bindToController: true
  };
});
