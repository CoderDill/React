const TodoList = (props) => {
    return (
    <div>
      <h3>Todo List</h3>
            <ul>{props.todos.map(t => <li>{t}</li>)}</ul>
    </div>
  );
};
