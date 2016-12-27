angular.module('app').controller('TodoCtrl', function($scope, $timeout) {
  var wayToGoPromise = undefined;

  $scope.$watch('todo', function() {
    var name = $scope.todo.name;
    $scope.formattedTodoName = name.charAt(0).toUpperCase()
      + name.substring(1).toLowerCase();
  });

  $scope.$watch('todo.done', displayWayToGoMessage);

  function displayWayToGoMessage() {
    if ($scope.todo.done) {
      $scope.showWayToGo = true;

      if (wayToGoPromise) {
        $timeout.cancel(wayToGoPromise);
      }

      wayToGoPromise = $timeout(function() {
        $scope.showWayToGo = false;
      }, 1500);
    }
  }
});

angular.module('app').directive('todo', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/todo.html',
    scope: true,
    controller: 'TodoCtrl'
  };
});
