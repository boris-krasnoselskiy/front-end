$(document).ready(function() {
	$('.eq_item').mouseenter(function() {
		// $(this).find(".shadow").addClass("hovered");

		$(this).find(".btn").addClass("hovered");
	});

	$('.eq_item').mouseleave(function() {
		// $(this).find(".shadow").removeClass("hovered");

		$(this).find(".btn").removeClass("hovered");
	});
});