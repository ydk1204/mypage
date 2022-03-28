import React, { useEffect } from "react";
import styles from "./Work.module.css";
import ImageBox from "./ImageBox";

const Work = (props) => {
  useEffect(() => {
    const workBox = document.querySelector(".workContainer");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.2],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          workBox.classList.add("projectBox");
        }
      });
    }, options);

    observer.observe(workBox);
  }, []);

  return (
    <>
      <div className={`${styles.container} workContainer`}>
        <div className={styles.flexBox}>
          <div className={styles.flexleft}>
            <ImageBox
              Itop={0}
              Ileft={0}
              Iwidth={100}
              Iheight={100}
              img={"../../../../img/Clone.png"}
            />
          </div>
          <div className={styles.flexright}>
            <h1 className={styles.Headertext}>
              저는 <span className={styles.textPointColor}>준비</span>됐습니다.
            </h1>
            <ImageBox
              Itop={0}
              Ileft={0}
              Iwidth={100}
              Iheight={70}
              img={"../../../../img/webPopol.png"}
            />
          </div>
        </div>
        <div className={styles.flexBoxTwo}>
          <div className={styles.flexleftTwo}>
            <h1 className={styles.worktext}>
              지금까지 배운 스킬을
              <br />
              더 다양하게 사용하고,
              <br />
              새로운
              <span className={styles.textPointColor}> 도전</span>을 할 준비가
              말이죠
            </h1>
            <div className={styles.workBox}>
              <div className={styles.projectBox}>
                <ImageBox
                  Itop={0}
                  Ileft={0}
                  Iwidth={100}
                  Iheight={100}
                  img={"../../../../img/maker.png"}
                />
              </div>
              <div className={styles.projectBox}>
                <ImageBox
                  Itop={0}
                  Ileft={0}
                  Iwidth={100}
                  Iheight={100}
                  img={"../../../../img/motion.png"}
                />
              </div>
            </div>
          </div>
          <div className={styles.flexrightTwo}>
            <div>
              <ImageBox
                Itop={0}
                Ileft={0}
                Iwidth={100}
                Iheight={100}
                img={"../../../../img/purr.jpeg"}
              />
            </div>
            <div className={styles.workBox}>
              <div className={styles.projectBox}>
                <ImageBox
                  Itop={0}
                  Ileft={0}
                  Iwidth={100}
                  Iheight={100}
                  img={"../../../../img/ott.png"}
                />
              </div>
              <div className={styles.projectBox}>
                <ImageBox
                  Itop={0}
                  Ileft={0}
                  Iwidth={100}
                  Iheight={100}
                  img={"../../../../img/test.png"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
