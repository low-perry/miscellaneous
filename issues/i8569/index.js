(() => {
  // The width and height of the captured photo. We will set the
  // width to the value defined here, but the height will be
  // calculated based on the aspect ratio of the input stream.
  const width = 320; // We will scale the photo width to this
  let height = 0; // This will be computed based on the input stream

  // |streaming| indicates whether or not we're currently streaming
  // video from the camera. Obviously, we start at false.
  let streaming = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.
  let video = null;
  let canvas = null;
  let photo = null;
  let startButton = null;

  function showViewLiveResultButton() {
    if (window.self !== window.top) {
      // Ensure that if our document is in a frame, we get the user
      // to first open it in its own tab or window. Otherwise, it
      // won't be able to request permission for camera access.
      document.querySelector(".content-area").remove();
      const button = document.createElement("button");
      button.textContent = "Open example in new window";
      document.body.append(button);
      button.addEventListener("click", () =>
        window.open(
          location.href,
          "MDN",
          "width=850,height=700,left=150,top=150",
        ),
      );
      return true;
    }
    return false;
  }

  function startup() {
    if (showViewLiveResultButton()) {
      return;
    }
    video = document.getElementById("video");
    canvas = document.getElementById("canvas");
    photo = document.getElementById("photo");
    startButton = document.getElementById("start-button");

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });

    video.addEventListener(
      "canplay",
      (ev) => {
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth / width);

          // Firefox currently has a bug where the height can't be read from
          // the video, so we will make assumptions if this happens.
          if (isNaN(height)) {
            height = width / (4 / 3);
          }

          video.setAttribute("width", width);
          video.setAttribute("height", height);
          canvas.setAttribute("width", width);
          canvas.setAttribute("height", height);
          streaming = true;
        }
      },
      false,
    );

    startButton.addEventListener(
      "click",
      (ev) => {
        takePicture();
        ev.preventDefault();
      },
      false,
    );

    clearPhoto();
  }

  // Fill the photo with an indication that none has been captured.
  function clearPhoto() {
    const context = canvas.getContext("2d");
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  }

  // Capture a photo by fetching the current contents of the video
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.
  function takePicture() {
    const context = canvas.getContext("2d");
    if (width && height) {
      // Set canvas dimensions
      canvas.width = width;
      canvas.height = height;
      
      // Get the computed CSS filter from the video element.
      // For example, it might return "grayscale(100%)"
      const videoStyles = window.getComputedStyle(video);
      const filterValue = videoStyles.getPropertyValue("filter");
  
      // Apply the filter to the canvas drawing context.
      // If there's no filter (i.e., it returns "none"), default to "none".
      context.filter = filterValue !== "none" ? filterValue : "none";
  
      // Draw the video frame onto the canvas.
      context.drawImage(video, 0, 0, width, height);
  
      // Convert the canvas drawing (now filtered) into a PNG image.
      const dataUrl = canvas.toDataURL("image/png");
      photo.setAttribute("src", dataUrl);
  
      // Optionally, reset the context filter if you need to draw without filter later.
      context.filter = "none";
    } else {
      clearPhoto();
    }
  }

  // Set up our event listener to run the startup process
  // once loading is complete.
  window.addEventListener("load", startup, false);
})();
