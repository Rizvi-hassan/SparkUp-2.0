import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis';
import Navbar2 from '../components/Navbar2';
import HeroLanding from '../components/HeroLanding';
import About from '../components/About';
import { useEffect } from 'react';
import Speakers from '../components/Speakers';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
    useEffect(() => {
        const lenis = new Lenis();

        lenis.on('scroll', ScrollTrigger.update)
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        // Cleanup
        return () => {
            lenis.destroy();
        };
    }, [])
    
    return (
        <main className='overflow-hidden'>
            <Navbar2/>
            <HeroLanding />
            <About/> 
            <Speakers />
        </main>
    )
}

export default LandingPage