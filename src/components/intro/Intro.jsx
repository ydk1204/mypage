import React from "react";
import styles from "./Intro.module.css";

const Intro = (props) => {
  return (
    <div className={styles.intro}>
      <div className={styles.intro_container}></div>
      <h1 className={styles.intro_title}>Hello</h1>
    </div>
  );
};

export default Intro;
