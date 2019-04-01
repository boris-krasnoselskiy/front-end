$(document).ready(function() {

	$(".js_mh").matchHeight();

	$('.def_slider').slick({
		dots: true,
		autoHeight: true
	});

	$(".tabs a").click(function() {
    	$('.def_slider').slick("unslick");
		$(".tabs_content " + $(this).data('tab') + " .def_slider").slick({
			dots: true,
			adaptiveHeight: true
		});
		$(".tabs a").removeClass();
		$(this).addClass("active");
		$(".tabs_content > div:not('.top_line')").hide().removeClass("active");
		$(".tabs_content " + $(this).data('tab')).addClass("active").show();
		$('.active .slider')[0].slick.refresh()
	});

	var padding = ($(window).width() - $(".container").width()) / 2;

	if($(window).width() > 959) {
		$(".left_part").height($(".right_part").height());

		$(".left_part ul a, .left_part h3").css("padding-left", padding);
		$(".right_part .tab-pane").css("margin-right", padding);
	}

	$(window).resize(function() {
		$(".left_part ul a, .left_part h3").css("padding-left", padding);
		$(".right_part .tab-pane").css("margin-right", padding);
	});

});