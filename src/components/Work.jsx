import React from "react";



const Hi = ({workInfo}) => {
  const work = workInfo;
  
  return <li>
      <a className="work" href={work.link}>
        <img className="works-list-pic" src={`./assets/${work.pic}`} alt="" width="300" height="250" />
      </a>
    </li>;
};

export default Hi;