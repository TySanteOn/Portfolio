import React from "react";
import Intro from "./Intro"
import Hi from "./Hi"
import Works from "./Works"
import Skills from "./Skills";
import Contact from "./Contact";

const HomePage = ({works}) => {
  return <div>
      <Intro />
      <Hi />
      <Works works={works} />
      <Skills />
      <Contact />
    </div>;
};

export default HomePage;