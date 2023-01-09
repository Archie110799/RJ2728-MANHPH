import React from "react";
import Controls from "./Controls";
import Disc from "./Disc";
import Slider from "./Slider";

function Music() {
  const [currentTime, setCurrentTime] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const refPlayer = React.useRef<any>();
  const handlePlay = (actionName?: string) => {
    console.log("PARENT (Controls)", actionName);
    if (actionName === "play") {
      refPlayer?.current?.play();
      setPlaying(true);
    } else if (actionName === "pause") {
      refPlayer?.current?.pause();
      setPlaying(false);
    }
  };
  return (
    <div style={{ width: 500, textAlign: "center", margin: "auto" }}>
      <Disc
        imageUrl="assets/Song-Xa-Anh-Chang-De-Dang-Bao-Anh.jpeg"
        playing={playing}
      />

      <Slider
        max={195}
        currentValue={currentTime}
        onChange={(value: number | string) => {
          // console.log('PARENT (Slider)', value);
          refPlayer.current.currentTime = value;
        }}
      />

      <Controls onClick={handlePlay} />

      <div style={{ display: "none" }}>
        <audio
          controls
          src="assets/Song-Xa-Anh-Chang-De-Dang-Bao-Anh.mp3"
          ref={refPlayer}
          onTimeUpdate={(e) => {
            setCurrentTime(refPlayer?.current?.currentTime);
            // console.log(refPlayer?.current?.currentTime);
          }}
          onEnded={() => {
            // next song
          }}
        />
      </div>
    </div>
  );
}

export default Music;
