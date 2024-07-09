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

export default function About() {
    const { x, y } = UseMousePosition();
    const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setMaskPosition({ x: x, y: y });
    }, [x, y]);
    const size = 200; 

    return (
        <Page>
            <div className="pt-28 lg:pt-32 p-4 lg:p-5 flex flex-col justify-between w-full h-screen relative">
                {/* <motion.div
                    className="mask"
                    animate={{
                        WebkitMaskPosition: `${maskPosition.x - size/2}px ${maskPosition.y - size/2}px`,
                    }}
                    transition={{type: "tween", ease: "backOut"}}
                ></motion.div> */}
                <div className="">
                    <div className="text-2xl lg:text-[3.4rem] leading-[1.22]">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I'm a freelance UI/UX designer and{" "}
                        <span className="text-red-500">began my career in web and computer science in 2020.</span> I later
                        transitioned into frontend development field, driven by a passion for web design, UI/UX, branding,
                        and mobile application projects.
                    </div>
                    <div className="grid lg:grid-cols-5">
                        <div className="lg:col-span-2 pt-12">
                            {/* <Social /> */}
                            <div className="grid grid-cols-3 lg:grid-cols-2 w-[300px] lg:w-[200px] gap-6">
                                <div className="relative hover:grayscale-0 duration-500 h-[120px] grayscale brightness-75">
                                    <Image src={image1} fill objectFit="cover" alt="image"/>
                                </div>
                                <div className="relative hover:grayscale-0 duration-500 h-[120px] grayscale brightness-75">
                                    <Image src={image2} fill objectFit="cover" alt="image"/>
                                </div>
                                <div className="relative hover:grayscale-0 duration-500 h-[120px] grayscale brightness-75">
                                    <Image src={image3} fill objectFit="cover" alt="image"/>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 uppercase text-[0.95rem] pt-10">
                            <div className="pb-5">
                                I was born and raised in a town in Myanmar called Mandalay. After I finished high school in
                                2020 at the age of 18, I wasn’t sure what I wanted to do with my life. Initially, I thought
                                my profession would be related to business. Before delving into the world of web development
                                and design, I worked as an English teacher.
                            </div>
                            <div className="pb-5">
                                As a junior web developer, I realized that I enjoyed the creative aspect of my work more,
                                and I made a full transition into the field of design. Since then, I have worked as a
                                freelancer on platforms like Upwork and collaborated with companies and clients on a
                                full-time or contract basis. I am currently a Frontend Developer based in Mandalay.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <FloatBtn className="bg-white">
                        <Link className="" href="/">Back to Home Page</Link>
                    </FloatBtn>
                    <div className="flex h-full items-end justify-end text-zinc-500 text-sm">Scroll to explore</div>
                </div>
            </div>
            <div className="h-screen"></div>
        </Page>
    );
}
