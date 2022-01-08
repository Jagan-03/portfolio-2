import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BrowserRouter as Router,
} from "react-router-dom";

// Components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Routes from "./components/routes";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  React.useEffect(() => {
  }, []);

  return (
      <div className="wrapper">
        <Router>
          <Navbar />
          <Routes />
          <Footer />
        </Router>
      </div>
  );
};

export default App;
