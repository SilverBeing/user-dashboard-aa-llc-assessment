import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
const useUser = () => {
  // The useContext would not be called so many times on this project so the useUser hook is created
  return useContext(UserContext);
};
export default useUser;
