import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answersList }) => {
  const newAns = () =>
    answersList[Math.floor(Math.random() * answersList.length)];

  const [ans, setMsg] = useState(newAns);
  const randMsg = () => setMsg(newAns);

  return (
    <>
      <div className="EightBall">
        <p className="EightBall-Msg">{ans.msg}</p>
      </div>
      <button className="EightBall-Btn" onClick={randMsg}>
        Get an Answer
      </button>
    </>
  );
};

export default EightBall;
