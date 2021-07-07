import { useState, useEffect } from "react";
import axios from "axios";

const ProfileViewer = ({ name, color = "red" }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((res) => setData(res.data.name));
  }, [name]);
  return (
    <>
      <h3 style={{ color }}>{data ? data : "loading..."}</h3>
    </>
  );
};

export default ProfileViewer;
