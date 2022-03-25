import React from "react";
import styles from "./AddMent.module.css";

const AddMent = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <div className={styles.setBox}>
            <div className={styles.iconBox}>
              <i className={`${styles.icon} fas fa-c`}></i>
            </div>
            <div className={styles.iconBox}>
              <i className={`${styles.icon} fa-brands fa-unity`}></i>
            </div>
          </div>
          <div className={styles.setBox}>
            <div className={styles.iconBox}>
              <i className={`${styles.icon} fa-solid fa-gamepad`}></i>
            </div>
            <div className={styles.iconBox}>
              <i className={`${styles.icon} fa-solid fa-file`}></i>
            </div>
          </div>
        </div>
        <div className={styles.rightBox}>asasda</div>
      </div>
    </>
  );
};

export default AddMent;
