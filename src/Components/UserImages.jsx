import useUser from "../Hooks/userHook";
const UserImages = () => {
  // the user state from the context created
  const [user] = useUser();

  return (
    <div className="user__images">
      <h2>Uploads</h2>
      {user?.map((user) => (
        <>
          <div className="userImage">
            <img src={user.picture.large} loading="lazy" alt="user Images" />
            <p>Uploaded 24 hours Ago</p>
          </div>
          <div className="userImage">
            <img src={user.picture.medium} loading="lazy" alt="user Images" />
            <p>Uploaded 2months Ago</p>
          </div>
          <div className="userImage">
            <img
              src={user.picture.thumbnail}
              loading="lazy"
              alt="user Images"
            />
            <p>Uploaded 5 years Ago</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default UserImages;
