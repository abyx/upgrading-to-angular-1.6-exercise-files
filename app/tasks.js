angular.module('app').controller('TasksCtrl', function($scope, $interval, resolvedTasks) {
  $scope.tasks = resolvedTasks;

  $scope.deleteTodo = function(todo) {
    $scope.tasks.splice($scope.tasks.indexOf(todo), 1);
  };

  function updateClock() {
    $scope.formattedTime = new Date().toLocaleTimeString(undefined, {
      hour: 'numeric', minute: '2-digit'
    });
  }

  updateClock();
  var interval = $interval(updateClock, 1000 * 60);

  $scope.$on('$destroy', function() {
    $interval.cancel(interval);
  });
});
