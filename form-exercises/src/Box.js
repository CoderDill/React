const Box = ({ id, color = "blue", width = 100, height = 100, removeBox }) => {
  const remove = () => removeBox(id);
  return (
    <>
      <div
        key={id}
        id={id}
        style={{
          backgroundColor: color,
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
      <button onClick={remove}>X</button>
    </>
  );
};

export default Box;
