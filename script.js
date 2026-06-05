function getLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(
success,
error
);

}else{
alert("Location not supported");
}

}

function success(position){

let lat = position.coords.latitude;
let lon = position.coords.longitude;

document.getElementById("status").innerHTML =
"Location Captured <br> Lat: "
+ lat +
"<br> Lon: " +
lon;

}

function error(){
alert("Location Access Denied");
}

const video = document.getElementById('video');

navigator.mediaDevices.getUserMedia({
video: true
})
.then(function(stream){
video.srcObject = stream;
})
.catch(function(err){
console.log(err);
});

function capturePhoto(){

const canvas = document.getElementById('canvas');
const photo = document.getElementById('photo');

const context = canvas.getContext('2d');

context.drawImage(video,0,0,300,220);

const imageData = canvas.toDataURL('image/png');

photo.src = imageData;

}