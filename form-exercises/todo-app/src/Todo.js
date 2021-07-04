const Todo = ({ id, name, removeTask }) => {
  const remove = () => removeTask(id);
  return (
    <>
      <li>{name}</li>
      <button onClick={remove}>X</button>
    </>
  );
};

export default Todo;
