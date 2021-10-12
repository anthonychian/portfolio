import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container'

// components 
import MyNavbar from "./components/MyNavbar";
import MyCarousel from "./components/MyCarousel";
import About from "./pages/about/About.js";

import './App.css';
// import Skills from './pages/skills/skills.component';
import Projects from './pages/projects/Projects.js';

const App = () => {
  return ( 
    <div>
      <MyNavbar/>
      <MyCarousel/>
      
      <div>
        <Parallax blur={{ min: -30, max: 30 }} bgImage="" bgImageAlt="" strength={-200}>
          <div className="about-section">
            <Container className="container-box rounded">
              <Fade duration={2000}>
                <About/>
              </Fade>
            </Container>
          </div>
          {/* <div className="skills-section">
            <Container className="container-box rounded">
              <Fade duration={2000}>
                <Skills/>
              </Fade>
            </Container>
          </div> */}
          <div className="projects-section">
            <Container className="container-box rounded">
              <Fade duration={2000}>
                <Projects/>
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      
    </div>
    );
};

export default App;
