"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Santonio from './image/santonio.png';
import Me from './image/MyProfileRmHD.png';
import grayHouse from './image/grayHouse.png';
import bag from './image/bag.png';
import poster from './image/poster.png';
import poster2 from './image/poster2.png';
import poster3 from './image/poster3.png';
import whitePost from './image/whitePost.png';
import tower from './image/tower.png';
import hat from './image/hat.png';
import man from './image/man.png';
import grid from './image/grid.png';
import phone from './image/phone.png';
import mobileView from './image/mobileView.png';
import mirror from './image/mirror.png';
import sample from './image/sample.mp4';

const gsap = dynamic(() => import('gsap'), { ssr: false });
const ScrollTrigger = dynamic(() => import('gsap/ScrollTrigger'), { ssr: false });

const Portfolio = () => {
    const elementsRef = useRef([]);
    const textRef = useRef([]);
    const gapRef = useRef();
    const bottomRef = useRef();
    const topRef = useRef();
    const bgRef = useRef();
    const navRef = useRef();
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
                                scale: 1,
                                translateY: "-100px",
                                translateX: "-200px",
                            });
                        });
                        gsapInstance.to(gapRef.current, {
                            gap: "0",
                        });
                        gsapInstance.to(topRef.current, {
                            translateY: "0"
                        });
                        gsapInstance.to(bottomRef.current, {
                            // fontSize: "11rem",
                            scale: 2.5,
                            translateX: "-60vw",
                            paddingRight: "6rem",
                        });
                        gsapInstance.to(bgRef.current, {
                            background: "#fff",
                        });
                    } else {
                        textRef.current.forEach(text => {
                            gsapInstance.to(text, {
                                scale: 2,
                                translateY: "0px",
                                translateX: "0px",
                            });
                        });
                        gsapInstance.to(gapRef.current, {
                            gap: "40px",
                        });
                        gsapInstance.to(topRef.current, {
                            translateY: "-50px"
                        });
                        gsapInstance.to(bottomRef.current, {
                            // fontSize: "4rem",
                            scale: 1,
                            translateX: "0",
                            paddingRight: "7rem",
                        });
                        gsapInstance.to(bgRef.current, {
                            background: "#ff4a0d",
                        });
                    }
                    prevScrollY.current = currentScrollY;
                }
            });
        };

        loadGSAP();
    }, []);

    return (
        <>
            <div ref={bgRef} className="h-screen bg-[#ff4a0d] flex flex-col justify-between">
                <div className="py-8 lg:text-[6.5rem] leading-[0.9] text-center font-[900] px-10">
                    <div className="w-fit ms-auto">
                        <div className="">HI, WELCOME HOME </div>
                        <div className="">It’s ME — Danial®</div>
                    </div>
                </div>
                <div className="lg:h-[500px]">
                    <div className="relative max-w-lg h-full">
                        <Image src={Me} alt="" fill className='object-contain brightness-90 bg-[url(/backgroundBlack.png)] bg-cover'/>
                    </div>
                </div>
            </div>
            <div className="min-h-[5200px] relative">
                <div className="fixed w-full top-1/2 lg:top-[30vh] flex items-center justify-end pe-20 lg:pe-40">
                    <div ref={gapRef} className="transform origin-center right-0 p-10 text-5xl ps-32 uppercase gap-[40px] flex flex-col font-[900] z-10 w-fit duration-300 ease-out">
                        <div ref={el => textRef.current[0] = el} className='duration-100 relative scale-[2]'>
                            Digital,
                            <div className="absolute top-2 right-8 text-[0.35rem]">Brand, Art Direction,<br /> Product, Website</div>
                        </div>
                        <div ref={el => textRef.current[1] = el} className='duration-200 relative scale-[2]'>
                            Industrial,
                            <div className="absolute top-2 -left-14 text-[0.35rem]">FURNITURE, TOYS <br />gadgets, spaces</div>
                        </div>
                        <div ref={el => textRef.current[2] = el} className='duration-300 relative scale-[2]'>
                            Designer
                            <div className="absolute top-2 right-3 text-[0.35rem]">IN THE END, I’m<br />JUST a designer</div>
                        </div>
                    </div>
                </div>
                <div ref={bottomRef} className="fixed bottom-0 left-0 w-full text-end lg:text-[4rem] xl:text-[4.5rem] xl:pe-32 duration-100 up percase px-8 leading-[1] pb-12 font-extrabold pe-28">
                    Kcube®—'2024
                </div>
                <div ref={topRef} className="fixed top-0 z-50 -translate-y-[50px] left-0 w-full grid grid-cols-4 text-lg font-extrabold py-2 leading-[1] px-8 text-white mix-blend-difference">
                    <div className="">Kaung Khant Kyaw</div>
                    <div className="">LinkedIn</div>
                    <div className="">
                        <div className="">(+95) 925 559 9863</div>
                        <div className="">kaungkhantkyawdk@gmail.com</div>
                    </div>
                </div>
                <div ref={navRef} className="fixed z-50 bottom-0 left-0 w-full font-bold text-xs px-8 py-2 grid grid-cols-5 text-white mix-blend-difference">
                    <div className="">Kaung Khant Kyaw® — 24<br/>@Copyright 2024</div>
                    <div className="flex flex-col">
                        <a href="">Facebook</a>
                        <a href="">Instagram</a>
                    </div>
                    <div className="flex flex-col">
                        <a href="">LinedIn</a>
                        <a href="">GitHub</a>
                    </div>
                    <div className="text-end col-span-2">→ Let’s talk ←</div>
                </div>
                <div
                    ref={el => elementsRef.current[0] = el}
                    className="absolute z-10 top-40 lg:top-52 left-2 w-[180px] lg:w-[280px] aspect-[9/14] flex items-center justify-center text-white scale-50"
                >
                    <Image fill src={poster} alt="" className='w-full h-full object-cover active:scale-105 duration-300'/>
                </div>
                <div
                    ref={el => elementsRef.current[1] = el}
                    className="absolute z-20 lg:top-[500px] xl:top-72 md:right-10 lg:right-12 xl:right-20 lg:w-[650px] lg:h-[850px] flex items-center justify-center text-white scale-50"
                >
                    <Image fill src={grayHouse} alt="" className='w-full h-full object-cover active:scale-105 duration-300'/>
                </div>
                <div
                    ref={el => elementsRef.current[2] = el}
                    className="absolute z-10 top-40 lg:top-52 left-[200px] lg:left-[300px] size-[150px] lg:size-[250px] flex items-center justify-center text-white scale-50"
                >
                    <Image fill src={bag} alt="" className='w-full h-full object-cover active:scale-105 duration-300'/>
                </div>
                <div
                    ref={el => elementsRef.current[3] = el}
                    className="absolute z-10 lg:top-[1450px] xl:top-[1300px] left-10 size-[260px] flex items-center justify-center text-white scale-50"
                >
                    <Image fill src={whitePost} alt="" className='w-full h-full object-cover active:scale-105 duration-300'/>
                </div>
                <div
                    ref={el => elementsRef.current[4] = el}
                    className="absolute z-10 lg:top-[1000px] xl:top-[1300px] lg:left-[100px] xl:left-[500px] w-[260px] aspect-[8/12] flex items-center justify-center text-white scale-50"
                >
                    <Image fill src={tower} alt="" className='w-full h-full object-cover active:scale-105 duration-300'/>
                </div>
                <div
                    ref={el => elementsRef.current[5] = el}
                    className="absolute z-10 lg:top-[1400px] xl:top-[1300px] lg:left-[770px] size-[260px] flex items-center justify-center text-white scale-50"
                >
                    <Image fill src={hat} alt="" className='w-full h-full object-cover active:scale-105 duration-300'/>
                </div>
                <div
                    ref={el => elementsRef.current[6] = el}
                    className="absolute z-10 lg:top-[1800px] left-6 w-[380px] xl:w-[440px] aspect-[3/4] flex items-center justify-center text-white scale-50"
                >
                    <Image fill src={poster2} alt="" className='w-full h-full object-cover active:scale-105 duration-300'/>
                </div>
                <div
                    ref={el => elementsRef.current[7] = el}
                    className="absolute z-10 lg:top-[1800px] lg:right-[360px] w-[400px] xl:w-[600px] aspect-square flex items-center justify-center text-white scale-50"
                >
                    <Image fill src={grid} alt="" className='w-full h-full object-cover active:scale-105 duration-300'/>
                </div>
                <div
                    ref={el => elementsRef.current[8] = el}
                    className="absolute z-10 lg:top-[1800px] lg:right-5 w-[250px] aspect-[2/3] flex items-center justify-center text-white scale-50"
                >
                    <Image fill src={poster3} alt="" className='w-full h-full object-cover active:scale-105 duration-300'/>
                </div>
                <div
                    ref={el => elementsRef.current[9] = el}
                    className="absolute z-10 lg:top-[2550px] left-10 w-[500px] aspect-[4/3] flex items-center justify-center text-white scale-50"
                >
                    <Image fill src={phone} alt="" className='w-full h-full object-cover active:scale-105 duration-300'/>
                </div>
                <div
                    ref={el => elementsRef.current[10] = el}
                    className="absolute z-10 lg:top-[2550px] xl:top-[2600px] lg:left-auto lg:right-10 xl:right-auto xl:left-[600px] w-[400px] xl:w-[350px] aspect-[4/9] flex items-center justify-center text-white scale-50"
                >
                    <Image fill src={mobileView} alt="" className='w-full h-full object-cover active:scale-105 duration-300'/>
                </div>
                <div
                    ref={el => elementsRef.current[11] = el}
                    className="absolute z-10 lg:top-[3100px] xl:top-[2550px] lg:right-auto lg:left-20 xl:left-auto xl:right-12 w-[320px] aspect-square flex items-center justify-center text-white scale-50"
                >
                    <Image fill src={mirror} alt="" className='w-full h-full object-cover active:scale-105 duration-300'/>
                </div>
                <div
                    ref={el => elementsRef.current[12] = el}
                    className="absolute z-10 lg:top-[3700px] left-1/2 -translate-x-1/2 w-[70vw] bg-slate-200 p-20 flex items-center justify-center text-white scale-50"
                >
                    <video
                    src={sample}
                    className="w-full h-full object-cover active:scale-105 duration-300"
                    alt=""
                    muted
                    loop
                    autoPlay
                    />
                </div>
            </div>
        </>
    );
};

export default Portfolio;
