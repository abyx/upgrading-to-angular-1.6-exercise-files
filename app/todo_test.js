describe('todo', function() {
  beforeEach(module('app'));

  describe('todo component', function() {
    it('should format name', inject(function($componentController) {
      var todo = {
        name: 'name',
        done: false
      };

      var todoCtrl = $componentController('todo', {}, {todo: todo});
      todoCtrl.$onInit();

      expect(todoCtrl.formattedTodoName).toBe('Name');
    }));
  });
});
