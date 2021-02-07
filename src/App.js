import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import {Parallax}  from 'react-parallax'
import Container from 'react-bootstrap/Container'
import MyCarousel from './components/myCarousel/MyCarousel'
import MyNavbar from './components/mynavbar/MyNavbar'
import TitleMessage from './components/title-message/TitleMessage'
import About from './pages/about/about'
import BgImage from "./assets/img/parallex/background.webp";
import Skills from './pages/skills/skills'



import './App.css';
import Experience from './pages/experience/Experience'
import ProjectTimeline from './components/project-timeline/Timeline'



const App=()=> {
  return (
    <div className="App" style={{ position: "relative" }}>
     <MyNavbar />
     <MyCarousel />
     <TitleMessage/>
     <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={BgImage}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
            <Container className="container-box rounded">
              <Slide top duration={500}>
              <Skills/>
              </Slide>
            </Container>
          </div>
          <div>
            <Container className="container-box rounded">
              <Slide left duration={500}>
                <Experience/>
              </Slide>
            </Container>
          </div>
          <div>
            <Container className="container-box rounded">
              <Slide left duration={500}>
                <ProjectTimeline/>
              </Slide>
            </Container>
          </div>
      
    </div>
  );
}

export default App;
