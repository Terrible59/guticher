$('input[type="tel"]').mask("+7 (999) 999-99-99");

$('.header-menu-burger').click(function(event) {
	$(this).toggleClass('header-menu-burger_active');
	$(this).siblings('.header-menu').fadeToggle(800);
	if($(this).hasClass('header-menu-burger_active')){
		$('body').css({
			overflow: 'hidden',
		});
	} else{
		$('body').css({
			overflow: 'visible',
			'overflow-x': 'hidden'
		});
	}
});

$('.header-menu-list-arrow').click(function(event) {
	$(this).toggleClass('header-menu-list-arrow_active');
	$(this).siblings('.header-menu-list-sublist').slideToggle();
});

$('.about-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	fade: true,
	arrows: false,
	dots: false,
	autoplay: true,
	autoplaySpeed: 4000,
	accessibility: false,
	adaptiveHeight: true,
	responsive: [
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: false
		}
	},
	]
});

$('.about-slider-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	asNavFor: '.about-slider',
	focusOnSelect: false,
}); 

$('.furniture-slider').slick({
	slidesToShow: 10,
	slidesToScroll: 1,
	infinite: true,
	arrows: true,
	appendArrows: $('.furniture-content'),
	prevArrow: '<button type="button" class="slick-prev furniture-slider__arrow furniture-slider__arrow_left"></button>',
	nextArrow: '<button type="button" class="slick-next furniture-slider__arrow furniture-slider__arrow_right"></button>',
	dots: false,
	responsive: [
	{
		breakpoint: 1600,
		settings: {
			slidesToShow: 8,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 1200,
		settings: {
			slidesToShow: 6,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 991,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 1,
		}
	},
	]
});

$('.projects-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	infinite: true,
	arrows: false,
	responsive: [
	{
		breakpoint: 1600,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 991,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	},
	]
});

$('.news-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	infinite: true,
	arrows: false,
	dots: false,
	responsive: [
	{
		breakpoint: 991,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	},
	]
});

$('.single-product-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	arrows: false,
	dots: false,
});

$('.single-product-slider-nav').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	infinite: true,
	arrows: false,
	dots: false,
	asNavFor: '.single-product-slider',
	focusOnSelect: false,
	responsive: [
	{
		breakpoint: 991,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 1,
		}
	},
	]
});

$('.about-slider-nav .slick-slide').on('click', function (event) {
	$('.about-slider').slick('slickGoTo', $(this).data('slickIndex'));
});

$('.single-product-slider-nav .slick-slide').on('click', function (event) {
	$('.single-product-slider').slick('slickGoTo', $(this).data('slickIndex'));
});

$('.about-slider').on('afterChange', function(event, slick, currentSlide){
	$('.about-slider-nav .slick-slide').not($(this)).removeClass('slick-current');
	$('.about-slider-nav .slick-slide[data-slick-index="' + String(currentSlide) + '"]').addClass('slick-current');
});

$('.single-product-fabric__title').click(function(event) {
	$('.single-product-fabric-list').slideToggle();
	$(this).toggleClass('single-product-fabric__title_active');
});

if($('#map').length){
	ymaps.ready(init);

	function init(){     
		var myMap;
		
		myMap = new ymaps.Map("map", {
			center:[43.045737, 44.659182] ,
			zoom: 13.5,
			controls: []
		});
		
		myMap.behaviors.disable('scrollZoom');
		myMap.behaviors.disable('drag');
		
		myMap.controls.add("zoomControl", {
			position: {top: 0, left: 0}
		});
		
		var myPlacemark = new ymaps.Placemark([43.045737, 44.659182] , {},
			{ iconLayout: 'default#image',
			iconImageHref: '../img/icons/baloon.svg',
			iconImageSize: [60, 80],
			iconImageOffset: [-20, -47] });
		
		myMap.geoObjects.add(myPlacemark);
	}
}

window.onload = function() {
	$("[data-let]").hover(function(){
		var letter = $("#let"+$(this).attr("data-let"));
		letter.css("color", letter.attr("data-color"));
	},
	function(){
		$("#let"+$(this).attr("data-let")).css("color", "#f5f5f5");
	});
};