import React, { useEffect, useState } from "react";
import styles from "./History.module.css";
import ImgCard from "../imgCard/ImgCard";

const History = (props) => {
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);
  const [xtranslate, setXtranslate] = useState(0);
  const [ytranslate, setYtranslate] = useState(0);
  const [cent, setCent] = useState(0);

  useEffect(() => {
    const rootLine = document.querySelector(".viewBox");

    const moveContents = () => {
      const recScroll = window.scrollY - rootLine.offsetTop;
      const procent = recScroll / rootLine.scrollHeight;
      moving(procent);
      setCent(procent);
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
  }, []);

  const moving = (procent) => {
    let newRotate = rotate + procent * 100;
    setRotate(newRotate);
    let newScale = scale + procent;
    setScale(newScale);
    let newXtranslate = xtranslate + procent * 550;
    setXtranslate(newXtranslate);
    let newYtranslate = ytranslate + procent * 200;
    setYtranslate(newYtranslate);
  };

  console.log(rotate, scale, xtranslate, ytranslate);
  return (
    <>
      <div className={styles.history}>
        <div className="viewBox">
          <div className={styles.leftFlexContaier}>
            <div className="headerLine">지금까지 왔던 길</div>
            <div className={`${styles.headerFlexRow} `}>
              그 <span className={styles.textPointColor}>마침표.</span>
            </div>
          </div>
          <div>
            <div className={styles.rightFlexContaier}>
              게임 컨텐츠학과에서 게임개발을 배우다
              <br />
              웹 개발이라는 새로운 영역에
              <br />
              흥미와 관심을 가지게 됐습니다.
            </div>
          </div>
          <div className={styles.imgContainer}>
            <ImgCard
              img={"./img/fps.jpeg"}
              top={"3em"}
              right={"40em"}
              procent={cent}
            />
            {/* <ImgCard
              img={"./img/teamRpg.jpeg"}
              top={"5em"}
              right={"30em"}
              rotate={rotate}
              scale={scale}
              xtranslate={xtranslate}
              ytranslate={ytranslate}
            />
            <ImgCard
              img={"./img/rpg.jpeg"}
              top={"7em"}
              right={"20em"}
              rotate={rotate}
              scale={scale}
              xtranslate={xtranslate}
              ytranslate={ytranslate}
            />
            <ImgCard
              img={"./img/teamRun.jpeg"}
              top={"9em"}
              right={"10em"}
              rotate={rotate}
              scale={scale}
              xtranslate={xtranslate}
              ytranslate={ytranslate}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
