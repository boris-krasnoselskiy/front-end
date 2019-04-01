$(document).ready(function() {

	$('.js_input, .js_select, .js_checkbox').styler();

	$(".jq-selectbox ul").mCustomScrollbar({
		theme: "dark-thin"
	});

	$('form.material').materialForm();
	$('form').validate({
		errorPlacement: function(error, element) {}
	});

	$('.def_slider').slick({
		dots: true,
		responsive: [
			{
				breakpoint: 1300,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
			},
			{
				breakpoint: 960,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
			},
	    {
	      breakpoint: 680,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('.room_slider').slick({
    centerMode: true,
    adaptiveHeight: true,
		centerPadding: '150px',
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		infinite: true,
		responsive: [
			{
				breakpoint: 1300,
	      settings: {
	      	centerMode: false,
	        slidesToShow: 4,
	        slidesToScroll: 1
	      }
			},
			{
				breakpoint: 960,
	      settings: {
	      	centerMode: false,
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
			},
	    {
	      breakpoint: 680,
	      settings: {
	      	centerMode: false,
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	// $(".js_floor_mh").matchHeight();

	$(".price_block").each(function() {
		if(!$(this).find(".js_price").text()) {
			$(this).hide();
		}
	});

	if($(".countertop_slider .slider_item").length <= 4) {
		$(".countertop_slider").slick('unslick');
	} else {
		$(".countertop_slider").slick({
			dots: false,
	    centerMode: true,
	    adaptiveHeight: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true
		});
	}

	if($(".door_slider .slider_item").length < 4) {
		$(".door_slider").slick('unslick');
	} else {
		$(".door_slider").slick({
		    centerMode: true,
		    adaptiveHeight: true,
	  		centerPadding: '150px',
			dots: false,
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: true
		});
	}

});