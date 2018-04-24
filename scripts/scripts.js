$(document).ready(function() {

  $(".hov").hover(function() {
    $(this).css("color","red");
    $(this).fadeOut("slow", function() {
      $(this).fadeIn("slow");
    });
  });

  $(".hov2").hover(function() {
    $(this).animate({fontSize: '25px'}, 500);
  });

  $("h1").hover(function() {
    $(this).animate({fontSize: '4em'}, 600);
  });

});
