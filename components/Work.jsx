"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Santonio from './image/santonio.png';
import grayHouse from './image/grayHouse.png';
import bag from './image/bag.png';
import poster from './image/poster.png';
import whitePost from './image/whitePost.png';
import tower from './image/tower.png';
import hat from './image/hat.png';

const gsap = dynamic(() => import('gsap'), { ssr: false });
const ScrollTrigger = dynamic(() => import('gsap/ScrollTrigger'), { ssr: false });

const Work = () => {
    const elementsRef = useRef([]);
    const textRef = useRef([]);
    const gapRef = useRef();
    const prevScrollY = useRef(0);

    useEffect(() => {
        const loadGSAP = async () => {
            const gsapInstance = (await import('gsap')).default;
            const ScrollTriggerInstance = (await import('gsap/ScrollTrigger')).ScrollTrigger;
            gsapInstance.registerPlugin(ScrollTriggerInstance);

            elementsRef.current.forEach(element => {
                gsapInstance.to(element, {
                    borderRadius: "0px",
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 2,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom",
                        end: "180% bottom",
                        scrub: true,
                        markers: false, // Set to false when not debugging
                    },
                });
            });

            ScrollTriggerInstance.create({
                onUpdate: (self) => {
                    const currentScrollY = self.scroll();
                    const direction = currentScrollY > prevScrollY.current ? 1 : -1;
                    if (direction === 1) {
                        textRef.current.forEach(text => {
                            gsapInstance.to(text, {
                                scale: 2
                            });
                        })
                        gsapInstance.to(gapRef.current, {
                            gap: "40px"
                        })
                    } else {
                        textRef.current.forEach(text => {
                            gsapInstance.to(text, {
                                scale: 1
                            });
                        })
                        gsapInstance.to(gapRef.current, {
                            gap: "0"
                        })
                    }
                    prevScrollY.current = currentScrollY;
                }
            });
        };

        loadGSAP();
    }, []);

    return (
        <>
            <div className="lg:h-[50px]"></div>
            <div className="min-h-[3000px] relative">
                {/* <div className="sticky top-0 left-0 p-10 text-5xl lg:text-8xl uppercase font-bold z-0">Playground</div> */}
                {/* <div className="h-[400px] lg:h-[200px]"></div> */}
                <div className="sticky top-1/2 lg:top-[30vh] flex items-center justify-center">
                    <div ref={gapRef} className="transform origin-center right-0 p-10 text-5xl ps-32 uppercase flex flex-col font-bold z-10 w-fit duration-300 ease-out">
                        <div ref={el => textRef.current[0] = el} className='duration-100'>Digital</div>
                        <div ref={el => textRef.current[1] = el} className='duration-200'>Canvas</div>
                        <div ref={el => textRef.current[2] = el} className='duration-300'>Creator</div>
                    </div>
                </div>
                <div
                    ref={el => elementsRef.current[0] = el}
                    className="absolute z-10 top-40 lg:top-52 left-2 w-[180px] lg:w-[280px] aspect-[9/14] flex items-center overflow-hidden justify-center text-white scale-50"
                >
                    <Image fill src={poster} alt="" className='w-full h-full object-cover'/>
                </div>
                <div
                    ref={el => elementsRef.current[1] = el}
                    className="absolute z-20 lg:top-80 xl:top-72 md:right-10 lg:right-12 xl:right-20 lg:w-[650px] lg:h-[850px] flex items-center overflow-hidden justify-center text-white scale-50"
                >
                    <Image fill src={grayHouse} alt="" className='w-full h-full object-cover'/>
                </div>
                <div
                    ref={el => elementsRef.current[2] = el}
                    className="absolute z-10 top-40 lg:top-52 left-[200px] lg:left-[300px] size-[150px] lg:size-[250px] flex items-center overflow-hidden justify-center text-white scale-50"
                >
                    <Image fill src={bag} alt="" className='w-full h-full object-cover'/>
                </div>
                <div
                    ref={el => elementsRef.current[3] = el}
                    className="absolute z-10 lg:top-[1300px] left-10 size-[260px] flex items-center overflow-hidden justify-center text-white scale-50"
                >
                    <Image fill src={whitePost} alt="" className='w-full h-full object-cover'/>
                </div>
                <div
                    ref={el => elementsRef.current[4] = el}
                    className="absolute z-10 lg:top-[1300px] lg:left-[500px] w-[260px] aspect-[8/12] flex items-center overflow-hidden justify-center text-white scale-50"
                >
                    <Image fill src={tower} alt="" className='w-full h-full object-cover'/>
                </div>
                <div
                    ref={el => elementsRef.current[5] = el}
                    className="absolute z-10 lg:top-[1300px] lg:left-[770px] size-[260px] flex items-center overflow-hidden justify-center text-white scale-50"
                >
                    <Image fill src={hat} alt="" className='w-full h-full object-cover'/>
                </div>
            </div>
        </>
    );
};

export default Work;
