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
  $("button#black").click(function(){
    $("body").removeClass();
    $("body").addClass("background-color");
    $(".show").toggle();
    $(".hide").toggle();
  });
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("original-color");
    $(".show").toggle();
    $(".hide").toggle();
  });
  $("p").click(function() {
    $("p").addClass("highlight-box");
  });
  $("button#hi").click(function() {
    $("ul").after("<li>Hi there</li>");
  });
});
