import { useGSAP } from '@gsap/react'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true)
    const tl = useRef(null)

    const changeLoading = () => {
        tl.current.play();
        setTimeout(() => setIsLoading(false), 1200);
    }

    useEffect(() => {
        if (document.readyState === 'complete') {
            changeLoading();
            return;
        }
        const handleLoad = () => changeLoading();
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
    }, []);

    useGSAP(() => {
        tl.current = gsap.timeline({ paused: true })

        tl.current
            .to('.layer2', {
                width: 0,
                ease: 'power2.in',
                duration: 1,
            })
            .to('.layer1', {
                width: 0,
                ease: 'power2.in',
                duration: 1,
            }, "-=0.8")

    })

    return (
        <>
            {isLoading ? (
                <div className='w-dvw h-dvh fixed bg-transparent z-9999 '>
                    <div className='w-full h-full grid grid-cols-5'>
                        <div className='box w-full h-full relative'>
                            <div className='layer1 absolute w-full h-full top-0 left-0 bg-red-800'></div>
                            <div className='layer2 absolute w-full h-full inset-0 bg-gray-900'></div>
                        </div>
                        <div className='box w-full h-full relative'>
                            <div className='layer1 absolute w-full h-full top-0 left-0 bg-red-800'></div>
                            <div className='layer2 absolute w-full h-full inset-0 bg-gray-900'></div>
                        </div>
                        <div className='box w-full h-full relative'>
                            <div className='layer1 absolute w-full h-full top-0 left-0 bg-red-800'></div>
                            <div className='layer2 absolute w-full h-full inset-0 bg-gray-900'></div>
                        </div>
                        <div className='box w-full h-full relative'>
                            <div className='layer1 absolute w-full h-full top-0 left-0 bg-red-800'></div>
                            <div className='layer2 absolute w-full h-full inset-0 bg-gray-900'></div>
                        </div>
                        <div className='box w-full h-full relative'>
                            <div className='layer1 absolute w-full h-full top-0 left-0 bg-red-800'></div>
                            <div className='layer2 absolute w-full h-full top-0 left-0 bg-gray-900'></div>
                        </div>
                    </div>
                </div>)

                : null}
        </>
    )
}

export default Loader