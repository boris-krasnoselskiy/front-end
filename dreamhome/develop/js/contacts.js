$(document).ready(function() {
	init();

	// $('form.material').materialForm();
	// $('form').validate({
	// 	errorPlacement: function(error, element) {}
	// });
});

function init() {
    var position = $(".map").data("location"),
        marker_arr = position.split(','),
        zoom = $('#map').data("zoom"),
        latitude = marker_arr[0],
        longitude =  marker_arr[1];
    // var iconPath = '../build/imgs/pin.png';

    var mapOptions = {
        scrollwheel: false,
        zoom: parseInt(zoom),
        center: new google.maps.LatLng(latitude, longitude)
    };

    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map
        // icon: iconPath
    });
}