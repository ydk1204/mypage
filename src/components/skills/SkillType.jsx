import React from "react";
import styles from "./Skill.module.css";

const SkillType = ({ name, value }) => {
  return (
    <>
      <div className={styles.skill__container}>
        <div className={styles.skillBox}>
          <div className={styles.skill__name}>
            <span className={styles.htmlPointColor}>{name}</span>
          </div>
          <div className={styles.skill__bar}>
            <div
              className={styles.skill_colorBar}
              style={{ width: `${value}%` }}
            ></div>
          </div>
        </div>
        <div className={styles.valueContainer}>
          숙련도
          <div className={styles.skill__value}>{value}%</div>
        </div>
      </div>
    </>
  );
};

export default SkillType;
