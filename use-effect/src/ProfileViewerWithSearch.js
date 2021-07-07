import { useState, useEffect } from "react";
import ProfileSearchForm from "./ProfileSearchForm";
import axios from "axios";

const ProfileViewerWithSearch = () => {
  const [profile, setProfile] = useState(null);
  const [url, setUrl] = useState("https://api.github.com/users/crappydill");

  const search = (term) => {
    setUrl(`https://api.github.com/users/${term}`);
  };
  useEffect(() => {
    async function loadProfile() {
      const res = await axios.get(url);
      setProfile(res.data);
    }
    loadProfile();
  }, [url]);
  return (
    <>
      {profile ? <h2>Hi, {profile.name}</h2> : <h2>Loading...</h2>}
      <ProfileSearchForm search={search} />
    </>
  );
};

export default ProfileViewerWithSearch;
