import { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ addTask }) => {
  const [formData, setFormData] = useState([{ name: "Walk Dog" }]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...formData, id: uuid() });
    setFormData({
      name: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Add Task</label>
        <input
          name="name"
          type="text"
          placeholder="Add Task"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
};

export default NewTodoForm;
