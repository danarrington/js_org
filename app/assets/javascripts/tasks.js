// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var TasksController = Paloma.controller('Tasks');

//Executes when Rails User#new is executed.
TasksController.prototype.new = function(){
   console.log('New action' );
   FormUpdater.toggleEvery('#task_recurring', '.every-container');
};

TasksController.prototype.index = function(){
  console.log('Index index' );
  FormUpdater.announce(); 
};

