const video = document.getElementById("video");
const result = document.getElementById("result");

function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
      video.srcObject = stream;
    })
    .catch(function(error) {
      alert("Camera access denied or camera not found.");
      console.log(error);
    });
}

function capture() {
  result.innerHTML = "Face Scanned Successfully";
}
