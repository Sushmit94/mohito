import React from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, CSSPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, CSSPlugin);

import { navLinks } from '../constants/index.js';
const Navbar = () => {
useGSAP(()=> {
  const navTween = gsap.timeline({
    scrollTrigger: {
      trigger:'nav',
      start:'bottom top',

    }
  });
  navTween.fromTo('nav',{ backgroundColor:'transparent',},{
    backgroundColor:'#00000050',
    backgroundFilter: 'blur(10px)',
    duration:1,
    ease: 'power1.inOut'
  })
})

  return (

   <nav>
    <div>
      
      <a  href="#home" className="flex items-center gap-2">
        <img src="/images/logo.png" alt="logo" className="" />
        <p>velvet Pour</p>
      </a>
      <ul>
        {navLinks.map((Link)=>(
          <li key={Link.id}>
            <a href={`#${Link.id}`} >
             {Link.title}
            </a>
          </li>
        ))}
      </ul>

    </div>
   </nav>
  );
};

export default Navbar;