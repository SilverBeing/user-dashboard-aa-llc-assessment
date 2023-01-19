import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  // The user stores the data we get from the api call
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const getUser = () => {
    fetch(" https://randomuser.me/api/")
      .then((response) => {
        if (!response.ok) {
          throw Error("Couldn't fetch Data");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data.results);
        setLoading(false);
        setError();
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getUser();
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <UserContext.Provider value={[user, loading, error]}>
      {/* the user, loading and error state are being distributed to its children components so they can have access to its data */}
      {children}
    </UserContext.Provider>
  );
};
