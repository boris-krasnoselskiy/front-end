$(document).ready(function () {
	$('form.material').materialForm();
	$('form').validate({
		errorPlacement: function(error, element) {}
	});
	$(".js_style_mh").matchHeight();
});