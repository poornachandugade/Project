(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
$(document).ready(function(){

// desktop navbar dropdown
$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
  // sub dropdowns
  $('.dropdown-button-sub').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: $('.dropdown-content').width()  , // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
  $('.regulations').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 180 , // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );

  // carousel
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  // on hovering a card add shadow
  $('.card').hover(function(){
    $(this).addClass('z-depth-4');
  },function(){
    $(this).removeClass('z-depth-4')
  });
});
//menu width
$('.button-collapse').sideNav({
  menuWidth:320
})

//navbar-fix
	var menu = $('#menu'),
		pos = menu.offset();

		$(window).scroll(function(){
			if($(this).scrollTop() > pos.top){

				 $('#menu').addClass('fixed');
         console.log("Fixed")
			} else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
        	$('#menu').removeClass('fixed');
			}
		});
