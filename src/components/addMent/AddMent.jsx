import React, { useEffect } from "react";
import styles from "./AddMent.module.css";

const AddMent = (props) => {
  useEffect(() => {
    const rootLine = document.querySelector(".Mentbox");
    const headerText = document.querySelector(".headerText");
    const explanText = document.querySelector(".explan");

    const options = {
      root: null,
      rootMargin: "-60px 0px 0px 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          headerText.classList.add("anim");
          explanText.classList.add("delayAnim");
        }
      });
    }, options);

    observer.observe(rootLine);

    return;
  }, []);
  return (
    <>
      <div className={`${styles.container} Mentbox`}>
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
        <div className={`${styles.rightBox}`}>
          <div className={`${styles.headerFlexRow} headerText`}>
            게임 개발 때{" "}
            <span className={styles.textPointColor}> 배운 기술</span>
          </div>
          <div className={`${styles.explanText} explan`}>
            C언어와 C#을 배우고, 유니티 엔진과
            <br />
            언리얼 엔진을 통해{" "}
            <span className={styles.gamePointColor}>게임 개발</span>을 했습니다.
            <br />
            게임 기획, 개발등 지금까지 학습한 기술이
            <br />
            아깝긴 했지만, 내가 지금까지 사용했던
            <br />
            웹의 구조를 보고 비슷한 것을 만들 수 있다는
            <br />
            기대가 <span className={styles.semiPointColor}>저를 이끌었죠.</span>
            <br />
            그리고...
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMent;
