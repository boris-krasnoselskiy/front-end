$(document).ready(function() {
	$('form.material').materialForm();
	$('form').validate({
		errorPlacement: function(error, element) {}
	});

	$('.slider').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true
	});

	var padding = ($(window).width() - $(".container").width()) / 2;

	if($(window).width() > 959) {
		$(".description .white_border").css("right", padding);
	}

});