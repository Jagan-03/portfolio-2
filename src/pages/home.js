import React from "react";

// Sections
import Intro from "../sections/intro";
import About from "../sections/about";
import Projects from "../sections/projects";
import ProgrammingWork from "../sections/programmingWork";

const Home = () => {
    return <div>
        <Intro />
        <Projects />
        <About />
        <ProgrammingWork />
    </div>
}

export default Home;