let map;
let markers = [];

function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: 53.350140,
            lng: -6.266155
        }
    });

    const poi = [{
            position: new google.maps.LatLng(53.343716, -6.255002),
            title: "Trinity College"
        },
        {
            position: new google.maps.LatLng(53.341597, -6.260216),
            title: "Grafton Street"
        },
        {
            position: new google.maps.LatLng(53.338137, -6.259136),
            title: "St Stephen's Green"
        },
        {
            position: new google.maps.LatLng(53.339584, -6.258340),
            title: "Little Museum of Dublin"
        },
        {
            position: new google.maps.LatLng(53.344858, -6.260133),
            title: "Irish Houses of Parliament"
        },
        {
            position: new google.maps.LatLng(53.340204, -6.253884),
            title: "National Gallery of Ireland"
        },
        {
            position: new google.maps.LatLng(53.339667, -6.249104),
            title: "Merion Square"
        },
        {
            position: new google.maps.LatLng(53.349425, -6.260297),
            title: "General Post Office"
        },
        {
            position: new google.maps.LatLng(53.354154, -6.260088),
            title: "James Joyce Centre"
        },
        {
            position: new google.maps.LatLng(53.348733, -6.287730),
            title: "National Museum of Ireland - Decorative Arts & History"
        },
        {
            position: new google.maps.LatLng(53.357400, -6.329922),
            title: "Phoenix Park"
        },
        {
            position: new google.maps.LatLng(53.342108, -6.309739),
            title: "Kilmainham Gaol"
        },
        {
            position: new google.maps.LatLng(53.343363, -6.270851),
            title: "Christ Church Cathedral"
        },
        {
            position: new google.maps.LatLng(53.339556, -6.272270),
            title: "St Patrick's Cathedral"
        },
        {
            position: new google.maps.LatLng(53.342944, -6.267313),
            title: "Dublin Castle"
        },
        {
            position: new google.maps.LatLng(53.265520, -6.111880),
            title: "The Obelisk, Killiney"
        },
        {
            position: new google.maps.LatLng(53.358226, -6.195192),
            title: "Moai replica statue"
        }
    ];

    function createMarkers(locations) {
        for (let i = 0; i < locations.length; i++) {
            let marker = new google.maps.Marker({
                position: locations[i].position,
                title: locations[i].title,
            });
            markers.push(marker);
        };
    }

    createMarkers(poi);

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