import React from "react";

import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills mb-5">
      <div>
          <h1 className="text-light">Skills</h1>
        </div>
        <hr />
        <div className="row container flex-wrap justify-content-between p-5">

        {skills.map((skill, i) => {
          return <div className="col-sm-4 mb-3 d-flex flex-column align-items-center justify-content-center" key={i}>
            <img width={100} height={100} src={skill.logo} alt="skill" />
            <p className="text-light">{skill.name}</p>
          </div> 
        })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
