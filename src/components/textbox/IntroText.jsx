import React, { useEffect, useState } from "react";
import styles from "./TextBox.module.css";

const IntroText = ({ opcityNum, text }) => {
  const [textOpacity, setTextOpacity] = useState(0);

  useEffect(() => {
    const scrollCheck = () => {
      console.log(((window.scrollY - opcityNum) / opcityNum) * 1);
      setTextOpacity(((window.scrollY - opcityNum) / opcityNum) * 1);
    };

    window.addEventListener("scroll", scrollCheck);
    return () => {
      window.removeEventListener("scroll", scrollCheck);
    };
  }, []);

  return (
    <>
      <p className={styles.introText}>{text}</p>
    </>
  );
};

export default IntroText;
