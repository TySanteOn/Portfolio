import React from "react";
import { Link } from "react-router-dom";


const Hi = ({workInfo}) => {
  const work = workInfo;
  
  return <li>
      <Link className="work" to={work.link}>
        <img className="works-list-pic" src={`./assets/${work.pic}`} alt="" width="300" height="300" />
      </Link>
    </li>;
};

export default Hi;