import ErrorImage from "../Assets/errorImage.png";

const Error = () => {
  return (
    <div className="error">
      <img src={ErrorImage} width={"350px"} height={"350px"} alt="Error" />
      <p>There was an Error. Please Refresh!</p>
    </div>
  );
};

export default Error;
