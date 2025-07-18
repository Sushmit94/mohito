import {ScrollTrigger, SplitText} from "gsap/all";
import { gsap } from "gsap"; 
gsap.registerPlugin(ScrollTrigger,SplitText);

import Navbar from './components/Navbar';
import Herot from './components/Herot';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';

import React from 'react';  
const App  = () => {
  return (
    <main>
     
      <Navbar/>
      <Herot/>
      <Cocktails />
      <About />
      <Art/>
      <Menu/>
      <Contact />
    </main>
  )
}
export default App;