import {ScrollTrigger, SplitText} from "gsap/all";
import { gsap } from "gsap"; 
gsap.registerPlugin(ScrollTrigger,SplitText);

import Navbar from './components/Navbar';
import Herot from './components/Herot';
import Cocktails from './components/Cocktails';

import React from 'react';  
const App  = () => {
  return (
    <main>
     
      <Navbar/>
      <Herot/>
      <Cocktails />
    </main>
  )
}
export default App;