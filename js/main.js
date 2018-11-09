$(document).ready(function () {
	"use strict";

	/*==============================
	Menu
	==============================*/
	$('.header__btn').on('click', function() {
		$('.menu').toggleClass('menu--active');
	});

	/*==============================
	Slider
	==============================*/
	$('.slider .owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 500,
		autoplay: true,
		autoplayTimeout: 6000,
	});
	$('.slider__img').each(function(){
		if ($(this).attr('data-bg')){
			$(this).css({
				'background': 'url(' + $(this).data('bg') + ')',
				'background-position': 'center center',
				'background-repeat': 'no-repeat',
				'background-size': 'cover'
			});
		}
	});
	$('.slider__nav .next').on('click', function() {
		$('.slider .owl-carousel').trigger('next.owl.carousel');
	});
	$('.slider__nav .prev').on('click', function() {
		$('.slider .owl-carousel').trigger('prev.owl.carousel');
	});

	/*==============================
	Carousel
	==============================*/
	$('.carousel .owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 500,
		responsive:{
			0:{
				items:1
			},
			360:{
				items:1
			},
			768:{
				items:3
			},
			992:{
				items:4
			},
			1200:{
				items:4
			}
		}
	});
	$('.carousel__nav--next').on('click', function() {
		$('.carousel .owl-carousel').trigger('next.owl.carousel');
	});
	$('.carousel__nav--prev').on('click', function() {
		$('.carousel .owl-carousel').trigger('prev.owl.carousel');
	});

	/*==============================
	Masonry
	==============================*/
	$('.masonry').each(function(){
		if ($(this).attr('data-bg')){
			$(this).css({
				'background': 'url(' + $(this).data('bg') + ')',
				'background-position': 'center center',
				'background-repeat': 'no-repeat',
				'background-size': 'cover'
			});
		}
	});

	/*==============================
	Tooltip
	==============================*/
	$('[data-toggle="tooltip"]').tooltip();

	/*==============================
	Filter
	==============================*/
	$('.filter__open, .filter__close').on('click', function() {
		$('.filter__content').toggleClass('filter__content--open');
	});

	/*==============================
	Spinner
	==============================*/
	$('.spinner').spinner({
		min: 1,
		max: 10
	});

	/*==============================
	Payment
	==============================*/
	$('.delivery :input').click(function () {
		$('.delivery :input').each(function() {
			if ($('#cash').is(":checked")) {
				$('.total__cash').addClass('active');
			} else {
				$('.total__cash').removeClass('active');
			}
		});
	});

	/*==============================
	Thumbnail slider
	==============================*/
	var slider = $('.thumbnail-slider').lightSlider({
		gallery:true,
		item:1,
		loop:true,
		speed:500,
		thumbItem:4,
		vThumbWidth:85,
		slideMargin:0,
		galleryMargin:15,
		thumbMargin:15,
		controls:false,
		currentPagerPosition:'left',
		responsive : [
			{
				breakpoint:767,
					settings: {
						thumbMargin:10,
					}
			}
		],
		onSliderLoad: function(el) {
		el.lightGallery({
			selector: '.thumbnail-slider .lslide'
		});
		}
	});

	/*==============================
	Video
	==============================*/
	$('.video').each(function(){
		if ($(this).attr('data-bg')){
			$(this).css({
				'background': 'url(' + $(this).data('bg') + ')',
				'background-position': 'center center',
				'background-repeat': 'no-repeat',
				'background-size': 'cover'
			});
		}
	});

	/*==============================
	Modal
	==============================*/
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.modal__close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});