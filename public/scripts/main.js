// jQuery / Ajax goes here

$(function(){

	$('#menuList').hide();

	$(document).on('mouseenter', '#item', function() {
		console.log('You entered it');

		$(this).addClass('colorFilter');
		$(this).removeClass('colorFilter2');
	});

	$(document).on('mouseleave', '#item', function() {
		console.log('You exited it');

		$(this).removeClass('colorFilter');
		$(this).addClass('colorFilter2');

	});

	$(document).on('click', '#menuButton', function() {
		console.log('you cliekd the menu button');
		$('#menuList').slideDown();
	});


}); // end jQuery on doc ready