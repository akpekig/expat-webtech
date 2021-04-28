$(function() {

  $( "form > div" ).hide();
  $( ".tick" ).change( function(){
    if ( $( ".tick" ).is( ":checked" ) ) {
      $( "form > div" ).show( 1000 );
      $('html, body').animate({
    scrollTop: ($("form > div").offset().top)
},500);
    } else {
      $( "form > div" ).hide( 1000 );
    }
  });

});
