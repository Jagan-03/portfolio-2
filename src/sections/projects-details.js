import React from "react";

const ProjectDetails = ({ project, id }) => {
  React.useEffect(() => {
    const projectImages = document.getElementsByClassName("project-img");
    projectImages.forEach((image) => {
      image.addEventListener("mouseover", (e) => {
        document
          .getElementsByClassName("project-name")
          [e.target.id].classList.add("project-name-hover");
          image.classList.add("project-img-hover");
      });
    });
    projectImages.forEach((image) => {
      image.addEventListener("mouseout", (e) => {
        document
          .getElementsByClassName("project-name")
          [e.target.id].classList.remove("project-name-hover");
          image.classList.remove("project-img-hover");
      });
    });
  }, []);

  return (
    <div
      className="project pt-5 mb-5 row"
    >
      <div className="col-md-8 mb-3 text-start">
        <h1 className="mb-3 project-name">{project.title}</h1>
        <a href={project.visit} target="_blank" rel="noreferrer">

        <img
          id={id}
          src={project.image}
          alt={project.title}
          className="img-fluid project-img rounded"
        />
        </a>
      </div>
        <div className="col-md-4 project-info d-flex flex-column justify-content-center">
          <p className="text-white p-0 m-0">{project.description}</p>
          <hr />
          <h3 className="text-danger">Technologies Used</h3>
          <div>
            {project.tags.map((tag, i) => {
              return <span key={i} className="badge bg-warning ms-2">{tag}</span>
            })}
          </div>
          <div className="mt-5">
            <a href={project.visit} target="_blank" rel="noreferrer"><button className="btn btn-light">Visit</button></a>
            <a href={project.source} target="_blank" rel="noreferrer"><button className="btn btn-light ms-2">Frontend source</button></a>
            { project.backend && <a href={project.backend} target="_blank" rel="noreferrer"><button className="btn btn-light ms-2">Backend Source</button></a>}
          </div>
        </div>
    </div>
  );
};

export default ProjectDetails;
