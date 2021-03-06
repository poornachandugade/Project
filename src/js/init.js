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
      constrainWidth: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: $('.dropdown-content').width(), // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
  $('.dropdown-button-sub2').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 199, // Spacing from edge
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
			} else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
        	$('#menu').removeClass('fixed');
			}
		});

$('.drop-btn-4').on('mouseover',function(){
  $('.regulations').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: $('#dropdown4').outerWidth()-1 , // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
});
// $('#dropdown4 > ul').on(mouseover,function(){

// });
$(".close_btn").click(function(){$(".drag-target").click()});
