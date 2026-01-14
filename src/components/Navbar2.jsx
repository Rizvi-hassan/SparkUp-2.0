import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState, useEffect, useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger';

import top_secret from './../assets/top_secret.jpg'

gsap.registerPlugin(ScrollTrigger)

const Navbar2 = ({ containerRef }) => {

  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)
  const navBoxRef = useRef(null);
  const tl = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    let screenHeight = window.screen.height
    const handleScroll = () => {
      setIsScrolled(window.scrollY > screenHeight)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true })

    tl.current.fromTo(navBoxRef.current, {
      background: 'transparent'
    }, {
      background: 'white',
      duration: 0.1,
    })

    tl.current.fromTo('#ham-2', { borderColor: 'white' }, {
      width: '0',
      duration: 0.1,
    }, "<")

    tl.current.fromTo('#ham-1', { borderColor: 'white' }, {
      background: '#1e2939',
      y: '12px',
      duration: 0.1
    }, "<")

    tl.current.fromTo('#ham-3', { borderColor: 'white' }, {
      background: '#1e2939',
      y: '-12px',
      duration: 0.1
    }, "<")

    tl.current.to("#ham-1", {
      rotation: -45,
      duration: 0.1
    }, "+=0.1")
    tl.current.to("#ham-3", {
      rotation: 45,
      duration: 0.1
    }, "<")

    tl.current.to(navBoxRef.current, {
      width: '185px',
      height: '255px',
      duration: 0.5,
      ease: 'power3.in'
    })

    
  }, [])

  const toggleNavOpen = () => {
    if (!navOpen) {

      tl.current.play();
    } else {

      tl.current.reverse();
    }
    setNavOpen(prev => !prev);
  }



  return (
    <nav className={`w-full z-100 h-18 md:h-20 fixed transition-200 ${isScrolled ? 'bg-black/50 backdrop-blur-lg' : 'bg-transparent backdrop-blur-none'}`}>
      <div className='w-full h-full overflow-visible flex justify-between '>
        <div className='relative overflow-visible h-full w-20'>

          {/* Navigation  */}
          <div ref={navBoxRef} id='nav-box' className='absolute top-0 left-0 rounded-md w-16 h-16 md:ml-2 md:mt-2 animate overflow-hidden z-10 font-playfair'>
            {/* Hamburger  */}
            <div id='ham-box' onClick={toggleNavOpen} className=' h-16 w-16 p-3 transition-200 rounded-md '>
              <div id='ham-1' className='w-10 h-1 mt-1 bg-white mb-2 rounded-md border-none transition-200 '></div>
              <div id='ham-2' className='w-10 h-1  bg-white mb-2 rounded-md border-none transition-200 '></div>
              <div id='ham-3' className='w-10 h-1 bg-white mb-2 rounded-md border-none transition-200 '></div>
            </div>

            {/* Links  */}
            <div className='flex flex-col gap-1 text-black pl-4 mt-4'>
              <a href="#" className='group/links hover-active transition-200 overflow-hidden'>Home
                <span className=' w-[50px] block bg-black border border-black -translate-x-[110%] transition-200 link-underline group-hover/links:translate-x-0 '></span>
              </a>
              <a href="#" className='group/links hover-active transition-200 overflow-hidden'>Events
                <span className=' w-[55px] block bg-black border border-black -translate-x-[110%] transition-200 link-underline group-hover/links:translate-x-0'></span>
              </a>
              <a href="#" className='group/links hover-active transition-200 overflow-hidden'>Team
                <span className=' w-[45px] block bg-black border border-black -translate-x-[110%] transition-200 link-underline group-hover/links:translate-x-0'></span>
              </a>
              <a href="#" className='group/links hover-active transition-200 overflow-hidden'>Glimpse
                <span className=' w-[65px] block bg-black border border-black -translate-x-[110%] transition-200 link-underline group-hover/links:translate-x-0'></span>
              </a>
            </div>

            {/* Top Secret  */}
            <div className='absolute pointer-events-none top-2 left-[110px] mr-2 width-[50px] height[50px] '>
              <img src={top_secret} alt="top secret" className='relative w-full ' />
            </div>

            {/* Register  */}
            <div className="text-center mt-3 mb-5">
              <button className='m-auto h-[50%] bg-red-600 w-40 p-1 hover:cursor-pointer hover-active transition-200 rounded-sm'>Register</button>
            </div>

          </div>

        </div>

        {/* sparkup logo  */}
        <div className='relative h-full flex-centre w-[inherit]'>
          <img ref={logoRef} className='absolute h-2/3 w-fit ' src="/images/logo-dark.png" alt="sparkup logo" />
        </div>

        {/* silicon logo  */}
        <div className='h-full w-[100px] flex-centre'>
          <img className='h-2/3' src="/images/25_yearsW.webp" alt="silicon logo" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar2