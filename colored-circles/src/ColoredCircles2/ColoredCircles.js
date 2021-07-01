import React, { useState } from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButtons";

const ColoredCircles = () => {
  const [circles, setCircles] = useState([]);
  const addCircle = (color) => {
    setCircles((circles) => [...circles, color]);
  };

  // const changePosition = idx => {
  //   setCircles(circles => {
  //     const copy = [...circles];
  //     copy[idx].x = getRandom();
  //     copy[idx].y = getRandom();
  //     return copy;
  //   })
  // }

  return (
    <div>
      <ColorButtons
        addCircle={addCircle}
        options={["peachpuff", "lightsteelblue", "paleturquoise"]}
      />
      {/* <button onClick={randomize}>Randomize All!</button> */}
      {circles.map((color, idx) => (
        <Circle color={color} idx={idx} key={idx} />
      ))}
    </div>
  );
};

export default ColoredCircles;
