import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container'

// components 
import MyNavbar from "./components/navbar/my-navbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import ParallaxImage from "./assets/img/parallax/parallax1.webp"

import './App.css';
import Skills from './pages/skills/skills.component';
import Projects from './pages/projects/projects.component';

const App = () => {
  return ( 
    <div>
      <MyNavbar/>
      <MyCarousel/>
      <TitleMessage/>
      <div>
        <Parallax blur={{ min: -30, max: 30 }} bgImage="" bgImageAlt="" strength={-200}>
          <div className="about-section">
            <Container className="container-box rounded">
              <Fade duration={2000}>
                <About/>
              </Fade>
            </Container>
          </div>
          <div className="skills-section">
            <Container className="container-box rounded">
              <Fade duration={2000}>
                <Skills/>
              </Fade>
            </Container>
          </div>
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
