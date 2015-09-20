$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
	$('.ryu').mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	});
	$('.ryu').mousedown(function() {
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
		// play Hadouken sound
		// show Hadouken animation to the right
	});
	$('.ryu').mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		// Ryu goes back to ready position
	});
});