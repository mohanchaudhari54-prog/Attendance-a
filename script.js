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

            // Save to Google Sheet

            const data = {
                name: document.getElementById("empName").value,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                latitude: lat,
                longitude: lon
            };

            fetch("https://script.google.com/macros/s/AKfycbwxMYR8bM8gdY4SkN5e9xscmz7ensP__x_7taTFvc7R55kq-OCU6AOqorYPxQ4K8-POUg/exec", {
                method: "POST",
                body: JSON.stringify(data)
            })
            .then(response => response.text())
            .then(result => {
                console.log("Saved:", result);
            })
            .catch(error => {
                console.log("Error:", error);
            });

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

    alert("File Selected");

    const file = event.target.files[0];

    if (!file) return;

    const photo = document.getElementById("photo");

    photo.src = URL.createObjectURL(file);

    photo.style.display = "block";

});
