import React from "react";
import Container from "react-bootstrap/Container";

// components
import MyNavbar from "./components/MyNavbar";
import MyCarousel from "./components/MyCarousel";
import About from "./pages/about/About.js";

import "./App.css";
import Projects from "./pages/projects/Projects.js";

const App = () => {
  return (
    <>
      <MyNavbar />

      <section className="home-section">
        <MyCarousel />
      </section>

      <section className="about-section">
        <Container className="container-box rounded">
          <About />
        </Container>
      </section>

      <section className="projects-section">
        <Container className="container-box rounded">
          <Projects />
        </Container>
      </section>
    </>
  );
};

export default App;
