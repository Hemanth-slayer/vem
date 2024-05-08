var video = document.querySelector("#videoplayer");

function stream(videoElement) {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(mediaStream) {
        videoElement.srcObject = mediaStream;
        videoElement.play();
      })
      .catch(function(error) {
        console.error("Error accessing the device camera:", error);
      });
  } else {
    console.error("getUserMedia not supported in this browser.");
  }
}

// Call the stream function passing the video element
stream(video);
