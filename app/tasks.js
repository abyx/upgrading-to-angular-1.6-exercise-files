angular.module('app').controller('TasksCtrl', function($scope, $interval) {
  var self = this;
  self.deleteTodo = function(todo) {
    self.tasks.splice(self.tasks.indexOf(todo), 1);
  };

  function updateClock() {
    self.formattedTime = new Date().toLocaleTimeString(undefined, {
      hour: 'numeric', minute: '2-digit'
    });
  }

  updateClock();
  var interval = $interval(updateClock, 1000 * 60);

  $scope.$on('$destroy', function() {
    $interval.cancel(interval);
  });
}).directive('tasks', function() {
  return {
    restrict: 'E',
    controllerAs: '$ctrl',
    bindToController: true,
    templateUrl: 'app/tasks.html',
    controller: 'TasksCtrl',
    scope: {
      tasks: '<'
    }
  };
});
