$(document).ready(function(){
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
		autoplay: false
	});
	$('.slider-nav').slick({
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: true,
		focusOnSelect: true
	});

	$(".burger").on('click',function(){
		$(".burger__icon").toggleClass("open");
		$(".header__menu").toggleClass("is-open");
	});
	$(".menu__link").on('click',function(){
		$(".burger__icon").toggleClass("open");
		$(".header__menu").toggleClass("is-open");
	});

	$('a[href^="#"]').click(function (){
    	var elementClick = $(this).attr("href");
    	var destination = $(elementClick).offset().top - 60;
    	jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
    	return false;
  });
})