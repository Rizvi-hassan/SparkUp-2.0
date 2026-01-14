import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive';

const HeroLanding = () => {
    const videoRef = useRef();
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.video',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                pin: true,
            }
        })

        if (!isMobile) {
            videoRef.current.onloadedmetadata = () => {
                tl.to(videoRef.current, {
                    currentTime: videoRef.current.duration,
                });
            };
        }

        gsap.timeline({
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                pin: true,
                scrub: true,
            }
        }).to('.title', {
            letterSpacing: '1920px',
            ease: 'power1.inOut',
        })
        .from('.subtitle', {
            scale: 0,
            opacity: 0,
            ease: 'power1.inOut'
        }, '<')

    }, [])
    return (
        <>
            <div className='absolute inset-0 w-full h-dvh flex-centre '>
                <div className='size-full video'>
                <video
                    ref={videoRef}
                    muted
                    preload='auto'
                    playsInline
                    src="/video/output2.mp4"
                    // {isMobile? pos}
                    poster= {isMobile? '/images/frame-1.png': ''}
                    className='h-lvh w-full relative object-cover bottom-0'
                />
                {/* Comment this line to remove noisy effect from background video  <----------------  */}
                <div className='noisy h-lvh'></div>   
                </div>
                

            </div>
            <section id='hero' className='relative hero pt-20 min-h-dvh'>
                <h1 className='title text-gradient-white text-center font-playfair text-9xl font-bold abs-centre'>
                    SPARKUP <br />
                    <span className='text-gradient-red'>SUMMIT.</span>
                </h1>
                <div className='subtitle text-4xl md:text-6xl h-fit w-full text-red-600 text-center font-playfair abs-centre bottom-0 font-semibold '>
                    <p className='text-gradient-white'>Sparking Innovation</p>
                    <p className='text-gradient-red'>Fueling Growth</p>
                </div>
            </section>
        </>
    )
}

export default HeroLanding