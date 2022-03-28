import React, { useEffect, useState } from "react";
import styles from "./History.module.css";
import ImgCard from "../imgCard/ImgCard";
import AddMent from "../addMent/AddMent";

const History = (props) => {
  const [cent, setCent] = useState(0);

  useEffect(() => {
    const rootLine = document.querySelector(".viewBox");

    const moveContents = () => {
      const recScroll = window.scrollY - (rootLine.offsetTop - 300);

      const procent = recScroll / (rootLine.scrollHeight + 200);
      setCent(procent);
    };

    const options = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.2,
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
    <>
      <div className={styles.history}>
        <div className={`${styles.historyBox} viewBox`}>
          <div className={styles.flexBox}>
            <div className={styles.leftFlexContaier}>
              <div className={`${styles.headerText} headerLine`}>
                지금까지 왔던 길
              </div>
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
          </div>
          <div className={styles.imgContainer}>
            <ImgCard
              img={"./img/fps.jpeg"}
              top={"-3em"}
              right={"50em"}
              procent={cent}
              rotateNum={40}
              scaleNum={1.6}
              xtrans={1000}
              ytrans={220}
            />
            <ImgCard
              img={"./img/teamRpg.jpeg"}
              top={"2em"}
              right={"35em"}
              procent={cent}
              rotateNum={30}
              scaleNum={1.9}
              xtrans={900}
              ytrans={170}
            />
            <ImgCard
              img={"./img/rpg.jpeg"}
              top={"8em"}
              right={"15em"}
              procent={cent}
              rotateNum={30}
              scaleNum={2.3}
              xtrans={850}
              ytrans={120}
            />
            <ImgCard
              img={"./img/teamRun.jpeg"}
              top={"12em"}
              right={"-5em"}
              procent={cent}
              rotateNum={30}
              scaleNum={2.6}
              xtrans={700}
              ytrans={70}
            />
          </div>
        </div>
        <div className={styles.addMent}>
          <AddMent />
        </div>
      </div>
    </>
  );
};

export default History;
