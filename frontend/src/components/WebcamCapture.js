import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";

function WebcamCapture({ onDetect }) {
  const webcamRef = useRef(null);

  const [boxes, setBoxes] = useState([]);


  useEffect(() => {
    let isRunning = false;
  
    const interval = setInterval(() => {
      if (!isRunning) {
        isRunning = true;
        capture().finally(() => {
          isRunning = false;
        });
      }
    }, 5); 
  
    return () => clearInterval(interval);
  }, []);

  const capture = async () => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      console.log("Captured image size:", image.width, image.height);
    };
    if (!imageSrc) return;  
  
    const response = await fetch("http://localhost:3000/detect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: imageSrc }),
    });
  
    const data = await response.json();
    onDetect(data.labels);
    setBoxes(data.boxes);
  };

  return (
    <div>
      <div style = {{ position: "relative", width: 640, height: 480, border: "2px solid black"}}>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" width={640} height={480} style = {{position: "absolute"}} />

      {boxes.map((box, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            top: box.y,
            left: box.x,
            width: box.w,
            height: box.h,
            border: "2px solid lime",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "20px",
            }}
          >
            {box.label}
          </div>
        </div>
      ))}
      </div>
      

    </div>
  );
}

export default WebcamCapture;
