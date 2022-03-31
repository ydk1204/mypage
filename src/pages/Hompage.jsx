import React, { useEffect, useRef, useState } from "react";
import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import TextBox from "../components/textbox/TextBox";
import History from "../components/history/History";
import OpenDoor from "../components/openDoor/OpenDoor";
import SecondMent from "../components/secondMent/SecondMent";
import WideImage from "../components/wideImage/WideImage";
import Work from "../components/work/Work";
import Skill from "../components/skills/Skill";
import Contact from "../components/contact/Contact";

const Hompage = (props) => {
  const introRef = useRef();
  const projectRef = useRef();
  const skillRef = useRef();
  const contactRef = useRef();
  const [divLocation, setDivLocation] = useState([]);

  useEffect(() => {
    let intro = introRef.current.offsetTop;
    let project = projectRef.current.offsetTop;
    let skills = skillRef.current.offsetTop;
    let contact = contactRef.current.offsetTop;
    setDivLocation([...divLocation, intro, project, skills, contact]);
  }, [contactRef]);

  return (
    <div>
      <Header divLocation={divLocation} />
      <div ref={introRef}>
        <Intro />
      </div>

      <TextBox />
      <History />
      <OpenDoor />
      <div ref={projectRef}>
        <SecondMent />
      </div>

      <WideImage />
      <Work />
      <div ref={skillRef}>
        <Skill />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Hompage;
