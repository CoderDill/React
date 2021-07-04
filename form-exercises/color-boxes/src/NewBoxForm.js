import { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ addItem }) => {
  const [formData, setFormData] = useState({
    color: "",
    width: "",
    height: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ ...formData, id: uuid() });
    setFormData({
      color: "",
      width: "",
      height: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="NewBoxForm">
        <label htmlFor="color">Add Color</label>
        <input
          name="color"
          type="text"
          placeholder="Add Color"
          value={formData.color}
          onChange={handleChange}
        />
        <label htmlFor="newBox">Add Width</label>
        <input
          name="width"
          type="text"
          placeholder="Add Width"
          value={formData.width}
          onChange={handleChange}
        />
        <label htmlFor="newBox">Add Height</label>
        <input
          name="height"
          type="text"
          placeholder="Add Height"
          value={formData.height}
          onChange={handleChange}
        />
        <button>Add Box</button>
      </form>
    </>
  );
};

export default NewBoxForm;
