import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Navbar2 from '../components/Navbar2';
import HeroLanding from '../components/HeroLanding';
import About from '../components/About';

gsap.registerPlugin(ScrollTrigger);


const LandingPage = () => {
    
    return (
        <main className='overflow-hidden'>
            <Navbar2/>
            <HeroLanding />
            <About/> 
            <div className='min-h-dvh'></div>
        </main>
    )
}

export default LandingPage