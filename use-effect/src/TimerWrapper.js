import { useState } from "react";
import Timer from "./Timer";

const TimerWrapper = () => {
  const [timerVisible, setTimerVisible] = useState(true);
  const toggleTimer = () => {
    setTimerVisible(!timerVisible);
  };
  return (
    <>
      <button onClick={toggleTimer}>Toggle Timer</button>
      {timerVisible && <Timer />}
    </>
  );
};

export default TimerWrapper;
