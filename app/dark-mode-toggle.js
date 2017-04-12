angular.module('app').controller('DarkModeToggleCtrl', function() {
  var self = this;

  self.toggle = function() {
    if (self.mode === 'dark') {
      self.mode = 'light';
    } else {
      self.mode = 'dark';
    }
  };
})
.component('darkModeToggle', {
  templateUrl: 'app/dark-mode-toggle.html',
  bindings: {
    mode: '='
  },
  controller: 'DarkModeToggleCtrl'
});
