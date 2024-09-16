$(document).ready(function () {
	$('.shop_button').click(function () {
		$('.shop_button #menu').toggleClass('open');
	});

	$('.dropdown_list ul li').click(function () {
		$(this).toggleClass('open');
	});

	$('.quantity_input .minus').click(function () {
		var $input = $(this).closest('.quantity_input').find('input');
		var value = parseInt($input.val());
		if (value > 1) {
			$input.val(value - 1);
		}
	});

	$('.quantity_input .plus').click(function () {
		var $input = $(this).closest('.quantity_input').find('input');
		var value = parseInt($input.val());
		// if (value < 1) {
		$input.val(value + 1);
		// }
	});
});
