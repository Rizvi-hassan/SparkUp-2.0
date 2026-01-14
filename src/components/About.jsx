import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';

const About = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    
    useGSAP(()=> {
        let titleASplit = SplitText.create('.title-a', {type: 'chars'})
        let titleVSplit = SplitText.create('.title-v', {type: 'chars'})

        let contentASplit = SplitText.create('.content-a', {type: 'lines'})
        let contentVSplit = SplitText.create('.content-v', {type: 'lines'})
        

        titleASplit.chars.forEach( char => char.classList.add('text-gradient-red'))
        titleVSplit.chars.forEach( char => char.classList.add('text-gradient-red'))

        gsap.from(titleASplit.chars, {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.02,
            scrollTrigger: {
                trigger: '.title-a',
                start: 'top 70%',
                // markers: true
            }
        })

        gsap.from(titleVSplit.chars, {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.02,
            scrollTrigger: {
                trigger: '.title-v',
                start: 'top 70%',
            }
        })

        gsap.from(contentASplit.lines, {
            yPercent: 20,
            opacity: 0,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.02,
            scrollTrigger: {
                trigger: '.content-a', 
                start: 'top 70%',
            }
        })

        gsap.from(contentVSplit.lines, {
            yPercent: 20,
            opacity: 0,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.02,
            scrollTrigger: {
                trigger: '.content-v', 
                start: 'top 70%',
            }
        })

        if(! isMobile) {
            gsap.to('.promo', {
                yPercent: 100,
                
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            })
        }

        

    }, [])


    return (
        <>
            <section id='about' className='w-full min-h-dvh flex flex-col md:flex-row justify-center items-start bg-black relative'>
                <div className='noisy z-10'></div>
                <div className='promo w-full md:w-1/2 z-10 mt-20'>
                    <iframe className='mx-auto z-10 w-[90%] md:w-[80%] rounded-2xl' width="560" height={isMobile?'215' : '315'} src="https://www.youtube.com/embed/PVbI80dej4c?si=wNEi5FqiS18lPaEv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className='content w-full p-6 md:p-10 md:w-1/2 z-10'>
                    <h1 className='title-a font-eb text-gradient-red md:text-6xl font-bold'>About Us</h1>
                    <p className='content-a font-playfair mb-10 md:text-xl'>Welcome to the Spark Up Summit, where innovation and entrepreneurship converge to ignite extraordinary possibilities! This summit isn't just an event—it's a vibrant platform for visionaries, creators, and changemakers to unite and spark the next wave of ideas that will shape the future. At Spark Up, bold startups, cutting-edge technology, and fresh perspectives take centre stage. Here, innovators showcase their brilliance, engage in inspiring discussions, and connect with industry leaders and investors eager to back the next big thing. Whether you're pitching your idea, networking, or learning from the best, Spark Up will fuel your entrepreneurial spirit and propel your ideas into the future.</p>

                    <h1 className='title-v font-eb text-gradient-red md:text-6xl font-bold'>Our Vision</h1>
                    <p className='content-v font-playfair md:text-xl'>Spark Up Summit aims to spark an entrepreneurial spirit among diverse participants by fostering a collaborative environment for idea exchange, experience sharing, and mentorship, which are key elements for success. Through networking sessions, various competitions, and mentorship programs, young entrepreneurs gain vital skills and connections to scale their ventures while emphasising sustainable practices and ethical decision-making. By embracing diversity and promoting collaboration, E-fest empowers students to unleash their potential and drive positive change in their communities, expanding our reach through alliances with various stakeholders to create opportunities for all to engage in and contribute to our vibrant community.</p>
                </div>

            </section>
        </>
    )
}

export default About