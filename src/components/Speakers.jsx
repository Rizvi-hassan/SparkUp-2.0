import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import SpeakerCard from '../molecules/SpeakerCard'
import { speakers } from '../Contents'

const Speakers = () => {
    useGSAP(() => {

        gsap.from('.speaker-title', {
            yPercent: -20,
            filter: 'blur(20px)',
            scrollTrigger: {
                trigger: '#speakers',
                start: "top 100%",
                end: 'top 40%',
                scrub: true,
            }
        })

        gsap.timeline()
        .to('.bubble', {
            scale: 60,
            ease: 'power1.in',
            scrollTrigger: {
                trigger: '#speakers',
                start: 'top 40%',
                end: 'top top',
                scrub: true,
            }

        })

        

    }, [])



    return (
        <section id='speakers' className='relative min-h-lvh bg-black overflow-visible'>
            <div className='bubble absolute w-10 h-10 rounded-[40px] top-100 left-1/2 -translate-x-1/2 bg-[#d8d9d3]'>
            </div>
            <div className='noisy'></div>
            <div className='speaker-title relative pt-30 h-lvh text-center text-[80px] md:text-[100px] font-eb text-gradient-red font-bold '>Meet The <br /> SPEAKERS
            </div>
            <div className='relative w-full h-full inset-0 bg-[#d8d9d3]'>
                <div className='noisy'></div>
                {speakers.map((speaker, idx) => (
                    <SpeakerCard name={speaker.name} about={speaker.about} image={speaker.about} key={idx} id={idx} />
                ))}
            </div>
        </section>
    )
}

export default Speakers