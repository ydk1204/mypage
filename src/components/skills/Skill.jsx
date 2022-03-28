import React from "react";
import styles from "./Skill.module.css";
import SkillType from "./SkillType";

const Skill = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerBox}>
          <h1 className={styles.skillHeader}>사용 가능 기술</h1>
          <SkillType name={"HTML"} value={95} />
          <SkillType name={"CSS"} value={95} />
          <SkillType name={"JavaScript"} value={80} />
          <SkillType name={"React"} value={70} />
          <SkillType name={"TypeScript"} value={60} />
        </div>
      </div>
    </>
  );
};

export default Skill;
