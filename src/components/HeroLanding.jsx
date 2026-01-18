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
                scrub: 1,
                pin: true,
                // markers: true
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
                pin: true,
                scrub: 1,
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
        <section id='hero relative h-lvh'>
            <div className='absolute w-full h-lvh flex-centre'>
                <div className='size-full video'>
                    <video
                        ref={videoRef}
                        muted
                        preload='auto'
                        playsInline
                        src="/video/output2.mp4"
                        // {isMobile? pos}
                        poster={isMobile ? '/images/frame-1.png' : ''}
                        className='h-full w-full relative object-cover bottom-0'
                    />
                    {/* Comment this line to remove noisy effect from background video  <----------------  */}
                    <div className='absolute w-full h-[100px] bg-linear-to-t from-black to-transparent left-0 bottom-0'></div>
                    <div className='noisy h-full'></div>
                </div>
            </div>
            
            <div className='relative hero pt-20 h-lvh'>
                <h1 className='title bg-white text-gradient-white text-center font-playfair text-7xl md:text-9xl font-bold abs-centre'>
                    SPARKUP <br />
                    <span className='text-gradient-red'>SUMMIT.</span>
                </h1>
                <div className='subtitle text-4xl md:text-6xl text-red-600 text-center text-nowrap font-playfair abs-centre font-semibold '>
                    <p className='text-gradient-white'>Sparking Innovation</p>
                    <p className='text-gradient-red'>Fueling Growth</p>
                </div>
                <span className='absolute bottom-20 md:bottom-5 left-1/2 -translate-x-1/2 font-eb'>
                scroll down
                </span>
            </div>
        </section>
    )
}

export default HeroLanding