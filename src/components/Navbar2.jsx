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

    tl.current.to(navBoxRef.current, {
      width: '200px',
      height: '300px',
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
            <div id='ham-box' onClick={toggleNavOpen} className='h-16 w-16 transition-200 rounded-md flex-centre'>
              <div className=' relative h-5 w-14 overflow-hidden group/nav'>
                <div id='ham-1' className={`w-14 h-1 group-hover/nav:w-10 bg-white mb-2 rounded-md border-none transition-200 ${navOpen? 'hidden' : 'block'}`}></div>
                <div id='ham-2' className={`w-10 h-1 bg-white mb-2 rounded-md border-none transition-200 ${navOpen ? 'hidden' : 'block'}`}></div>
                <div className={`absolute top-0 left-0 text-white font-bold bg-black rounded-sm tracking-widest text-center cursor-pointer w-full transition-200 ${navOpen? 'translate-y-0': 'translate-y-full'}`} style={{lineHeight: '20px'}}>close</div>
              </div>
            </div>

            {/* Links  */}
            <div className='flex flex-col gap-1 text-black pl-6 mt-4'>
              <a href="#hero" className='group/links hover-active transition-200 overflow-hidden'>Home
                <span className=' w-[50px] block bg-black border border-black -translate-x-[110%] transition-200 link-underline group-hover/links:translate-x-0 '></span>
              </a>
              <a href="#about" className='group/links hover-active transition-200 overflow-hidden'>About
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
            <div className="text-center mt-4 mb-5">
              <button className='m-auto h-[50%] bg-red-600 w-40 p-1 hover:cursor-pointer hover-active transition-200 rounded-sm'>Register</button>
            </div>

          </div>

        </div>

        {/* sparkup logo  */}
        <div className='relative h-full flex-centre w-[inherit]'>
          <a href="#hero" className='absolute h-2/3 w-fit '>
            <img ref={logoRef} className='size-full ' src="/images/logo-dark.png" alt="sparkup logo" />
          </a>
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