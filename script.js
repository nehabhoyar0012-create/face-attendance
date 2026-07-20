const video = document.getElementById("video");

function startCamera(){

navigator.mediaDevices.getUserMedia({video:true})

.then(function(stream){

video.srcObject = stream;

});

}

function capture(){

document.getElementById("result").innerHTML="Face Scanned Successfully";

}
