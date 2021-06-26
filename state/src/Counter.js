import React, { useState } from "react";

const Counter = () => {
  const [num, setCount] = useState(0);
  return (
    <>
      <h1>Count is: {num}</h1>
      <button onClick={() => setCount(num + 1)}>Add to count</button>
      <button onClick={() => setCount(num - 1)}>Subtract from count</button>
    </>
  );
};

export default Counter;
