const long = document.getElementById("long");
const lati = document.getElementById("lati");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showLocation, errorLocation);
} else {
  console.log("geolocation not suported");
}

function showLocation(pos) {
  long.innerHTML = `Latitude: ${pos.coords.longitude}`;
  lati.innerHTML = `Longitude: ${pos.coords.latitude}`;
}

function errorLocation() {
  console.log("Error trying to find location");
}
