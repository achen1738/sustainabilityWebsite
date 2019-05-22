import React from "react";
import Winter from "../../images/winter.jpg";

const Login = () => {
  const container = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fafafa",
    position: "relative"
  };

  const image = {
    position: "absolute",
    height: "100%"
  };

  return (
    <div style={container}>
      <div style={image}>
        <img src={Winter} alt="winter really long text please ra" />
        <div>
          <span>hello</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
