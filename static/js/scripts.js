function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 53.350140,
            lng: -6.266155
        }
    });
}

initMap();