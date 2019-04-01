$(document).ready(function () {
	google.maps.event.addDomListener(window, 'load', init);
});


function init() {
    var zoom = $('#map').data("zoom");
    var latitude = $('#map').data("latitude");
    var longitude = $('#map').data("longitude");
    var iconPath = '../build/imgs/pin.png';

    var mapOptions = {
        scrollwheel: false,
        zoom: parseInt(zoom),
        center: new google.maps.LatLng(latitude, longitude), // New York
        styles: [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#444444"}]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{"color": "#f2f2f2"}]
        }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{"saturation": -100}, {"lightness": 45}]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{"visibility": "simplified"}]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
        }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#bcdffe"}, {"visibility": "on"}]}]
    };

    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
        icon: iconPath
    });
}