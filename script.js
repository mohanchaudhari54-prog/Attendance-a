// LOCATION

function getLocation() {

if (navigator.geolocation) {

navigator.geolocation.getCurrentPosition(

function(position){

let lat = position.coords.latitude;
let lon = position.coords.longitude;

document.getElementById("status").innerHTML =
"✅ Attendance Marked<br><br>" +
"Latitude : " + lat +
"<br>" +
"Longitude : " + lon;

},

function(error){

document.getElementById("status").innerHTML =
"❌ Location Permission Denied";

}

);

} else {

document.getElementById("status").innerHTML =
"❌ Geolocation Not Supported";

}

}


// SELFIE 

document.getElementById("selfie").addEventListener("change", function(event) {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {

        const photo = document.getElementById("photo");

        photo.src = e.target.result;
        photo.style.display = "block";

    };

    reader.readAsDataURL(file);

});
