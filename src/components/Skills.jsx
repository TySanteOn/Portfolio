import React from "react";

const Skills = () => {  
  
  return <section id="skills" className="skills row">
    <div>
      <header>
        <h3 className="skills-title">My skills</h3>
      </header>
      <article className="skills-tekst">
        <header className="hidden">
          <h4>About my skills</h4>
        </header>
        <p>I’m still learning, but I’m confident to say that my skills in <strong>web design & development</strong> are pretty
          good and I’m only getting better.
        </p>
        <p>I’m familiar with <strong>Motion Graphics and App Development</strong> too and still discovering cool new things daily.</p><br/>
        <p>I’m the <strong>Marketing and Art Director</strong> of the up coming band KNEUS.</p><br/>
        <p>Besides that I also do little <strong>art projects</strong> whenever I feel like it.</p>
      </article>
    </div>
    <aside>
      <video className="skills-video" autoPlay loop src="./assets/ISeeSpace.mp4" width="300" height="300" />
    </aside>
  </section>;
};

export default Skills;