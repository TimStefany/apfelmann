const $ = require('jquery');
import './vendor/objectFitPolyfill.min.js';


$(function () {


	/**
	 * Menu/Header addons
	 */
	(function () {
		var $header = $("header");
		var $collapser = $(".navbar-collapse");
		var $toggler = $(".navbar-toggler");
		var $mainNavbar = $(".main-navbar");

		// Clone mobile menu
		var $navbarMobilePlaceholder = $(".navbar-mobile-placeholder");
		var $mobileNavbar = $mainNavbar.clone().removeClass('main-navbar').addClass('navbar-mobile');
		$navbarMobilePlaceholder.append($mobileNavbar);

		// // Clone current subnav to lowered container
		// var $navbarSubnavPlaceholder = $(".navbar-subnav-placeholder");
		// var $subnav = $mainNavbar.find(".nav-item.active .sub-menu, .nav-item.current-page-ancestor .sub-menu");
		// $navbarSubnavPlaceholder.append($subnav);


		// Add hover effect to main nav
		$(".nav-item").each(function () {
			var $navItem = $(this);
			$navItem.children(".nav-link").hover(
				function () {
					$navItem.addClass('hover')
				},
				function () {
					$navItem.removeClass('hover')
				}
			);
		});


		// Add toggle effect to toggler
		$toggler.click(function () {
			if ($collapser.hasClass("collapsing")) {
				return;
			}

			$mobileNavbar.slideToggle();
			$header.toggleClass("mobile-menu-visible");
			$toggler.toggleClass("collapsed");
		});


		// Find children in submenu. Make them slideToggle on click instead of opening the link
		$mobileNavbar.find(".nav-item").each(function () {
			var $children = $(this).find(".sub-menu");
			if ($children.length) {
				$children.hide();
				$(this).children(".nav-link").click(function (event) {
					event.preventDefault();
					$children.slideToggle();
				});
			}
		});

	})();


	/**
	 * Handle main nav position if page-slider is available
	 */
	(function () {
		const $body = $("body");

		if ($body.hasClass("page-slider")) {

			const $slider = $("#page-slider");

			const position = function() {
				let bottom = $slider.offset().top + $slider.height() - $(window).scrollTop();

				if (bottom > 0) {
					$body.addClass("main-nav-on-page");
				} else {
					$body.removeClass("main-nav-on-page");
				}
			};

			$(window).on("scroll resize", position);
			position();

			// const $mainNavbarContainer = $(".main-navbar-container");
			// $mainNavbarContainer.css("transition", "background-color 300ms, top 300ms");

		}

	})();


	// /**
	//  * Add object fit polyfill for IE
	//  */
	// objectFitPolyfill($('.block-hero-bgimg'));


	/**
	 * Smooth scroll anchor clicks
	 */
	$('a[href^="#"]').click(function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 50
		}, 600);
	});

});

