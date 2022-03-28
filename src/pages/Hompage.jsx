import React from "react";
import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import TextBox from "../components/textbox/TextBox";
import History from "../components/history/History";
import OpenDoor from "../components/openDoor/OpenDoor";
import SecondMent from "../components/secondMent/SecondMent";
import WideImage from "../components/wideImage/WideImage";
import Work from "../components/work/Work";
import Skill from "../components/skills/Skill";

const Hompage = (props) => {
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
    </div>
  );
};

export default Hompage;
