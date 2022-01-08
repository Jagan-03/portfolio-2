import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {

  React.useEffect(() => {
  }, []);

  return (
    <section id="intro">

    <div className="intro">
      <div>
        <h6 className="intro-details">Hello there!!!</h6>
        <h6 className="intro-details">I'm a Web Developer</h6>
      </div>

      <div>
        <p className="text-white-50 intro-desc">Hey! I'm Jaganath. I'm a Mechanical Engineer turned Web Developer. I always loved the feeling of creation, and getting into web development gave me lot of things including that.</p>
      </div>
      <a href="https://drive.google.com/file/d/1TIf5DvBnp2fP7Skdt2XA68OhGgdsHILJ/view?usp=sharing" target="_blank" rel="noreferrer"><button className="btn btn-primary resume-btn">My Resume</button></a>
    </div>
    </section>
  );
};

export default Intro;
