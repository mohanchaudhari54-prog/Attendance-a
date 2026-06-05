// Location

function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            showPosition,
            showError
        );

    } else {

        document.getElementById("status").innerHTML =
            "Location not supported";

    }

}

function showPosition(position) {

    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    document.getElementById("status").innerHTML =
        "✅ Location Captured <br><br>" +
        "Latitude: " + lat +
        "<br>Longitude: " + lon;

}

function showError(error) {

    document.getElementById("status").innerHTML =
        "❌ Location Permission Denied";

}


// Camera

let video;

window.onload = function () {

    video = document.getElementById("video");

    if (!navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia) {

        document.getElementById("status").innerHTML =
            "❌ Camera Not Supported";

        return;
    }

    navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: "user"
        }
    })
    .then(function (stream) {

        video.srcObject = stream;

    })
    .catch(function (err) {

        document.getElementById("status").innerHTML =
            "❌ Camera Error : " + err.message;

    });

};


// Take Selfie

function capturePhoto() {

    const canvas =
        document.getElementById("canvas");

    const photo =
        document.getElementById("photo");

    const context =
        canvas.getContext("2d");

    context.drawImage(
        video,
        0,
        0,
        300,
        220
    );

    photo.src =
        canvas.toDataURL("image/png");

}
