import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";

const Contact = (props) => {
  const [value, setValue] = useState(1.1);

  useEffect(() => {
    const workBox = document.querySelector(".contactContainer");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.2],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setValue(1.0);
        }
      });
    }, options);

    observer.observe(workBox);
  }, []);

  return (
    <>
      <div className={`${styles.container}`}>
        <div
          className={`${styles.flexBox} contactContainer`}
          style={{ transform: `scale(${value})` }}
        >
          <h1 className={styles.contact__title}>더 많은 정보를 알고 싶다면?</h1>
          <div className={styles.infoBox}>
            email :<span>ejrbdi@gmail.com</span>
          </div>
          <div className={styles.infoBox}>
            GitHub :
            <span>
              <a
                className={styles.contact__link}
                href="https://github.com/ydk1204"
              >
                https://github.com/ydk1204
              </a>{" "}
            </span>
          </div>
          <div className={styles.infoBox}>
            JustChat! :
            <span>
              <a className={styles.contact__link} href="#">
                링크
              </a>{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
