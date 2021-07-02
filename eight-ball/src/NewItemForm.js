import { useState } from "react";

const NewItemForm = ({ addItem }) => {
  const INITIAL_STATE = [
    {
      name: "",
      qty: "",
    },
  ];
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ ...formData });
    setFormData({
      name: "",
      qty: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Product</label>
        <input
          id="name"
          type="text"
          name="name"
          qty="qty"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <label htmlFor="qty">Quantity: {formData.qty}</label>
        <input
          id="qty"
          type="range"
          name="qty"
          min="1"
          max="10"
          value={formData.qty}
          onChange={handleChange}
        ></input>
        <button>Add Item</button>
      </form>
    </>
  );
};

export default NewItemForm;
