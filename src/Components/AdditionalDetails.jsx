import useUser from "../Hooks/userHook";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlinePencilAlt,
  HiOutlineCalendar,
  HiOutlineUser,
  HiOutlineLightBulb,
  HiOutlineHashtag,
} from "react-icons/hi";

const AdditionalDetails = () => {
  // the user state from the context created
  const [user] = useUser();
  return (
    <div className="additionalDetails">
      <div className="heading">
        <h2>Additional Details</h2>
        <HiOutlinePencilAlt />
      </div>
      {user?.map((user) => (
        <>
          <div className="additionalDetails__detail">
            <HiOutlineMail />
            <div>
              <h3>Email</h3>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="additionalDetails__detail">
            <HiOutlinePhone />
            <div>
              <h3>Mobile</h3>
              <p>{user.cell}</p>
            </div>
          </div>
          <div className="additionalDetails__detail">
            <HiOutlineCalendar />
            <div>
              <h3>DOB</h3>
              <p>{user.dob.date}</p>
            </div>
          </div>
          <div className="additionalDetails__detail">
            <HiOutlineHashtag />
            <div>
              <h3>Age</h3>
              <p>{user.dob.age}</p>
            </div>
          </div>
          <div className="additionalDetails__detail">
            <HiOutlineUser />
            <div>
              <h3>Username</h3>
              <p>{user.login.username}</p>
            </div>
          </div>
          <div className="additionalDetails__detail">
            <HiOutlineLightBulb />
            <div>
              <h3>Join Date</h3>
              <p>{user.registered.date}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default AdditionalDetails;
