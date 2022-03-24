import React, { useEffect } from "react";
import styles from "./Borderless.module.css";

const Borderless = (props) => {
  useEffect(() => {
    const boxList = document.querySelector(".borderless");

    const options = {
      root: null,
      rootMargin: "300px 0px 0px 0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.background = `rgba(0, 0, 0, 1)`;
        } else {
          entry.target.style.background = `rgba(0, 0, 0, 0.5)`;
        }
      });
    }, options);

    observer.observe(boxList);
  }, []);

  return (
    <>
      <div className={`${styles.borderLine} borderless`}></div>
    </>
  );
};

export default Borderless;
