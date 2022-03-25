import React, { useEffect } from "react";
import styles from "./TextBox.module.css";
import VideoBackground from "./VideoBackground";
import Borderless from "../borderless/Borderless";

const TextBox = (props) => {
  useEffect(() => {
    const boxList = document.querySelectorAll(".box");
    const textList = document.querySelector(".listBox");

    const options = {
      root: null,
      rootMargin: "-400px 0px 0px 0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = `scale(1.1)`;
          if (entry.target.id === "last") {
            // console.log(textList);
            textList.style.background = `rgba(0, 0, 0, 1)`;
          } else {
            textList.style.background = `rgba(0, 0, 0, 0.5)`;
          }
        } else {
          entry.target.style.opacity = 0;
          entry.target.style.transform = `scale(1)`;
        }
      });
    }, options);

    boxList.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <div className={styles.videoBackground}>
        <VideoBackground />
        <div className={`${styles.textList} listBox`}>
          <p className={`${styles.introText} box`}>이 웹페이지로</p>
          <p className={`${styles.introText} box`}>제 소개를 하겠습니다</p>
          <p className={`${styles.introText} box`}>잘 봐주세요</p>
          <p className={`${styles.introText} box`}>시작합니다.</p>
          <p className={`${styles.introText} box`}>
            특성화고 외식조리학과 졸업
          </p>
          <p className={`${styles.introText} box`}>
            장안대 게임 컨텐츠학과 졸업
          </p>
          <p className={`${styles.introText} box`}>엘리스 AI 트랙 3기 수료</p>
          <p className={`${styles.introText} box`}>너무 지루한가요?</p>
          <p className={`${styles.introText} box lastBox`} id="last">
            핵심만 가보죠
          </p>
        </div>
      </div>
    </>
  );
};

export default TextBox;
