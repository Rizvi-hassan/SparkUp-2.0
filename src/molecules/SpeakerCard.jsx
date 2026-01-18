import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import spyImg from './../assets/spy-img.jpg'


const SpeakerCard = ({name, about, image, id}) => {
    const imgRef = useRef(null)
    const boxRef = useRef(null)
    const titleRef = useRef(null)
    const aboutRef = useRef(null)

    
    useGSAP( ()=> {
        const titleSplit = SplitText.create(titleRef.current, {type: 'chars'});
        const aboutSplit = SplitText.create(aboutRef.current, {type: 'chars'})
        
        gsap.to(imgRef.current, {
            objectPosition: '100% 0%',
            scrollTrigger: {
                trigger: boxRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        })

        let t = 0.05;
        gsap.from(titleSplit.chars, {
            opacity: 0,
            duration: t,
            delay: t,
            stagger: t,
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 90%',
                end: 'top 0%',
            }
        })
        
        gsap.from(aboutSplit.chars, {
            opacity: 0,
            duration: t,
            delay: t,
            stagger: t,
            scrollTrigger: {
                trigger: aboutRef.current,
                start: 'top 90%',
                end: 'top 0%',
            }
        })

    })

    

  return (
      <div ref={boxRef} className={`cards relative w-full md:w-[90%] mx-auto h-150 md:h-200 flex flex-col items-center ${id % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} pb-20`}>
        <div className='w-full px-10 md:px-[5%] md:w-1/2 justify-between m-auto h-[70%] md:h-[80%] relative overflow-hidden'>
              <img ref={imgRef} src={spyImg} alt={name} className='relative object-cover w-full h-full object-[100%] shadow-xl'  />
        </div>
        <div className='w-full pl-10 md:pl-[10%] md:w-1/2 text-gray-700 '>
            <p ref={titleRef} className='font-eb font-bold text-4xl'>{name}</p>
            <p ref={aboutRef} className='font-eb font-bold text-2xl'>{about}</p>
        </div>
    </div>
  )
}

export default SpeakerCard