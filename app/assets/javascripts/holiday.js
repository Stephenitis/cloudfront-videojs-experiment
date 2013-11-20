$( document ).ready(function() {
  $("h1").fadeIn( 4000, function() {
    $("h1").delay(2000).fadeOut(2000, function() {
      $("h1").html("Wishing you the best<br/>this holiday season").fadeIn( 4000, function() {
        $("h1").delay(2000).fadeOut(2000, function() {
          $("h1").html("Stephen Nguyen").fadeIn( 4000, function() {
          });
        });
      });
    });
  });

 //   $(".form").fadeIn( 8000, function() {
 // });

});

