import { useState } from "react";

const UserForm = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    alert(`Created user: ${username} email: ${email} Password: ${password}`);
    setFormData(initialState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <lable htmlFor="username">Username</lable>
      <input
        id="username"
        type="text"
        name="username"
        placeholder="username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
      ></input>
      <button>Add to List!</button>
    </form>
  );
};

export default UserForm;
