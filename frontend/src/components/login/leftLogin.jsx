import React from "react";
import Avacado2 from "./YUM2.png";

const LeftLogin = () => {
  const container = {
    backgroundColor: "rgb(175, 255, 191)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%"
  };

  const imageDimensions = {
    width: "35%",
    height: "auto"
  };

  return (
    <div style={container}>
      <img style={imageDimensions} src={Avacado2} alt="asdfasdf" />
    </div>
  );
};

export default LeftLogin;
