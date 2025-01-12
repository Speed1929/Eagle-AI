import React, { useEffect, useRef } from 'react';

const LiveFaceDetection = () => {
  const videoRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((error) => console.error('Camera access error:', error));
  }, []);

  return (
    <div>
      <h2>Live Face Detection</h2>
      <video ref={videoRef} autoPlay style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default LiveFaceDetection;
