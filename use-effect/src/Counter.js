import { useState, useEffect } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum((n) => n + 1);
  };

  useEffect(() => {
    document.title = `Hi${"!".repeat(num)}`;
  }, [num]);
  return (
    <>
      Get excited!
      <button onClick={increment}>Get More Excited!</button>
      <p>{num}</p>
    </>
  );
};

export default Counter;
