import {ScrollTrigger, SplitText} from "gsap/all";
import { gsap } from "gsap"; 
gsap.registerPlugin(ScrollTrigger,SplitText);

import Navbar from './components/Navbar';

import React from 'react';  
const App  = () => {
  return (
    <main>
      <h1 className="flex-center h-[100vh]"> hey</h1>
      <Navbar/>
    </main>
  )
}
export default App;