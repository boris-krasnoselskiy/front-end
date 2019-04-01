window.onload = function() {
	setInterval(highLightNewsItem, 2000);
	$(".main_text").hide();
	$(".top_slider .slider_item").eq(0).find(".main_text").delay(1500).fadeIn(1500);

	$(".top_slider").slick({
		arrows: false,
		infinite: true,
		fade: true,
	  	// autoplay: true,
	  	speed: 2000,
  		autoplaySpeed: 6000
	});

	$(".top_slider").on("afterChange", function(event, slick, currentSlide, nextSlide) {
    	var curr_text = $(slick.$slides[currentSlide]).find(".main_text");
    	curr_text.fadeIn(1500);
	})

	$(".curr_lang").on("click", function() {
		$(".lang_wrap").toggleClass("opened");
		$(".js_langs").toggle();
	});

	var count = $(".top_slider .slider_item").not(".slick-cloned").length;

	$(".top_status").html("<span class='curr'>1</span>" + "<div class='divider'></div>" + "<span class='total'>" + count + "</span>");

	$('.top_slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	    var i = (currentSlide ? currentSlide : 0) + 1;
	    $(".top_status").html("<span class='curr'>" + i + "</span>" + "<div class='divider'></div>" + "<span class='total'>" + slick.slideCount + "</span>");
	});


	$('.slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	    var i = (currentSlide ? currentSlide : 0) + 1;
	    $(".status").html("<span class='curr'>" + i + "</span>" + "/" + "<span class='total'>" + slick.slideCount + "</span>");
	});

	$('.slider').slick({
		autoplay: true,
		infinite: true,
		speed: 1500,
		fade: true,
		responsive: [
		    // {
		    //   breakpoint: 1024,
		    //   settings: {
		    //     slidesToShow: 3,
		    //     slidesToScroll: 3,
		    //     infinite: true,
		    //     dots: true
		    //   }
		    // },
		    {
		      breakpoint: 740,
		      settings: {
		        arrows: false
		      }
		    }
  		]
	});

	var images = $('.images')
        current = 0;
        Rotator();
        function Rotator() {
           $(images[current]).addClass('active').delay(1000).removeClass('active');
           $(images[current]).queue(function() {
               current = current < images.length - 1 ? current + 1 : 0;
               Rotator();
               $(this).dequeue();
           });
        }
};

function highLightNewsItem() {
	if($(window).width() > 740) {
	    var $next = $('.news_item.active').removeClass('active').next('.news_item');
	    var $next_image = $('.img_holder.active').removeClass('active').next('.img_holder');
	    if($next.length) {
	    	$next.addClass('active');
	    }
	    if($next_image.length) {
			$next_image.addClass('active');
	    }
	    else {
	        $(".news_item:first").addClass('active');
	        $(".img_holder:first").addClass('active');
	    }
	}
};