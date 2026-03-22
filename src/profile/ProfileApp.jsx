import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import Profile from "./Profile";
import { useState } from "react";
import ProfileForm from "./ProfileForm";

const ProfileApp = () => {
  const [name, setName] = useState("Ilham");
  return (
    <>
      <ProfileContext.Provider value={name}>
        <h1>Profile App</h1>
        <ProfileForm name={name} setName={setName} />
        <Profile />

        <ProfileAddress />
      </ProfileContext.Provider>
    </>
  );
};

export default ProfileApp;
