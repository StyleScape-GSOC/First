const webcamVideo = document.getElementById("webcamVideo");
const startCameraButton = document.getElementById("start-camera");

// Start camera when button is clicked
startCameraButton.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            webcamVideo.srcObject = stream;
        })
        .catch((error) => {
            console.log("Error accessing camera: ", error);
        });
});

// Example Filter Application
function applyFilter(filterName) {
    const videoCanvas = document.createElement('canvas');
    const context = videoCanvas.getContext('2d');
    context.drawImage(webcamVideo, 0, 0, videoCanvas.width, videoCanvas.height);
    context.font = '20px Arial';
    context.fillStyle = 'rgba(0, 0, 0, 0.5)';
    context.fillText(`Filter Applied: ${filterName}`, 10, 30);
}
