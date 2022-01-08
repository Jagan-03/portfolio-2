import React from "react";

// Sections
import Intro from "../sections/intro";
import About from "../sections/about";
import Skills from "../sections/skills";
import Projects from "../sections/projects";
import ProgrammingWork from "../sections/programmingWork";

const Home = () => {
    return <div>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <ProgrammingWork />
    </div>
}

export default Home;