import React from "react";
import useUser from "../Hooks/userHook";
import {
  SiGmail,
  SiInstagram,
  SiTwitter,
  SiFacebook,
  SiSlack,
} from "react-icons/si";
import { HiLocationMarker } from "react-icons/hi";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import Loader from "./Loader";
import AdditionalDetails from "./AdditionalDetails";
import userHeader from "../Assets/userHeader.jpg";
import Error from "./Error";

const UserProfile = () => {
  // the user, loading and error state from the context created
  const [user, loading, error] = useUser();

  return (
    <div className="userProfile">
      {/* when error is false it checks if loading is true, if true it renders the loaders component
      if the loader is false it renders the user profile component else return an the error component */}
      {!error ? (
        loading ? (
          <Loader />
        ) : (
          <>
            <div className="userProfile__userSummary">
              {user?.map((user) => (
                <>
                  <div className="userSummary__header">
                    <img src={userHeader} alt={userHeader} />
                  </div>
                  <div className="userSummary__details">
                    <div className="userSummary__details_profile-image">
                      <img
                        src={user.picture.large}
                        alt={`${user.name.first} profile avatar`}
                      />
                    </div>
                    <div className="userSummary__details_profile-info">
                      <div className="userSummary__details_profile-name">
                        <h2>{`${user.name.title}, ${user.name.first} ${user.name.last}`}</h2>
                        <p>
                          <span>
                            {user.gender === "male" ? (
                              <BsGenderMale />
                            ) : (
                              <BsGenderFemale />
                            )}
                          </span>
                          {user.gender}
                        </p>
                      </div>
                      <div className="userSummary__details_profile-location">
                        <h3>
                          <span>
                            <HiLocationMarker />
                          </span>
                          {`${user.location.city}, ${user.location.state}. ${user.location.country}`}
                        </h3>
                      </div>
                      <div className="userSummary__details_profile-bio">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Illum doloribus eius nam culpa sapiente
                          repudiandae ea. Maxime debitis aliquam ad natus.
                          Minima veniam, ratione beatae tenetur fugit aliquid
                          harum quo.
                        </p>
                      </div>
                      <div className="userSummary__details_profile-socials">
                        <SiGmail />
                        <SiFacebook />
                        <SiInstagram />
                        <SiTwitter />
                        <SiSlack />
                      </div>
                    </div>
                    <div className="userSummary__details_edit-button">
                      <button>Edit Profile</button>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <AdditionalDetails />
          </>
        )
      ) : (
        <Error />
      )}
    </div>
  );
};

export default UserProfile;
