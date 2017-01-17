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

  self.moveUp = function(todo) {
    var index = self.tasks.indexOf(todo);
    if (index === 0) {
      return;
    }
    self.tasks.splice(index, 1);
    self.tasks.splice(index - 1, 0, todo);
  };

  self.moveDown = function(todo) {
    var index = self.tasks.indexOf(todo);
    if (index === self.tasks.length - 1) {
      return;
    }
    self.tasks.splice(index, 1);
    self.tasks.splice(index + 1, 0, todo);
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
