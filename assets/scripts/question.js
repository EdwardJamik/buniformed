$(document).ready(function () {
	let currentStep = 0;
	const totalSteps = $('.question').length;

	$('.question:not(:first)').hide();

	function showNextQuestion() {
		if (currentStep < totalSteps - 1) {
			$('.question')
				.eq(currentStep)
				.fadeOut(300, function () {
					currentStep++;
					$('.question').eq(currentStep).fadeIn(300);
				});
		}
	}

	function isQuestionAnswered() {
		const $currentQuestion = $('.question').eq(currentStep);
		const $select = $currentQuestion.find('select');
		const $input = $currentQuestion.find('input[type="text"]');

		if ($select.length && $select.val() === '0') {
			return false;
		}

		if ($input.length && $input.val().trim() === '') {
			return false;
		}

		return true;
	}

	function hideErrorMessage() {
		$('.question').eq(currentStep).find('.error-message').fadeOut(300);
	}

	$('.next_question').click(function (e) {
		e.preventDefault();

		if (isQuestionAnswered()) {
			hideErrorMessage();
			if ($(this).hasClass('end_question')) {
				showPopUp();
			} else {
				showNextQuestion();
			}
		} else {
			const $currentQuestion = $('.question').eq(currentStep);
			if ($currentQuestion.find('select').length) {
				alert('Please select an option before proceeding.');
			} else if ($currentQuestion.find('input[type="text"]').length) {
				alert('Please enter a value before proceeding.');
			}
		}
	});

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

	$(window).click(function (event) {
		if (event.target == document.getElementById('thankYouModal')) {
			$('#thankYouModal').fadeOut(300);
			unlockScroll();
		}
	});
});
