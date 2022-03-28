import React, { useState, useEffect } from "react";
import styles from "./SecondMent.module.css";
import ImgCard from "../imgCard/ImgCard";

const SecondMent = (props) => {
  const [cent, setCent] = useState(0);
  const [secondCent, setSecondCent] = useState(0);

  useEffect(() => {
    const rootLine = document.querySelector(".container");

    const moveContents = () => {
      const recScroll = window.scrollY - rootLine.offsetTop;
      const procent = recScroll / rootLine.scrollHeight;
      setCent(procent);
    };

    const options = {
      root: null,
      rootMargin: "0px 0px 0px -60px",
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

  useEffect(() => {
    const rootLine = document.querySelector(".seceondImg");
    const imgBox = document.querySelector(".seceondImg");

    const moveContents = () => {
      const recScroll = window.scrollY - imgBox.offsetTop;
      const procent = recScroll / imgBox.scrollHeight;
      setSecondCent(procent);
    };

    const options = {
      root: null,
      rootMargin: "0px 0px 0px -60px",
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

  return (
    <>
      <div className={`${styles.container} container`}>
        <div className={styles.flexBox}>
          <div className={styles.leftFlexContaier}>
            <div className="headerLine">새로운 도전</div>
            <div className={`${styles.headerFlexRow} `}>
              그 <span className={`${styles.textPointColor}`}>시작점.</span>
            </div>
          </div>
          <div>
            <div className={`${styles.rightFlexContaier} firstImage`}>
              웹 개발에 흥미를 느끼고 학교에서
              <br />
              HTML, CSS, JavaScript 등 웹 개발 기본 스킬과
              <br />
              PHP를 이용해 간단한 웹 페이지를 제작했습니다.
            </div>
          </div>
          <div className="seceondImg">
            <div>
              <div className={styles.rightFlexContaier}>
                하지만 그것만으로는 부족함을 느끼고
                <br />
                책, 무료-유료 강의를 통해 React, TypeScript와 같은
                <br />더 다양한 스킬을 얻기 위해 노력 했습니다.
              </div>
            </div>
            <div className={`${styles.imgContainer} firstContainer`}>
              <ImgCard
                img={"./img/Clone.png"}
                top={"-25em"}
                right={"0em"}
                procent={cent}
                rotateNum={150}
                scaleNum={1.3}
                xtrans={200}
                ytrans={550}
              />
              <ImgCard
                img={"./img/webPopol.png"}
                top={"-15em"}
                right={"4em"}
                procent={cent}
                rotateNum={110}
                scaleNum={1.5}
                xtrans={150}
                ytrans={500}
              />
              <ImgCard
                img={"./img/game.png"}
                top={"-5em"}
                right={"8em"}
                procent={cent}
                rotateNum={70}
                scaleNum={1.8}
                xtrans={100}
                ytrans={450}
              />
              <ImgCard
                img={"./img/reyoutube.png"}
                top={"5em"}
                right={"12em"}
                procent={cent}
                rotateNum={50}
                scaleNum={2.2}
                xtrans={50}
                ytrans={400}
              />
              <ImgCard
                img={"./img/maker.png"}
                top={"15em"}
                right={"16em"}
                procent={cent}
                rotateNum={40}
                scaleNum={2.3}
                xtrans={50}
                ytrans={400}
              />
              <ImgCard
                img={"./img/motion.png"}
                top={"25em"}
                right={"20em"}
                procent={cent}
                rotateNum={30}
                scaleNum={2.4}
                xtrans={40}
                ytrans={350}
              />
            </div>
            <div className={`${styles.secondBox} `}>
              {" "}
              <div>
                <div className={styles.bottomFlexContainer}>
                  끝이 아니죠.
                  <br />
                  엘리스 부트캠프에 지원해 더 많은 경험을 얻고자 했습니다.
                  <br />
                  배웠던 스킬들을 한번 더 공부하고 프로젝트 경험으로 이어가고,
                  <br />
                  프론트, 백엔드, AI(데이터분석) 파트로 팀을 이뤄
                  <br />두 차례의 팀 프로젝트도 진행했습니다.
                </div>
              </div>
              <div className={styles.imgContainer}>
                <ImgCard
                  img={"./img/test.png"}
                  top={"-10em"}
                  right={"1em"}
                  procent={secondCent}
                  rotateNum={70}
                  scaleNum={1.5}
                  xtrans={200}
                  ytrans={550}
                />
                <ImgCard
                  img={"./img/ott.png"}
                  top={"0em"}
                  right={"8em"}
                  procent={secondCent}
                  rotateNum={40}
                  scaleNum={2}
                  xtrans={70}
                  ytrans={400}
                />
                <ImgCard
                  img={"./img/purr.jpeg"}
                  top={"20em"}
                  right={"15em"}
                  procent={secondCent}
                  rotateNum={30}
                  scaleNum={2.5}
                  xtrans={70}
                  ytrans={350}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondMent;
