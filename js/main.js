$(document).ready(function() {
  new WOW().init();
  $('#about').waypoint(function(direction) {
      $('.logo').toggleClass(' whitetext');
  });
});