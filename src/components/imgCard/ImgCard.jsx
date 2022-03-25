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

  useEffect(() => {
    movings(procent);
  }, [procent]);

  const movings = (procent) => {
    let newRotate = procent * rotateNum;
    setRotate(newRotate);
    let newScale = procent;
    setScale(newScale + scaleNum);
    let newXtranslate = procent * xtrans;
    setXtranslate(newXtranslate);
    let newYtranslate = procent * ytrans;
    setYtranslate(newYtranslate);
  };

  console.log(rotate, scale, xtranslate, ytranslate);
  return (
    <>
      <div
        className={styles.imgCard}
        style={{
          top: `${top}`,
          right: `${right}`,
          transform: `rotate(${rotate}deg) scale(${scale}) translate(-${xtranslate}%, -${ytranslate}%)`,
        }}
      >
        <img className={styles.imgs} src={img} alt="img" />
      </div>
    </>
  );
};

export default ImgCard;
