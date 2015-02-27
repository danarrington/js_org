var FormUpdater = (function(){
  var m = {};

  m.announce = function() {
    console.log('modules!');
  }

  m.toggleEvery = function(checkbox, container) {
    m.container = container; 
    $(checkbox).change(toggle_display);
  }

  //private

  function toggle_display() {
    if(this.checked) {
      $(m.container).show();
    } else {
      $(m.container).hide();
    }
  }

  return m;
}());
