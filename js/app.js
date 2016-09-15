$( document ).ready( function() {

  $( '#char-count' ).css( 'display', 'none' );



  $( '.tweet-compose' ).on( 'click', function(){
    $( this ).css( 'height', '5em' );
    $( '#tweet-submit' ).css( 'display', 'inline-block' );
    $( '#char-count' ).css( 'display', 'inline-block' );
  });

  $( '.tweet-compose' ).keyup( function(){
    inputValue = 140 - $( this ).val().length;
    numOfChars = $( this ).val().length;

    $( '#char-count' ).html( inputValue );

    if( numOfChars > 140 ){
      $( '#tweet-submit' ).css( 'display', 'none' );
    } else{
      $( '#tweet-submit' ).css( 'display', 'inline-block' );
    }

    if( inputValue <= 10 ){
      $( '#char-count').css( 'color', 'red' );
    } else{
      $( '#char-count').css( 'color', 'black' );
    }
  });




  $( '#tweet-submit' ).on( 'click', function(){
    input = $('.tweet-compose').val();
    profile = $( '#profile-summary' ).clone();
    $( '#stream' ).prepend( profile, input );
  });




  $( '.content' ).hover( function(){
    $( '.tweet-actions' ).css( 'display', 'inline' );
  }, function(){
    $( '.tweet-actions' ).css( 'display', 'none' );
  });


  $( '.tweet').on( 'click', function(){
    $( '.stats' ).css( 'display', 'inline-block' );
  });


});
