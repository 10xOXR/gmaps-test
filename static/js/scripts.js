function initMap() {

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 53.350140,
            lng: -6.266155
        }
    });

    const marker = new google.maps.Marker({
        position: {lat: 53.346464, lng: -6.306677},
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Where ze bears are!'
    });
}

initMap();