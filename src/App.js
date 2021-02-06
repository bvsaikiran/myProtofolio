import React from 'react'
import './App.css';
import MyCarousel from './components/myCarousel/MyCarousel';
import MyNavbar from './components/mynavbar/MyNavbar';
import TitleMessage from './components/title-message/TitleMessage';

const App=()=> {
  return (
    <div className="App">
     <MyNavbar />
     <MyCarousel />
     <TitleMessage/>
    </div>
  );
}

export default App;
