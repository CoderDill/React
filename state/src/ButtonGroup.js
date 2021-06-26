import React from "react";

const ButtonGroup = () => {
  const printColor = (color) => {
    console.log(`you clicked ${color.toUpperCase()}`);
  };
  return (
    <>
      <button onClick={() => printColor("Red")}>Red</button>
      <button onClick={() => printColor("Yellow")}>Yellow</button>
      <button onClick={() => printColor("Green")}>Green</button>
    </>
  );
};

export default ButtonGroup;
