import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const addItem = (newBox) => {
    setBoxes((boxes) => [...boxes, newBox]);
  };
  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };
  return (
    <>
      <NewBoxForm addItem={addItem} />
      <ul>
        {boxes.map(({ id, color, width, height }) => (
          <Box
            key={id}
            id={id}
            color={color}
            width={width}
            height={height}
            removeBox={removeBox}
          />
        ))}
      </ul>
    </>
  );
};

export default BoxList;
