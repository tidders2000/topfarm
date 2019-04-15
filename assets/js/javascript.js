$(document).ready(function() {
  $('.sidenav').sidenav();

  $('.tooltipped').tooltip();

  $('.modal').modal();
  $('.slider').slider({
    height: 700,
    indicators: false,
    duration: 0.5
  });
  $('.shake').mouseenter(function() {
    $(this).effect("shake");
  });
  
      $(function() {
        $('.lazy').Lazy();
    });

})
