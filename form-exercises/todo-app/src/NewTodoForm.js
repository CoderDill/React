import { useState } from "react";

const NewTodoForm = ({ addTask }) => {
  const [formData, setFormData] = useState([{ name: "Walk Dog" }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...formData });
    setFormData({
      name: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text"></input>
      </form>
    </>
  );
};

export default NewTodoForm;
