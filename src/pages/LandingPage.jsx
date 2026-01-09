import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 192;

const LandingPage = () => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([])

    useEffect(() => {
        const frameImages = [];
        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = `/frames/${String(i).padStart(3, "0")}.webp`
            frameImages.push(img);
        }
        setImages(frameImages);
    }, [])

    useEffect(() => {
        if (images.length === 0) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d")
        const scale = window.devicePixelRatio || 1

        // Responsive canvas sizing - always cover full viewport
        const updateCanvasSize = () => {
            const containerWidth = window.screen.width;
            const containerHeight = window.screen.height;

            // Canvas should always match viewport dimensions
            canvas.width = containerWidth * scale;
            canvas.height = containerHeight * scale;
            canvas.style.width = `${containerWidth}px`;
            canvas.style.height = `${containerHeight}px`;
            context.scale(scale, scale);
        }

        updateCanvasSize();

        // Handle window resize
        const handleResize = () => {
            updateCanvasSize();
            render();
        };
        
        if(window.visualViewport) {
            window.visualViewport.addEventListener('resize', handleResize);
        }

        const frameState = { frame: 0 }
        let currentFrame = 0;

        const render = () => {
            const frameIndex = Math.round(frameState.frame);
            // if (frameIndex === currentFrame && images[currentFrame]?.complete) return;

            currentFrame = frameIndex;
            const img = images[frameIndex];

            if (img?.complete && img.width > 0 && img.height > 0) {
                const canvasWidth = canvas.width / scale;
                const canvasHeight = canvas.height / scale;

                // Calculate scale to cover entire canvas (cover mode)
                const scaleX = canvasWidth / img.width;
                const scaleY = canvasHeight / img.height;
                const coverScale = Math.max(scaleX, scaleY);

                // Calculate scaled dimensions
                const scaledWidth = img.width * coverScale;
                const scaledHeight = img.height * coverScale;

                // Calculate offsets to center the image
                const offsetX = (scaledWidth - canvasWidth) / 2;
                const offsetY = (scaledHeight - canvasHeight) / 2;

                context.clearRect(0, 0, canvasWidth, canvasHeight);
                context.drawImage(
                    img,
                    -offsetX, -offsetY,
                    scaledWidth,
                    scaledHeight
                );
            }
        }

        // Preload all images for smoother transitions
        let loadedCount = 0;
        images.forEach((img, index) => {
            if (img.complete) {
                loadedCount++;
            } else {
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === images.length) {
                        render();
                    }
                };
            }
        });

        const scrollTrigger = gsap.to(frameState, {
            frame: TOTAL_FRAMES - 1,
            ease: 'none',
            scrollTrigger: {
                start: "top top",
                end: "bottom top",
                scrub: 0.5,
                onUpdate: () => {
                    requestAnimationFrame(render);
                }
            },
        });

        // Initial render
        if (images[0]?.complete) {
            render();
        } else {
            images[0].onload = render;
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            scrollTrigger.kill();
        };
    }, [images])


    return (
        <>
            <div className='relative font-cormorant'>

                {/* Fixed canvas in bg  */}
                <canvas
                    ref={canvasRef}
                    className='fixed top-0 left-0 object-contain'
                    style={{ height: '100lvh', width: '100lvw'}}
                />


                {/* Scrollable Content area */}
                <div style={{ position: "relative", zIndex: 2 }}>
                    <Navbar/>
                    <div className='w-full h-fit'>
                        {/* Random content  */}
                        {/* {Array.from({ length: 20 }).map((_, i) => (
                            <div
                                key={i}
                                className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'} px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[20vh] py-8 md:py-12 lg:py-16`}
                            >
                                <p className='bg-none text-white p-4 sm:p-5 md:p-6 max-w-[90%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] text-sm md:text-sm'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure reiciendis laborum illo placeat magni quidem illum recusandae dolor culpa praesentium, voluptate, minima quam, ab nulla explicabo. Itaque dicta sint molestiae.
                                </p>
                            </div>
                        ))} */}
                    </div>
                </div>

            </div>


        </>
    )
}

export default LandingPage