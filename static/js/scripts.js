let map;
let markers = [];
let poi



function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: 53.350140,
            lng: -6.266155
        }
    });

    ;
    (async () => {
        const response = await fetch("static/js/data.json")
        const data = await response.json()
        for (let i = 0; i < data.length; i++) {
            let marker = new google.maps.Marker({
                position: {lat: parseFloat(data[i].lat), lng: parseFloat(data[i].lng)},
                title: data[i].title
            });
            markers.push(marker);
        };
    })()
    
    function setMarkers(map) {
        for (let i = 0; i < markers.length; i++) {
            setTimeout(function () {
                markers[i].setMap(map);
            }, i * 120);
        }
    }

    function showMarkers() {
        setMarkers(map);
    }

    function clearMarkers() {
        setMarkers(null);
    }

    let checkbox = document.querySelector("input[name=showMarker]");

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            showMarkers();
        } else {
            clearMarkers();
        }
    });

    // marker.addListener('click', () => {
    //     infoWindow.open(map, marker);
    // });

    // const infoWindow = new google.maps.InfoWindow({
    //     content: "<h3>Test Content</h3>"
    // });
}

//----- LOAD INITIALIZE FUNCTION -----//
google.maps.event.addDomListener(window, 'load', initMap);