$(document).ready(function() {
	$(".slider").slick({
		autoplay: true,
		autoplaySpeed: 3500,
	    slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		adaptiveHeight: true,
		arrows: true,
		responsive: [
    	{
	      breakpoint: 960,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        arrows: true
	      }
	    },
	    {
	      breakpoint: 680,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: true
	      }
	    }]
	});
});