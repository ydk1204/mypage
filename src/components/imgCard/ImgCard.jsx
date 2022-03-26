import React, { useState, useEffect } from "react";
import styles from "../history/History.module.css";

const ImgCard = ({
  procent,
  img,
  top,
  right,
  rotateNum,
  scaleNum,
  xtrans,
  ytrans,
}) => {
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);
  const [xtranslate, setXtranslate] = useState(0);
  const [ytranslate, setYtranslate] = useState(0);
  const [ztranslate, setZtranslate] = useState(0);

  const movings = (procent) => {
    if (procent < 0) {
      return;
    }
    let newRotate = procent * rotateNum;
    setRotate(newRotate);
    let newScale = procent * 2;
    setScale(newScale - scaleNum);
    let newXtranslate = procent * xtrans;
    setXtranslate(newXtranslate);
    let newYtranslate = procent * ytrans;
    setYtranslate(newYtranslate);
    let newZtranslate = procent * 50;
    setZtranslate(newZtranslate);
  };

  useEffect(() => {
    movings(procent);
    return;
  }, [procent]);

  return (
    <>
      <div
        className={styles.imgCard}
        style={{
          top: `${top}`,
          right: `${right}`,
          transform: `rotate(${rotate}deg) scale(${Math.abs(
            scale
          )}) translate3d(-${xtranslate}%, -${ytranslate}%, ${ztranslate}px)`,
        }}
      >
        <img className={styles.imgs} src={img} alt="img" />
      </div>
    </>
  );
};

export default ImgCard;
