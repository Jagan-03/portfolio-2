import React from "react";

import { TimeLineData } from "../data/experience";

const About = () => {
  return (
    <section id="about">
      <div className="about">
        <div>
          <h1 className="text-light">About me</h1>
        </div>
        <hr />
        <div>
          <p className="text-white-50">
            I'm a Mechanical Engineer turned Web Developer, who makes full stack
            MERN applications.
          </p>
        </div>
        <div className="experience row">
          {TimeLineData.map((data, i) => {
            return <div key={i} className="card exp-card mb-2">
            <div className="card-body">
              <h5 className="card-title">{data.year}</h5>
              <p className="card-text">
                {data.text}
              </p>
            </div>
          </div>
          })}

        </div>
      </div>
    </section>
  );
};

export default About;
