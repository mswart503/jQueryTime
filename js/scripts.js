$(document).ready(function() {
  $("#manatee-click").click(function(){
    $ ("#manatee-show").toggle();
  });
  $("#bat-click").click(function(){
    $ ("#bat-fade").fadeToggle();
  });
  $("#penguin-click").click(function() {
    $ ("#penguin-slide").slideToggle();
  });
});
