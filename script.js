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


// SELFIE PREVIEW

document
.getElementById("selfie")
.addEventListener("change", function(event){

const file = event.target.files[0];

if(file){

const reader = new FileReader();

reader.onload = function(e){

document.getElementById("photo").src =
e.target.result;

};

reader.readAsDataURL(file);

}

});
