import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import Profile from "./Profile";

const ProfileApp = () => {
  return (
    <>
      <ProfileContext.Provider value="Ilham">
        <h1>Profile App</h1>
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </>
  );
};

export default ProfileApp;
