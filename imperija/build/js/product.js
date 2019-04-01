$(document).ready(function() {

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

	$(".nav-pills a").on("click", function() {
		var id = $(this).attr('href');
		var href = $(this).attr("href");
		var url_id = id.substring(1, id.length);
		window.history.pushState('obj', 'newtitle', 'product.html#tab=' + url_id);

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
		}
		$(".nav-pills li").each(function() {
			$(this).removeClass("active");
		});

		$(".tab-pane").hide()
		$(".tab-pane" + href).show()

		$(".tab-pane").each(function() {
			$(this).removeClass("active");
		});


		$(".nav-pills").each(function() {
			$(this).find("[href='" + href + "']").closest("li").addClass("active");
		})
	});
});