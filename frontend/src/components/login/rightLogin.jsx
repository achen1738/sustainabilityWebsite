import React, { Component } from "react";
import styles from "./rightLogin.module.css";

class RightLogin extends Component {
  state = {
    signUpExpanded: false,
    loginExpanded: false
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={`${styles.darkModeContainer}`}>
          <span>so sad</span>
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
