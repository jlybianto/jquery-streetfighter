$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
	});
	$('.ryu').mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
	});
	$('.ryu').mousedown(function() {
		playHadouken();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.ryu-cool').hide();
		$('.hadouken').finish().show()
		.animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
	});
	$('.ryu').mouseup(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
	});
	$(document).keydown(function(n) {
    	if (n.keyCode == 88) {
    		$('.ryu-still').hide();
    		$('.ryu-ready').hide();
    		$('.ryu-throwing').hide();
    		$('.ryu-cool').show();
    	}
	})
	.keyup(function(n) {
    	if (n.keyCode == 88) {
    		$('.ryu-still').show();
    		$('.ryu-ready').hide();
    		$('.ryu-throwing').hide();
    		$('.ryu-cool').hide();
    	}
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};