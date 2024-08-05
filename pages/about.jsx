import Page from "@/components/page";
import Social from "@/components/Social";
import UseMousePosition from "@/components/UseMousePosition";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image1 from "../components/image/image1.png";
import image2 from "../components/image/image2.png";
import image3 from "../components/image/image3.jpg";
import FloatBtn from "@/components/FloatBtn";
import Link from "next/link";
import TextAnimate from "@/components/Layout/TextAnimate";
import Santonio from "@/components/image/santonio.png";
import portfolio from "@/components/image/portfolio.png";
import { FaArrowRight } from "react-icons/fa";
import { LinkPreview } from "@/components/Preview";
import { FlipWords } from "@/components/FlipWords";
import { ContainerScroll } from "@/components/ContainerScroll";
import { TechStack } from "@/components/TechStack";
import { MyTechs, Review } from "@/components/MyTech";

const projectList = [
    { name: "Acme", url: "https://acme-online-shop.vercel.app" , tech: "Next.js, Vercel, Tailwind", date: "July 2024" },
    { name: "Leiga", url: "https://leiga.onrender.com" , tech: "React, Tailwind, Lenis", date: "May 2024" },
    { name: "Santonio", url: "https://santonio.vercel.app" , tech: "Next.js, ShadcnUI, Tailwind", date: "June 2024" },
    { name: "Portfolio", url: "https://danial-portfolio.onrender.com" , tech: "Tailwind, Javascript", date: "December 2023" },
    { name: "Pireal", url: "https://pireal.onrender.com" , tech: "React, Tailwind", date: "April 2024" },
    { name: "Gymnast", url: "https://gymnast.onrender.com" , tech: "React, Tailwind", date: "March 2024" },
    { name: "Marcus", url: "https://sample-portfolio-marcus.onrender.com" , tech: "Tailwind, Javascript", date: "May 2024" },
    { name: "Aireon", url: "https://aireon.onrender.com" , tech: "Tailwind, Javascript", date: "November 2023" },
    { name: "iOS 18", url: "https://ios18-controll-center.onrender.com" , tech: "Tailwind, Javascript", date: "May 2024" },
  ];

    


