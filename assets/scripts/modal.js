$(document).ready(function () {
	function lockScroll() {
		$('html, body').css({
			overflow: 'hidden',
			height: '100%',
		});
	}

	function unlockScroll() {
		$('html, body').css({
			overflow: '',
			height: '',
		});
	}

	function showPopUp() {
		$('#thankYouModal').fadeIn(300);
		lockScroll();
	}

	$('.close').click(function () {
		$('#thankYouModal').fadeOut(300);
		unlockScroll();
	});

	$('.continue').click(function () {
		showPopUp();
	});

	$(window).click(function (event) {
		if (event.target == document.getElementById('thankYouModal')) {
			$('#thankYouModal').fadeOut(300);
			unlockScroll();
		}
	});
});
