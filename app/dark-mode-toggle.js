angular.module('app').controller('DarkModeToggleCtrl', function() {
  var self = this;

  self.toggle = function() {
    var newMode = self.mode === 'dark' ? 'light' : 'dark';
    self.onDarkModeToggle({mode: newMode});
  };
})
.component('darkModeToggle', {
  templateUrl: 'app/dark-mode-toggle.html',
  bindings: {
    mode: '<',
    onDarkModeToggle: '&'
  },
  controller: 'DarkModeToggleCtrl'
});
