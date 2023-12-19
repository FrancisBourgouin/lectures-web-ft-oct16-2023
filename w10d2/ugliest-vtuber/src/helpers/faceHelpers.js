import * as vision from "@mediapipe/tasks-vision";
const { FaceLandmarker, FilesetResolver } = vision;

let lastVideoTime = -1;

export const createFaceLandmarker = async () => {
  const filesetResolver = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
  );
  const faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
      delegate: "GPU",
    },
    outputFaceBlendshapes: true,
    runningMode: "VIDEO",
    numFaces: 1,
  });

  return faceLandmarker;
};

export const predictWebcam = async (faceLandmarker, video, faceCallback) => {
  let startTimeMs = performance.now();
  let results;
  if (lastVideoTime !== video.currentTime) {
    lastVideoTime = video.currentTime;
    results = faceLandmarker.detectForVideo(video, startTimeMs);
  }

  if (results && results.faceLandmarks) {
    const vtuberParams = {
      browDownLeft: results.faceBlendshapes[0].categories.find(
        (cat) => cat.categoryName === "browDownLeft"
      ).score,
      browDownRight: results.faceBlendshapes[0].categories.find(
        (cat) => cat.categoryName === "browDownRight"
      ).score,

      eyeBlinkLeft: results.faceBlendshapes[0].categories.find(
        (cat) => cat.categoryName === "eyeBlinkLeft"
      ).score,
      eyeBlinkRight: results.faceBlendshapes[0].categories.find(
        (cat) => cat.categoryName === "eyeBlinkRight"
      ).score,

      jawOpen: results.faceBlendshapes[0].categories.find(
        (cat) => cat.categoryName === "jawOpen"
      ).score,
    };

    faceCallback(vtuberParams);
  }

  window.requestAnimationFrame(() => predictWebcam(faceLandmarker, video, faceCallback));
};
