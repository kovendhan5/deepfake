// src/components/VideoUpload.js
import React from "react";

const VideoUpload = () => {
  const handleUpload = (event) => {
    const file = event.target.files[0];
    console.log("Uploaded video:", file);
    // Send the file to the backend for deepfake analysis
  };

  return (
    <div>
      <h2>Upload Video for Deepfake Detection</h2>
      <input type="file" accept="video/*" onChange={handleUpload} />
    </div>
  );
};

export default VideoUpload;
