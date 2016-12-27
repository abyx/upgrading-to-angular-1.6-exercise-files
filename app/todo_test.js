describe('todo', function() {
  beforeEach(module('app'));

  describe('todo controller', function() {
    var todoCtrl;
    var scope;

    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();

      todoCtrl = $controller('TodoCtrl', {$scope: scope});
    }));


    it('should format name', inject(function($controller, $rootScope) {
      scope.todo = {
        name: 'name',
        done: false
      };

      scope.$digest();

      expect(scope.formattedTodoName).toBe('Name');
    }));
  });
});
