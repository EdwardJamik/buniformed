$(document).ready(function () {
	$('.brands_slider').slick({
		infinite: false,
		// autoplay: true,
		// autoplaySpeed: 1500,
		prevArrow:
			"<button type='button' class='slide-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow:
			"<button type='button' class='slide-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
		customPaging: function (slider, i) {
			return '<div class="slider_dots"></div>';
		},
		speed: 1000,
		slidesToShow: 7,
		slidesToScroll: 7,
		arrows: true,
		dots: true,
		pauseOnHover: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					variableWidth: false,
				},
			},
			{
				breakpoint: 860,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					variableWidth: false,
				},
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					variableWidth: false,
				},
			},
		],
	});
});
