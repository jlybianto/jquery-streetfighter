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
		console.log('mousedown');
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		// play Hadouken sound
		// show Hadouken animation to the right
	});
	$('.ryu').mouseup(function() {
		console.log('mouseup');
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		// Ryu goes back to ready position
	});
});