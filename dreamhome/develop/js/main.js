$(document).ready(function () {

	var url = window.location.href,
		search_param_1 = "utm_source",
		search_param_2 = "utm_medium",
		search_param_3 = "utm_campaign";

	if (url.indexOf(search_param_1) > -1 || url.indexOf(search_param_2) > -1 || url.indexOf(search_param_2)) {
    	var search_param_1_val,
    	 	search_param_2_val,
    	 	search_param_3_val,
    	 	values_arr = url.split("&");

		values_arr.forEach(function(item) {
		    if(item.indexOf(search_param_1) >= 0) {
	    		search_param_1_val = item.substring(item.indexOf(search_param_1) + search_param_1.length + 1, item.length);
		    }
		    if(item.indexOf(search_param_2) >= 0) {
	    		search_param_2_val = item.substring(item.indexOf(search_param_2) + search_param_2.length + 1, item.length);
		    }
		    if(item.indexOf(search_param_3) >= 0) {
	    		search_param_3_val = item.substring(item.indexOf(search_param_3) + search_param_3.length + 1, item.length);
		    }
		});
	}


	$(".js_burger").on("click", function() {
	    $("body").addClass("no_scroll");
		$(".js_modal_bg, .js_mobile_menu").show();
	});

	$(".mobile_nav a").on("click", function() {
	    $("body").removeClass("no_scroll");
		$(".js_modal_bg, .js_mobile_menu").hide();
	});

	$(".js_modal_bg, .js_close").on("click", function(e) {
	    e.preventDefault();
	    $("body").removeClass("no_scroll");
		$(".js_modal_bg, .js_succes_popup, .js_mobile_menu, .form_popup").hide();
	});

	$(".js_form_popup_call, .js_call_req").on("click", function() {
	    $("body").addClass("no_scroll");
		$(".js_modal_bg, .js_form_popup").fadeIn();
	});

	$('.material').materialForm();

	$('.popup_form').validate({
	    messages: {
		    modal_name: {
		      required: "Как Вас зовут?"
		    },
		    modal_phone: {
		      required: "Номер телефона"
		    }
	  },
	  submitHandler: function(form) {
		var send_obj = {
		  name: $(".form_popup #modal_name").val(),
		  phone: $(".form_popup #modal_phone").val()
		}
		if(search_param_1_val) {
			send_obj.utm_source = search_param_1_val;
		}
		if(search_param_2_val) {
			send_obj.utm_medium = search_param_2_val;
		}
		if(search_param_3_val) {
			send_obj.utm_campaign = search_param_3_val;
		}

	  	$.post("file.php", send_obj, function(data) {
				$(".to_order_modal #modal_phone, .to_order_modal #modal_name").val("").removeClass("filled");
				$(".create_new #phone, .create_new #name").val("").removeClass("filled");
				$("#modal_name-error, #modal_phone-error, .create_new #phone, .create_new #name").removeClass("error");
				$("body").addClass("no_scroll");
				$(".js_form_popup").hide();
				$(".js_modal_bg, .js_succes_popup").fadeIn();
			}, 'json');

	   }
	});
});
