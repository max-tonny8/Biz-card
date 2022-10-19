import { FunctionComponent, useEffect, useState } from "react";
import { getUser } from "../services/userService";
import Navbar from "./Navbar";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const [userProfile, setUserProfile] = useState<string>("");
  useEffect(() => {
    getUser()
      .then((result) => {
        setUserProfile(result.data);
        console.log(userProfile);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <h1 className="text-center mt-5 mb-4">
        <i className="fa-solid fa-user"></i> Profile Card{" "}
      </h1>
      <div className="user-card">
        <div className="containerDiv">
          <img src="banner.jpg" alt="cookies" className="hero-image" />

          <div className="information">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/avatar.png"
              alt="avatar"
              className="avatar"
            />
            <div className="name">Name Goes Here</div>
            <div className="position">Creative Manager</div>

            <div className="stats">
              <span className="followers">
                <span className="value">323</span>
                <span className="label">followers</span>
              </span>

              <span className="following">
                <span className="value">290</span>
                <span className="label">following</span>
              </span>

              <span className="stories">
                <span className="value">22</span>
                <span className="label">stories</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
