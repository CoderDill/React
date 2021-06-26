import React from "react";

const Clicker = () => {
  const lasers = () => {
    console.log("Pew Pew");
  };
  return (
    <>
      <button onClick={lasers}>Fire!</button>
    </>
  );
};

export default Clicker;
