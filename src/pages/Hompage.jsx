import React, { useEffect } from "react";
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
  useEffect(() => {}, []);

  return (
    <div>
      <Header />
      <Intro />
      <TextBox />
      <History />
      <OpenDoor />
      <SecondMent />
      <WideImage />
      <Work />
      <Skill />
      <Contact />
    </div>
  );
};

export default Hompage;
