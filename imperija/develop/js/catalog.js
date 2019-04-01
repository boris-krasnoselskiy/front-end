$(document).ready(function() {
	$(".js_see_all").on("click", function() {
		$(this).siblings("i").toggleClass("rotated");

		$(this).closest(".info").find(".text_wrap").toggleClass("opened");

      	$(this).text(function(i, text) {
          return text === "Скрыть" ? "Читать далее" : "Скрыть";
      	})
	});

	$(".nav-pills li").on("click", function() {
		var id = $(this).find("a").attr('href');
		var url_id = id.substring(1, id.length);
		console.log(url_id);
		window.history.pushState('obj', 'newtitle', 'tools.html#tab=' + url_id);

		if (url.indexOf("#tab") > -1) {
	    	var tabs = url.substring(url.indexOf("#tab") + 5, url.length),
			    first_tab,
			    second_tab;

			    if(tabs.indexOf("-") == -1) {
			    	first_tab = tabs.substring(0, tabs.length);
			    } else {
					first_tab = tabs.substring(0, tabs.indexOf("-"));
			    	second_tab = tabs.substring(tabs.indexOf("-") + 1, tabs.length);

			    	$(".sub_tabs li").removeClass("active");
			    	$(".sub_tabs a[href='#" + second_tab + "']").parent().addClass("active");
			    }

				$(".broad_nav_desk li").removeClass("active");
				$(".tab-pane").removeClass("active");
				$("a[href='#" + first_tab + "']").parent().addClass("active");
				$(".tab-pane#" + first_tab).addClass("active");
		}
	});

	var url = window.location.href;

	if(url.indexOf("#tab") > -1) {
    	var tabs = url.substring(url.indexOf("#tab") + 5, url.length),
		    first_tab,
		    second_tab;

		    if(tabs.indexOf("-") == -1) { //если нет второго ид
		    	first_tab = tabs.substring(0, tabs.length);
		    } else { //если есть
				first_tab = tabs.substring(0, tabs.indexOf("-"));
		    	second_tab = tabs.substring(tabs.indexOf("-") + 1, tabs.length);

		    	$(".sub_tabs li").removeClass("active");
		    	$(".sub_tabs a[href='#" + second_tab + "']").parent().addClass("active");
		    }

			$(".broad_nav_desk li").removeClass("active");
			$(".tab-pane").removeClass("active");
			$("a[href='#" + first_tab + "']").parent().addClass("active");
			$(".tab-pane#" + first_tab).addClass("active");

		if($(".sub_tabs").length && tabs.indexOf("-") > -1) {// если есть вложенные табы, и 2 ид есть в урле
    		$(".tab-pane.active").find(".tab-pane").removeClass("active");
    		$(".tab-pane").find(".tab-pane#" + second_tab).addClass("active");
		} else if($(".sub_tabs").length && tabs.indexOf("-") == -1) { // если есть вложенные табы, но 2 ид нет в урле
			$(".tab-pane.active").find(".tab-pane").eq(0).addClass("active");
		}
	}

});