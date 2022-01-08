import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import ProjectDetails from "./projects-details";
//Data
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const Projects = (props) => {

  


  return (
    <section id="projects">

    <div className="projects d-flex flex-column">
     
     <div>
       <h1 className="text-light">Projects</h1>
     </div>
      <hr />
    {
      projects.map((project, index) => {
        return <div className="project-cont" key={index}>
            <ProjectDetails project={project} id={index}/>
        </div>
      })
    }

    </div>
    </section>
  );
};

export default Projects;
