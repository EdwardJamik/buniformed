$(document).ready(function () {
	$('.shop_button').click(function () {
		$('.shop_button #menu').toggleClass('open');
		$('.shop_button').toggleClass('open');
		$('.menu_list').toggleClass('open');
		$('.category_list').toggleClass('open');
		$('html, body').css({
			overflowX: 'hidden',
		});
	});

	$('.category_list').on('mouseleave', function () {
		if ($('.category_list').hasClass('open')) {
			$('.shop_button #menu').toggleClass('open');
			$('.shop_button').toggleClass('open');
			$('.menu_list').toggleClass('open');
			$('.category_list').toggleClass('open');
			$('html, body').css({
				overflowX: '',
			});
		}
	});

	var $menuList = $('.menu_list');
	var $menuItems = $menuList.find('li:not([class])');
	var $currentPage = $menuItems.find('a.current-page');

	$menuList.on('mouseenter', 'li', function () {
		if (!$(this).attr('class')) {
			$menuItems.find('a').removeClass('current-page');
			$(this).find('a').addClass('current-page');
		} else {
			$menuItems.find('a').removeClass('current-page');
			$currentPage.addClass('current-page');
		}
	});

	$menuList.on('mouseleave', function (e) {
		var $relatedTarget = $(e.relatedTarget);
		if (
			!$relatedTarget.is('li') &&
			!$relatedTarget.closest('.menu_list').length
		) {
			$menuItems.find('a').removeClass('current-page');
			$currentPage.addClass('current-page');
		}
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

	$('.find_button').on('click', function () {
		var $this = $(this);

		$this.animate(
			{
				// width: '200px',
			},
			500,
			function () {
				$this
					// .removeClass('find_button')
					.addClass('find_input')
					.attr('type', 'text')
					.val('');
			}
		);

		$('.navigation .search_button').addClass('open');
		$('.navigation .logo').addClass('hidden');
	});

	$('.close_button').on('click', function () {
		// var $this = $(this);

		// $this.animate({}, 500, function () {
		// 	$this.removeClass('find_input').attr('type', 'button').val('');
		// });

		$('.navigation .search_button .find_button')
			.removeClass('find_input')
			.attr('type', 'button')
			.val('');
		$('.navigation .search_button').removeClass('open');
		$('.navigation .logo').removeClass('hidden');
	});
});
