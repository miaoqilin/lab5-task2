function getGeolocation() {
    const x = document.getElementById('geolocation');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showGeolocation);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showGeolocation(position) {
    const x = document.getElementById('geolocation');
    x.innerHTML = "Latitude: " + position.coords.latitude + 
                  "<br>Longitude: " + position.coords.longitude;
}
