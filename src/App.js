import React from 'react'
import Fade from 'react-reveal/Fade'
import {Parallax}  from 'react-parallax'
import Container from 'react-bootstrap/Container'
import MyCarousel from './components/myCarousel/MyCarousel'
import MyNavbar from './components/mynavbar/MyNavbar'
import TitleMessage from './components/title-message/TitleMessage'
import About from './pages/about/about'
import BgImage from "./assets/img/parallex/background.webp";


import './App.css';



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
    </div>
  );
}

export default App;
