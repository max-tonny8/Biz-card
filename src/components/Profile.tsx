import { FunctionComponent, useEffect, useState } from "react";
import { Card } from "../interfaces/Card";
import { getCardByUserId } from "../services/cardService";
import { errorMsg } from "../services/feedbackService";
import { getUser } from "../services/userService";
import Navbar from "./Navbar";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const [userCards, setUserCards] = useState<Card[]>([]);
  const [userProfile, setUserProfile] = useState<any>({
    id: "",
    name: "",
    email: "",
    biz: false,
  });
  useEffect(() => {
    getCardByUserId()
      .then((result) => {
        setUserCards(result.data);
      })
      .catch((err) => {
        errorMsg("Something went wrong, Try agian.");
      });

    getUser()
      .then((result) => {
        setUserProfile(result.data);
      })
      .catch((err) => {
        errorMsg("Something went Wrong, Try Agian");
      });
  }, []);
  return (
    <>
      <Navbar />
      <h1 className="text-center mt-5 mb-4">
        <i className="fa-solid fa-user mb-4"></i> Profile
      </h1>
      <div className="user-card">
        <div className="containerDiv card">
          <img
            src="banner.jpg"
            alt="cookies"
            className="hero-image img-fluid"
          />

          <div className="information">
            <img src="avatar.png" alt="avatar" className="avatar" />
            <span className="mb-4">Currently Signed In As:</span>
            <div className="name mb-3 ">{userProfile.name}</div>
            <hr />
            <div className="mb-2">
              <strong>Email: </strong>
              {userProfile.email}
            </div>
            <div className="mb-2">
              <strong>BizCards Created: </strong>
              {userCards.length}
            </div>
            <div className="mb-2">
              <strong>Account Type: </strong>
              {userProfile.biz ? (
                <span style={{ color: "green" }}>
                  Business <i className="fa-solid fa-certificate"></i>{" "}
                </span>
              ) : (
                <span>Free Account </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
