;
(function($) {
	// init Foundation
	$(document).foundation();
	// flex Video
	$( 'iframe[src*="youtube.com"]').wrap("<div class='flex-video widescreen'/>");
	$( 'iframe[src*="vimeo.com"]').wrap("<div class='flex-video widescreen vimeo'/>");

	$(document).ready(function() {

	});

	$(window).load(function() {
		$('.ba-works-slider').slick({
			dots: true,
			slide: '.ba-works-slide',
			autoplay: true,
			arrows: true,
			prevArrow: $('.ba-works-prev'),
			nextArrow: $('.ba-works-next')
		});

		$('.ba-team-slider').slick({
			slide: '.ba-team-slide',
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: ('.ba-team-prev'),
			nextArrow: ('.ba-team-next'),

			responsive: [

			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},

			]

		});

	});

	$(window).on('resize', function() {

	});

})(jQuery);
