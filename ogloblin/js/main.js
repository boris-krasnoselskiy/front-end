$(document).ready(function() {

	if($('#tab-block').length) {
	  var tabWrapper = $('#tab-block'),
	      tabMnu = tabWrapper.find('.tab-mnu  li'),
	      tabContent = tabWrapper.find('.tab-cont > .tab-pane');

		  tabContent.not(':first-child').hide();

		  tabMnu.each(function(i) {
		    $(this).attr('data-tab','tab'+i);
		  });
		  tabContent.each(function(i) {
		    $(this).attr('data-tab','tab'+i);
		  });

		  tabMnu.click(function() {
		    var tabData = $(this).data('tab');
		    tabWrapper.find(tabContent).hide();
		    tabWrapper.find(tabContent).filter('[data-tab='+tabData+']').show();
		  });

		  $('.tab-mnu > li').click(function(){
		    var before = $('.tab-mnu li.active');
		    before.removeClass('active');
		    $(this).addClass('active');
		   });
	}

	$('#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4').click(function() {
		$("body").addClass("no-scroll");
		$(this).toggleClass('open');
		$(".js_opened_menu").toggleClass('show hiden');
		$(".js_shadow").toggle();
	});

	$('.js_contact_call').click(function() {
		$(".js_opened_contacts").toggleClass('show hiden');
		$(".js_shadow").toggle();
	});

	$('.js_contact_modall_call').click(function() {
		$(".js_opened_contacts").toggleClass('show hiden');
		$(".js_shadow").toggle();
	});

	$('.js_shadow').click(function() {
		$(this).hide();
		$("body").removeClass("no-scroll");
		$(".js_opened_menu, .js_opened_contacts").removeClass('show').addClass('hiden');
		$("#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4").removeClass('open');
	});

	if($(window).width > 992) {
		$('.js_opened_contacts .close_btn').click(function() {
			$("body").removeClass("no-scroll");
			$('.js_shadow').hide();
			$(".js_opened_menu, .js_opened_contacts").removeClass('show').addClass('hiden');
			$("#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4").removeClass('open');
		});
	} else {
		$('.js_opened_contacts .close_btn').click(function() {
			$("body").removeClass("no-scroll");
			$(".js_opened_contacts").removeClass('show').addClass('hiden');
		});
	}

	$('.js_opened_menu .close_btn').click(function() {
		$("body").removeClass("no-scroll");
		$('.js_shadow').hide();
		$(".js_opened_menu, .js_opened_contacts").removeClass('show').addClass('hiden');
		$("#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4").removeClass('open');
	});

    $(".js_to_top").on("click", function() {
    	$('html,body').animate({ scrollTop: 0 }, 'slow');
    });

    $(".js_to_down").on("click", function() {
    	$('html,body').animate({ scrollTop: $(".about").offset().top }, 'slow');
    });
});