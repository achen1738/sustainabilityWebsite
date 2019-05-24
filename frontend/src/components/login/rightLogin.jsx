import React, { Component } from "react";
import styles from "./rightLogin.module.css";
import { FiSun, FiMoon } from "react-icons/fi";

class RightLogin extends Component {
  state = {
    signUpExpanded: false,
    loginExpanded: false,
    darkActive: false
  };

  render() {
    // Adds the active class to the corresponding button,
    // based on the value of this.state.darkActive.
    let sunStyle = styles.toggleButton;
    let moonStyle = styles.toggleButton;
    if (this.state.darkActive) moonStyle += ` ${styles.activeToggle}`;
    else sunStyle += ` ${styles.activeToggle}`;

    return (
      <div className={styles.container}>
        <div className={`${styles.darkModeContainer}`}>
          <div className={sunStyle}>
            <FiSun />
          </div>
          <div className={moonStyle}>
            <FiMoon />
          </div>
        </div>
        <h4>s u s t a i n a b i l i t y</h4>
        <div className={`${styles.buttonAesthetic} ${styles.filledButton}`}>
          Sign Up
        </div>
        <div className={`${styles.buttonAesthetic} ${styles.emptyButton}`}>
          Login
        </div>
      </div>
    );
  }
}

export default RightLogin;
