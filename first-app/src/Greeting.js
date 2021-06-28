import React, { useState } from "react";

const Greeting = () => {
  const [isShowing, setIsShowing] = useState(true);
  return (
    <>
      {isShowing && <h1 className="Greeting">Hello,</h1>}

      <button className="Greeting-btn" onClick={() => setIsShowing(!isShowing)}>
        Toggle
      </button>
    </>
  );
};

export default Greeting;
