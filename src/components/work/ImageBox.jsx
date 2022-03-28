import React, { useEffect } from "react";
import styles from "./Work.module.css";

const ImageBox = ({ Itop, Ileft, Iwidth, Iheight, img }) => {
  useEffect(() => {
    const boxList = document.querySelectorAll(".projectImg");

    const options = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("projectImage");
        }
      });
    }, options);

    boxList.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <div
        className={`${styles.imgBox} projectImg`}
        style={{
          top: `${Itop}%`,
          left: `${Ileft}%`,
          width: `${Iwidth}%`,
          height: `${Iheight}% `,
        }}
      >
        <img className={styles.imgs} src={img} alt="프로젝트 이미지" />
      </div>
    </>
  );
};

export default ImageBox;
