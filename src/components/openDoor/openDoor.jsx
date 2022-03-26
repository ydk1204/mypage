import React, { useEffect, useState } from "react";
import styles from "./OpenDoor.module.css";
import VideoBackground from "../textbox/VideoBackground";

const OpenDoor = (props) => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [change, setChange] = useState(false);

  const doorOpen = (procent) => {
    if (procent * 50 < 0) {
      setLeft(0);
      setRight(0);
      setOpacity(0);
      return;
    }

    let newProcent = procent * 50;
    setLeft(newProcent);
    setRight(newProcent);
    setOpacity(newProcent);

    if (newProcent > 100) {
      setChange(false);
    } else {
      setChange(false);
    }
  };

  useEffect(() => {
    const rootLine = document.querySelector(".doorContainer");
    const moveContents = () => {
      const recScroll = window.scrollY - rootLine.offsetTop;
      const procent = (recScroll / rootLine.scrollHeight) * 3;
      doorOpen(procent);
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", moveContents);
        } else {
          window.removeEventListener("scroll", moveContents);
        }
      });
    }, options);

    observer.observe(rootLine);

    return;
  }, []);

  return (
    <div className={`${styles.contaienr} doorContainer`}>
      <VideoBackground videoSrc={"video/purr.mp4"} />
      <div
        className={styles.newDivContainer}
        style={{ opacity: `${opacity}%` }}
      >
        <div></div>
        <div className={styles.flexContaier}>
          <div className="headerLine">새로운</div>
          <div className={`${styles.headerFlexRow} `}>
            <span className={styles.textPointColor}>시작</span>
          </div>
        </div>
      </div>
      <div className={styles.doorBox}>
        <div
          className={`${styles.leftDoor} doorLeft`}
          style={{
            transform: `translateX(-${left}%`,
          }}
        ></div>
        <div
          className={`${styles.rightDoor} doorRight`}
          style={{
            transform: `translateX(${right}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default OpenDoor;
