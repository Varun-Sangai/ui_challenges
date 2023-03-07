import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navigation from './components/navbar'
import Intro from './components/Intro'
import Tokenomics from './components/Tokemonic'
import  Carousel  from './components/carousel'
import Asc from './components/Asc'
import Featu from "./components/featu"
import Fer from "./components/fer"
import Community from './components/community'
import End from './components/end'
function App() {

  return (
    <div>
    <Navigation/>
    <Intro/>
    <Tokenomics/>
    {/* <Asc/> */}
     <Carousel/> 
     <Community/>
     {/* <Featu/> */}
    {/* <div className="q"> */}

    {/* </div> */}
    {/* <Fer/> */}
    <End/>
    </div>
  );
}

export default App;
