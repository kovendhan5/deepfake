// src/components/FaceScan.js
import * as faceapi from "face-api.js";
import React, { useRef } from "react";
import Webcam from "react-webcam";

const FaceScan = () => {
  const webcamRef = useRef(null);

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const img = new Image();
    img.src = imageSrc;

    const detection = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
    console.log("Captured Face Data:", detection.descriptor);
    // Save the descriptor in Firebase or your backend
  };

  return (
    <div>
      <h2>Face Scan</h2>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture Face</button>
    </div>
  );
};

export default FaceScan;
