import React, { useState } from "react";
import WebcamCapture from "./components/WebcamCapture";
import MyNavBar from "./components/navbar";

function App() {
  const [labels, setLabels] = useState([]);

  return (
    <div className="App">
      <MyNavBar/>
      <div className="d-flex justify-content-center mt-5">
        <WebcamCapture onDetect={setLabels} />
      </div>
    </div>
  );
}

export default App; 