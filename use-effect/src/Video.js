import { useState, useRef, useEffect } from "react";

function Video({
  src = "https://media.giphy.com/media/cdNSp4L5vCU7aQrYnV/giphy.mp4",
}) {
  const [speed, setSpeed] = useState(1);
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.playbackRate = speed;
  }, [speed]);
  return (
    <div>
      <video muted autoPlay loop ref={videoRef}>
        <source src={src} />
      </video>
      <div>
        <button onClick={() => setSpeed((s) => s / 2)}>Slow</button>
        <button onClick={() => setSpeed((s) => s * 2)}>Fast</button>
        <p>Current Speed: {speed}x</p>
      </div>
    </div>
  );
}

export default Video;
