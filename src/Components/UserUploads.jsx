import { HiOutlineCamera } from "react-icons/hi";
import useUser from "../Hooks/userHook";
const UserUploads = () => {
  // the user state from the context created
  const [user] = useUser();

  return (
    <div className="user__images">
      <div className="heading">
        <h2>Uploads</h2>
        <HiOutlineCamera />
      </div>

      {user?.map((user) => (
        <>
          <div className="userImage">
            <img
              src={user.picture.large}
              loading="lazy"
              alt={`${user.name.first} uploads`}
            />
            <p>Uploaded 24 hours Ago</p>
          </div>
          <div className="userImage">
            <img
              src={user.picture.medium}
              loading="lazy"
              alt={`${user.name.first} uploads`}
            />
            <p>Uploaded 2months Ago</p>
          </div>
          <div className="userImage">
            <img
              src={user.picture.thumbnail}
              loading="lazy"
              alt={`${user.name.first} uploads`}
            />
            <p>Uploaded 5 years Ago</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default UserUploads;
