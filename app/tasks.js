angular.module('app').controller('TasksCtrl', function($interval) {
  var self = this;

  self.$onInit = function() {
    updateClock();
    var interval = $interval(updateClock, 1000 * 60);
  };

  self.deleteTodo = function(todo) {
    self.tasks.splice(self.tasks.indexOf(todo), 1);
  };

  self.$onDestroy = function() {
    $interval.cancel(interval);
  };

  function updateClock() {
    self.formattedTime = new Date().toLocaleTimeString(undefined, {
      hour: 'numeric', minute: '2-digit'
    });
  }
}).component('tasks', {
  templateUrl: 'app/tasks.html',
  controller: 'TasksCtrl',
  bindings: {
    tasks: '<'
  }
});
