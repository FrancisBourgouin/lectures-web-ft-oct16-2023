export default function Face(props) {
  const { vtuberParams } = props;

  //   {
  //     "browDownLeft": 0.03983674570918083,
  //     "browDownRight": 0.009383472613990307,
  //     "eyeBlinkLeft": 0.41146203875541687,
  //     "eyeBlinkRight": 0.10691307485103607,
  //     "jawOpen": 0.02503190189599991
  // }

  return (
    <div className="Face">
      <div
        className="leftEye"
        style={{ height: 10 - vtuberParams.eyeBlinkLeft * 10 + "vmin" }}
      >
        <div
          className="leftBrow"
          style={{ top: -20 - vtuberParams.browDownLeft * 100 + "px" }}
        ></div>
      </div>
      <div
        className="rightEye"
        style={{ height: 10 - vtuberParams.eyeBlinkLeft * 10 + "vmin" }}
      >
        <div
          className="rightBrow"
          style={{ top: -20 - vtuberParams.browDownRight * 100 + "px" }}
        ></div>
      </div>
      <div className="mouth" style={{ height: vtuberParams.jawOpen * 20 + "vmin" }}></div>
    </div>
  );
}
