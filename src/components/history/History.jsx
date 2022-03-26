import React, { useEffect, useState } from "react";
import styles from "./History.module.css";
import ImgCard from "../imgCard/ImgCard";
import AddMent from "../addMent/AddMent";

const History = (props) => {
  const [cent, setCent] = useState(0);

  useEffect(() => {
    const rootLine = document.querySelector(".viewBox");

    const moveContents = () => {
      const recScroll = window.scrollY - rootLine.offsetTop;
      const procent = recScroll / rootLine.scrollHeight;
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

    return;
  }, []);

  return (
    <>
      <div className={styles.history}>
        <div className={`${styles.historyBox} viewBox`}>
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
              top={"-3em"}
              right={"50em"}
              procent={cent}
              rotateNum={100}
              scaleNum={0.7}
              xtrans={550}
              ytrans={200}
            />
            <ImgCard
              img={"./img/teamRpg.jpeg"}
              top={"2em"}
              right={"35em"}
              procent={cent}
              rotateNum={70}
              scaleNum={0.8}
              xtrans={500}
              ytrans={150}
            />
            <ImgCard
              img={"./img/rpg.jpeg"}
              top={"4em"}
              right={"15em"}
              procent={cent}
              rotateNum={40}
              scaleNum={0.9}
              xtrans={450}
              ytrans={100}
            />
            <ImgCard
              img={"./img/teamRun.jpeg"}
              top={"9em"}
              right={"-5em"}
              procent={cent}
              rotateNum={30}
              scaleNum={1}
              xtrans={400}
              ytrans={50}
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