export default function About() {
    const { x, y } = UseMousePosition();
    const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });
    const whoAmI = ["Developer", "Designer"]
    // const [projectList, setProjects] = useState([]);
    // const size = 200; 

    useEffect(() => {
        setMaskPosition({ x: x, y: y });
    }, [x, y]);

    // useEffect(() => {
    //     fetch("http://localhost:5000/api/projects")
    //         .then(response => response.json())
    //         .then(data => { 
    //             console.log(data)
    //             setProjects(data);
    //         })
    //         .catch(error => {
    //             console.log("Error fetching data: ", error);
    //         });
    // }, []);

    // console.log("Projects")
    // console.log(projectList);
    // console.log(typeof(projectList));
    // console.log(projectLister);
    // console.log(typeof(projectLister));

    return (
        <Page>
            <div className="pt-28 lg:pt-32 p-4 lg:p-5 flex flex-col justify-between w-full min-h-screen relative">
                {/* <motion.div
                    className="mask"
                    animate={{
                        WebkitMaskPosition: `${maskPosition.x - size/2}px ${maskPosition.y - size/2}px`,
                    }}
                    transition={{type: "tween", ease: "backOut"}}
                ></motion.div> */}
                <div className="">
                    <TextAnimate>
                        <div className="text-2xl lg:text-[3.4rem] leading-[1.22]">
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I'm a freelance frontend developer and
                            <span className="text-red-500"> began my career in web and computer science in 2020.</span> I later
                            transitioned into frontend development field, driven by a passion for web design, UI/UX, branding,
                            and mobile application projects.
                        </div>
                    </TextAnimate>
                    <div className="grid lg:grid-cols-5">
                        <div className="lg:col-span-2 pt-12">
                            {/* <Social /> */}
                            <div className="grid grid-cols-3 lg:grid-cols-2 w-[300px] lg:w-[200px] gap-6">
                                <TextAnimate>
                                    <div className="relative w-[90px] hover:grayscale-0 hover:brightness-100 duration-500 h-[120px] grayscale brightness-75">
                                        <Image src={image1} fill objectFit="cover" alt="image"/>
                                    </div>
                                </TextAnimate>
                                <TextAnimate>
                                    <div className="relative w-[90px] hover:grayscale-0 hover:brightness-100 duration-500 h-[120px] grayscale brightness-75">
                                        <Image src={image2} fill objectFit="cover" alt="image"/>
                                    </div>
                                </TextAnimate>
                                <TextAnimate>
                                    <div className="relative w-[90px] hover:grayscale-0 hover:brightness-100 duration-500 h-[120px] grayscale brightness-75">
                                        <Image src={image3} fill objectFit="cover" alt="image"/>
                                    </div>
                                </TextAnimate>
                            </div>
                        </div>
                        <div className="lg:col-span-2 uppercase text-[0.95rem] pt-10">
                            <TextAnimate>
                                <div className="pb-5">
                                    I was born and raised in a town in Myanmar called Mandalay. After I finished high school in
                                    2020 at the age of 18, I wasn’t sure what I wanted to do with my life. Initially, I thought
                                    my profession would be related to business. Before delving into the world of web development
                                    and design, I worked as an English teacher.
                                </div>
                            </TextAnimate>
                            <TextAnimate>
                                <div className="pb-5">
                                    As a junior web developer, I realized that I enjoyed the creative aspect of my work more,
                                    and I made a full transition into the field of design. Since then, I have worked as a
                                    freelancer on platforms like Upwork and collaborated with companies and clients on a
                                    full-time or contract basis. I am currently a Frontend Developer based in Mandalay.
                                </div>
                            </TextAnimate>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center pt-5">
                    <FloatBtn className="bg-white">
                        <Link className="" href="/">Back to Home Page</Link>
                    </FloatBtn>
                    <div className="text-zinc-500 text-sm">Scroll to explore</div>
                </div>
            </div>
            <div className="min-h-screen p-5 lg:pt-10">
                <div className="text-3xl lg:text-5xl uppercase">Projects</div>
                <div className="border-t border-b border-black my-10 divide-y divide-black">
                    {projectList.map((project, index) => (
                    <div key={index} className="grid group text-black hover:bg-black hover:text-white duration-300 bg-white grid-cols-3 lg:grid-cols-4 p-6 items-center overflow-hidden">
                        <div className="text-xl group-hover:text-2xl duration-300 font-semibold col-span-2 flex gap-2 items-center">
                        <LinkPreview url={project.url}>
                        <div className="w-fit flex gap-2 items-center text-black group-hover:text-white hover:text-black relative peer">
                            <span className="z-1 peer">{project.name}</span>
                            <span className="text-sm z-1 0 group-hover:text-xl hover:rotate-0 peer-hover:rotate-0 duration-500 -rotate-45"><FaArrowRight /></span>
                            {/* <div className="absolute right-0 -z-0 w-[200px] h-[130px] -translate-x-full duration-300 peer-hover:translate-x-10 rounded-e-full bg-white"></div> */}
                        </div>
                        </LinkPreview>
                        </div>
                        <div className="py-1">{project.tech}</div>
                        <div className="text-end">{project.date}</div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="p-5">
                <div className="">
                    <div className="text-3xl lg:text-6xl">My Tech Stacks</div>
                    <div className="py-2 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magnam impedit repellendus dignissimos minus libero consectetur commodi ut mollitia nam voluptatum blanditiis quia, aliquid perspiciatis amet, sequi eaque placeat molestias.</div>
                </div>
                <MyTechs />
            </div>
            <div className="min-h-screen p-5 overflow-hidden">
                <ContainerScroll
                    titleComponent={
                    <>
                        <div className="flex items-center justify-center md:pb-10 lg:h-[80px]">
                            <div className="text-4xl md:text-5xl lg:text-7xl uppercase text-center w-fit mx-auto font-semibold">I am a <FlipWords words={whoAmI} /></div>
                        </div>
                    </>
                    }
                >
                    <div className="relative w-full h-full p-2">
                    <Image
                    src={portfolio}
                    alt="hero"
                    // height={720}
                    // width={1400}
                    layout="fill"
                    className="mx-auto rounded-2xl object-cover object-center"
                    draggable={false}
                    />
                    </div>
                </ContainerScroll>
            </div>
        </Page>
    );
}
