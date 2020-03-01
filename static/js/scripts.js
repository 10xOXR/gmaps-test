let map;
let marker;

function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 53.350140,
            lng: -6.266155
        }
    });

    marker = new google.maps.Marker({
        position: {
            lat: 53.346464,
            lng: -6.306677
        },
        animation: google.maps.Animation.DROP,
        title: 'This is a place'
    });
    
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });

    const infoWindow = new google.maps.InfoWindow({
        content: "<h3>Test Content</h3>"
    });
}

let checkbox = document.querySelector("input[name=showMarker]");

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        marker.setMap(map);
    } else {
        marker.setMap(null);
    }
});

//----- LOAD INITIALIZE FUNCTION -----//
google.maps.event.addDomListener(window, 'load', initMap);