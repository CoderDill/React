import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [tasks, setTask] = useState({ name: "Walk Dog" });
  const addTask = (newTask) => {
    setTask((tasks) => [...tasks, { ...newTask }]);
  };

  return (
    <>
      <NewTodoForm addTask={addTask} />
      <ul>{tasks.map()}</ul>
    </>
  );
};

export default TodoList;
