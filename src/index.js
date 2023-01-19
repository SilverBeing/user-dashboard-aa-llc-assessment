import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserContextProvider } from "./Context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* The UserContextProvider providers the user, loading, error state to other
    its children which is the App component so the components rendered inside the App component
    would have access to the data  */}
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
