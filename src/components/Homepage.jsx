import React from "react";
import Intro from "./Intro"
import Hi from "./Hi"
import Works from "./Works"

const HomePage = ({works}) => {
  return <div>
      <Intro />
      <Hi />
      <Works works={works} />
    </div>;
};

export default HomePage;