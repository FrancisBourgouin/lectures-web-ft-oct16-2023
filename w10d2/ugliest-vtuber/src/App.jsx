import { useRef, useState } from "react";
import "./App.css";
import Face from "./component/Face";
import Webcam from "react-webcam";
import { createFaceLandmarker, predictWebcam } from "./helpers/faceHelpers";

function App() {
  const [count, setCount] = useState(0);
  const [vtuberParams, setVtuberParams] = useState(null);
  const [modelReady, setModelReady] = useState(false);
  const webcamRef = useRef();
  console.log(webcamRef.current);

  const startVTuber = () => {
    createFaceLandmarker()
      .then((faceLandmarker) => {
        setModelReady(true);
        predictWebcam(faceLandmarker, webcamRef.current.video, setVtuberParams);
      })
      .catch((err) => console.log("OH NO", err));
  };

  return (
    <>
      {modelReady && <Face vtuberParams={vtuberParams} />}
      <Webcam ref={webcamRef} onUserMedia={startVTuber} style={{ width: 500 }} />
    </>
  );
}

export default App;
