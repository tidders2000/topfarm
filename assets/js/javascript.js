$(document).ready(function() {
  $('.sidenav').sidenav();

  $('.tooltipped').tooltip();


  $('.slider').slider({
    height: 700,
    indicators: false
  });
  $('.test').mouseenter(function() {
    $(this).effect("shake");
  });

})
