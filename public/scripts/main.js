// jQuery / Ajax goes here

$(function(){

	$(document).on('mouseenter', '#item', function() {
		console.log('You entered it');

		$(this).addClass('colorFilter');
		$(this).removeClass('colorFilter2');


	});

	$(document).on('mouseleave', '#item', function() {
		console.log('You exited it');

		$(this).removeClass('colorFilter');
		$(this).addClass('colorFilter2');


		// $(this).removeClass('opacity');
	});











}); // end jQuery on doc ready