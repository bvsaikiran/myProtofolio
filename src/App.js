import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import LightSpeed from 'react-reveal/LightSpeed';
import Roll from 'react-reveal/Roll';
import Flip from 'react-reveal/Flip';
import {Parallax}  from 'react-parallax'
import Container from 'react-bootstrap/Container'
import MyCarousel from './components/myCarousel/MyCarousel'
import MyNavbar from './components/mynavbar/MyNavbar'
import TitleMessage from './components/title-message/TitleMessage'
import About from './pages/about/about'
import BgImage from "./assets/img/parallex/3.webp";
import Skills from './pages/skills/skills'
// import Particles from "react-particles-js";
// import { particlesOptions } from "./ParticlesOptions";



import './App.css';
import Experience from './pages/experience/Experience'
import ProjectTimeline from './components/project-timeline/Timeline'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'



const App=()=> {
  return (
    <div className="App" style={{ position: "relative" }}>
     <MyNavbar />
     <MyCarousel />
     <TitleMessage/>
     {/* <Particles
        className="particles particles-box"
        params={particlesOptions}
      />  */}
     <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={BgImage}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
            <hr/>
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
            <Container className="container-box rounded">
            <hr/>
              {/* <Slide top duration={500}>
              <Skills/>
              </Slide> */}
              <Roll left>
              <Skills/>
              </Roll>
            </Container>
          </div>
          <div>
            <Container className="container-box rounded">
            <hr/>
              {/* <Slide left duration={500}>
                <Experience/>
              </Slide> */}
              <LightSpeed left>
              <Experience/>
        </LightSpeed>
            </Container>
          </div>
          <div>
            <Container className="container-box rounded">
            <hr/>
              
                <ProjectTimeline/>
            </Container>
          </div>
          <div>
            <Container className="container-box rounded">
            <hr/>
              {/* <Slide left duration={500}>

                <Contact/>
              </Slide> */}
              <Flip left>
              <Contact/>
              </Flip>
            </Container>
          </div>
          <div>
            <hr/>
                <Footer/>
          </div>

    </div>
  );
}

export default App;
