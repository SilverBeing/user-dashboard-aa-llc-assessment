import React from "react";
import LoaderGif from "../Assets/loading.svg";

const Loader = () => {
  return (
    <div className="loader">
      <img src={LoaderGif} alt="" />
      <div>
        <h1>Please Wait...</h1>
      </div>
    </div>
  );
};

export default Loader;
