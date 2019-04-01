$(document).ready(function() {
	$(".js_rewievs").each(function() {
	    $(this).find("p").first().prepend("<span class='inserted left blue_color'>«</span>");
	    $(this).find("p").last().html($(this).find("p").last().html() +
	    	"<span class='inserted right blue_color'>»</span>");
	    });

  $(".js_read_more").on("click", function() {
  	$(this).siblings("img").toggleClass('rotated');
  	$(this).text(function(i, text) {
  		console.log($(this).text());
      return text === "Скрыть" ? "Подробнее" : "Скрыть";
  	});
  	$(this).closest(".read_more_wrap").siblings(".js_rewievs").toggleClass("clipped");
  });
});