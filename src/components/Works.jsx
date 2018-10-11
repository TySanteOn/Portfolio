import React from "react";
import Work from "./Work"

const Works = ({works}) => {  
  const ListOfWorkTypes = works[0];
  
  return <section id="work" className="works">
      <header>
        <h3>My work</h3>
      </header>
      <article className="works-article">
        <header>Designs</header>
        <ul className="works-lijst">
          {Object.keys(ListOfWorkTypes[0][1]).map(id => <Work key={id} workInfo={ListOfWorkTypes[0][1][id]} />)}
        </ul>
      </article>
      <article className="works-article">
        <header>Web Developments</header>
        <ul className="works-lijst">
          {Object.keys(ListOfWorkTypes[1][1]).map(id => <Work key={id} workInfo={ListOfWorkTypes[1][1][id]} />)}
        </ul>
      </article>
      <article className="works-article">
        <header>Artwork</header>
        <ul className="works-lijst">
          {Object.keys(ListOfWorkTypes[2][1]).map(id => <Work key={id} workInfo={ListOfWorkTypes[2][1][id]} />)}
        </ul>
      </article>
    </section>;
};

export default Works;