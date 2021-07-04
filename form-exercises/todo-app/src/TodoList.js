import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [tasks, setTask] = useState([{ name: "Walk Dog" }]);
  const addTask = (newTask) => {
    setTask((tasks) => [...tasks, { ...newTask }]);
  };
  const removeTask = (id) => {
    setTask((tasks) => tasks.filter((task) => task.id !== id));
  };
  return (
    <>
      <NewTodoForm addTask={addTask} />
      <ul>
        {tasks.map(({ id, name }) => (
          <Todo key={id} id={id} name={name} removeTask={removeTask} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
