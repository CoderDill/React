import { useState } from "react";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleChange}
      />
      <button>Add to List!</button>
    </form>
  );
};

export default UserForm;
