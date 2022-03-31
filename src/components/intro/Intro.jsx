import React from "react";
import styles from "./Intro.module.css";

const Intro = (props) => {
  return (
    <div className={styles.intro}>
      <div className={styles.intro_container}></div>
      <h1 className={styles.intro_title}>Hello</h1>
      <button className={styles.intro_btn}>
        <a
          className={styles.intro_btn__a}
          href="https://dangdang-bf6c7.web.app/ "
        >
          대화 하기
        </a>
      </button>
    </div>
  );
};

export default Intro;
