$(document).ready(function () {

	$(".slider").slick({
	    slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		adaptiveHeight: true,
		arrows: true,
		responsive: [
	    {
	      breakpoint: 680,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: true
	      }
	    }]
	});

	$('.top_slider').slick({
		autoplay: true,
		infinite: false,
	    slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		responsive: [
	    {
	      breakpoint: 680,
	      settings: {
	      	autoplay: false,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    }]
	});

	$(window).on('scroll', function() {
      var scroll = $(window).scrollTop(),
   	   window_width = $(window).width(),
   	   header_height = $(".desktop_header").height();

	// 	if($(".advantage_item.second_item").offset().top + $(".advantage_item.second_item").height() > scroll) {
	// 		if(scroll < window_width) {
	// 	   	$(".js_hole").css({
	// 	   		'right': scroll,
	// 	   		'top': scroll
	// 	   	});
	// 	   	if($(".js_hole").offset().left < 0) {
	// 	   		var top = $(".js_hole").offset().top;
	// 		   	$(".js_hole").css({
	// 		   		// 'left': 0,
	// 		   		'right': 'inherit',
	// 		   		'top': top
	// 		   	});
	// 	   	}
	//    	} else {
	// 	   	$(".js_hole").css({
	// 	   		'right': 'inherit',
	// 	   		'top': scroll
	// 	   	});
	//    	}
	// }

   	if(scroll >= header_height) {
			$(".desktop_header").addClass("stuck");
   	} else {
			$(".desktop_header").removeClass("stuck");
   	}
	});

	$('.js_input, .js_select, .js_checkbox').styler();

	$(".jq-selectbox ul").mCustomScrollbar({
		theme: "dark-thin"
	});

	$('form.material').materialForm();
	$('form').validate({
		errorPlacement: function(error, element) {}
	});

	$(".js_style_mh").matchHeight();

	$(".js_modal_call").on("click", function() {
		var modal_id = $(this).attr("data-modal");
		console.log("call modal with id: " + modal_id);
	});

	$(".js_open_text").on("click", function() {
		$(this).siblings(".text_content").toggleClass("full");

      	$(this).text(function(i, text) {
          return text === "Читать полностью" ? "Скрыть" : "Читать полностью";
      	})
	});

	$(".js_open_review").on("click", function() {
		$(this).siblings(".review").toggleClass("full");

      	$(this).text(function(i, text) {
          return text === "Читать полностью" ? "Скрыть" : "Читать полностью";
      	})
	});

	setSchemeItemMargins();
	projectItemHover();
	showSchemeItem();
});

$(window).resize(function() {
  setSchemeItemMargins();
});

function setSchemeItemMargins() {
	if($(window).width() > 1300) {
		$(".scheme .dashed_bar").css({
			"width": $(".scheme .item").width() - $(".scheme .circle").width() - 18
		});
	}
}

function showSchemeItem() {
	// $('.scheme').each(function() {
 //    (function(scheme) {
 //      setInterval(function() {
 //        var _cur = scheme.find('.active').removeClass('active');
 //        var _next = _cur.next().length ? _cur.next() : scheme.find(".item").eq(0);
 //        _next.addClass('active');
 //      }, 2500);
 //    })($(this));
	// });
}

function projectItemHover() {
	$(".project_item").on("mouseenter", function() {
		console.log('enter');
		var self = $(this);

		$(this).find(".shadow").stop(true).fadeIn();

		$(this).find(".modal_call.first")
			   	 .stop(true)
			   	 .animate({
				    opacity: 1,
				    top: "-=7",
				    height: "65px"
				  }, 900)
			     // .removeClass("fadeOutUp")
			     .show();
			     // .addClass('animated fadeInUp');

		$(this).find(".modal_call.second")
			     .stop(true)
 			   	 .animate({
				    opacity: 1,
				    top: "+=20",
				    height: "75px"
				  }, 900)
			     .show()
			     // .addClass('animated fadeInUp');
	});

	$(".project_item").on("mouseleave", function() {
		var self = $(this);

		$(this).find(".modal_call.first")
			     .stop(true)
  			   	 .animate({
				    opacity: 0,
				    top: "+=7",
				    height: "toggle"
				  }, 500)
			     // .removeClass("fadeInUp")
			     // .addClass('fadeOutUp');

		setTimeout(function() {
			self.find(".modal_call.second")
				  .stop(true)
			   	   .animate({
				    opacity: 0,
				    top: "-=20",
				    height: "0"
				  }, 500)
			    // .removeClass("fadeInUp")
			    // .addClass('fadeOutUp');
	  	}, 500);

		$(this).find(".shadow")
				 .stop(true)
			     .delay(500)
			     .fadeOut("slow");
	});
}