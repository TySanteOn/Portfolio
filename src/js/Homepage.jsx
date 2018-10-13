import React from "react";
import Intro from "./Intro.jsx"
import Hi from "./Hi.jsx"
import Works from "./Works.jsx"
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";

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