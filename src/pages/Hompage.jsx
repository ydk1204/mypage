import React from "react";
import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import TextBox from "../components/textbox/TextBox";
import History from "../components/history/History";

const Hompage = (props) => {
  return (
    <div>
      <Header />
      <Intro />
      <TextBox />
      <History />
    </div>
  );
};

export default Hompage;
