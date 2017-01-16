angular.module('app').controller('TodoCtrl', function($timeout) {
  var wayToGoPromise = undefined;
  var self = this;
  var prevTodoDone = undefined;

  self.$onInit = function() {
    console.log('todo initialized');
  };

  self.$doCheck = function() {
    if (self.todo.done !== prevTodoDone) {
      if (self.todo.done) {
        displayWayToGoMessage();
      }

      prevTodoDone = self.todo.done;
    }
  };

  self.$onChanges = function(changes) {
    if (changes.todo) {
      var name = self.todo.name;
      self.formattedTodoName = name.charAt(0).toUpperCase()
        + name.substring(1).toLowerCase();
    }
  };

  self.$postLink = function() {
    console.log('This runs after linking is done');
  };

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

angular.module('app').component('todo', {
  templateUrl: 'app/todo.html',
  bindings: {
    todo: '<',
    deleteTodo: '&'
  },
  controller: 'TodoCtrl'
});
