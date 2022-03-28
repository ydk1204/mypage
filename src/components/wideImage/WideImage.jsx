import React, { useState, useEffect } from "react";
import styles from "./WideImage.module.css";

const WideImage = (props) => {
  const [Iwidth, setIwidth] = useState(70);

  useEffect(() => {
    const rootLine = document.querySelector(".ImgBox");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIwidth(100);
        }
      });
    }, options);

    observer.observe(rootLine);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div
          className={`${styles.imgBox} ImgBox`}
          style={{ width: `${Iwidth}%` }}
        >
          <img
            className={styles.developImg}
            src="../../../../img/develop.jpeg"
            alt="개발자 이미지"
          />
          <h1 className={styles.intro_title}>프론트엔드</h1>
        </div>
      </div>
    </>
  );
};

export default WideImage;
