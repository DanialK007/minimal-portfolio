import Page from "@/components/page";
import Image from "next/image";
import Link from "next/link";
import FloatBtn from "@/components/FloatBtn";
import TextAnimate from "@/components/Layout/TextAnimate";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { LinkPreview } from "@/components/Preview";
import { FlipWords } from "@/components/FlipWords";
import { ContainerScroll } from "@/components/ContainerScroll";
import { MyTechs } from "@/components/MyTech";

import image1 from "../components/image/image1.png";
import image2 from "../components/image/image2.png";
import image3 from "../components/image/image3.jpg";
import portfolio from "@/components/image/portfolio.png";

const projectList = [
    { name: "Acme", url: "https://acme-online-shop.vercel.app", tech: "Next.js, Vercel, Tailwind", date: "July 2024" },
    { name: "Leiga", url: "https://leiga.onrender.com", tech: "React, Tailwind, Lenis", date: "May 2024" },
    { name: "Santonio", url: "https://santonio.vercel.app", tech: "Next.js, ShadcnUI, Tailwind", date: "June 2024" },
    { name: "Portfolio", url: "https://danial-portfolio.onrender.com", tech: "Tailwind, Javascript", date: "December 2023" },
    { name: "Pireal", url: "https://pireal.onrender.com", tech: "React, Tailwind", date: "April 2024" },
    { name: "Gymnast", url: "https://gymnast.onrender.com", tech: "React, Tailwind", date: "March 2024" },
    { name: "Marcus", url: "https://sample-portfolio-marcus.onrender.com", tech: "Tailwind, Javascript", date: "May 2024" },
    { name: "Aireon", url: "https://aireon.onrender.com", tech: "Tailwind, Javascript", date: "November 2023" },
    { name: "iOS 18", url: "https://ios18-controll-center.onrender.com", tech: "Tailwind, Javascript", date: "May 2024" },
];

const experiences = [
    {
        period: "2024 - Present",
        role: "Freelance Frontend Developer",
        company: "Self-employed",
        description: "Working with various clients on web development projects, specializing in React and Next.js applications."
    },
    {
        period: "2022 - 2024",
        role: "Frontend Developer",
        company: "Freelance/Upwork",
        description: "Collaborated with companies and startups on e-commerce platforms, landing pages, and web applications."
    },
    {
        period: "2020 - 2022",
        role: "Junior Web Developer",
        company: "Learning & Projects",
        description: "Started my journey in web development, learning HTML, CSS, JavaScript, and modern frameworks."
    },
];

export default function About() {
    const whoAmI = ["Developer", "Designer", "Creator"];

    return (
        <Page>
            {/* Hero Section */}
            <section className="pt-28 lg:pt-32 p-4 lg:p-5 min-h-screen flex flex-col justify-between">
                <div>
                    <TextAnimate>
                        <h1 className="text-2xl md:text-4xl lg:text-[3.4rem] leading-[1.2] lg:leading-[1.22]">
                            <span className="inline-block w-8 md:w-16 lg:w-24"></span>
                            I&apos;m a freelance frontend developer and
                            <span className="text-red-500"> began my career in web and computer science in 2020.</span> I later
                            transitioned into frontend development field, driven by a passion for web design, UI/UX, branding,
                            and mobile application projects.
                        </h1>
                    </TextAnimate>
                    
                    {/* Images Grid */}
                    <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-6 pt-8 md:pt-12">
                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                            <TextAnimate>
                                <div className="relative w-full aspect-[3/4] grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500">
                                    <Image src={image1} fill className="object-cover" alt="Personal photo 1"/>
                                </div>
                            </TextAnimate>
                        </div>
                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                            <TextAnimate>
                                <div className="relative w-full aspect-[3/4] grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500">
                                    <Image src={image2} fill className="object-cover" alt="Personal photo 2"/>
                                </div>
                            </TextAnimate>
                        </div>
                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                            <TextAnimate>
                                <div className="relative w-full aspect-[3/4] grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500">
                                    <Image src={image3} fill className="object-cover" alt="Personal photo 3"/>
                                </div>
                            </TextAnimate>
                        </div>
                        
                        {/* Bio Text */}
                        <div className="col-span-3 md:col-span-6 lg:col-span-2 pt-6 lg:pt-0">
                            <TextAnimate>
                                <p className="text-sm md:text-base uppercase leading-relaxed mb-4">
                                    I was born and raised in a town in Myanmar called Mandalay. After I finished high school in
                                    2020 at the age of 18, I wasn&apos;t sure what I wanted to do with my life. Initially, I thought
                                    my profession would be related to business. Before delving into the world of web development
                                    and design, I worked as an English teacher.
                                </p>
                            </TextAnimate>
                            <TextAnimate>
                                <p className="text-sm md:text-base uppercase leading-relaxed">
                                    As a junior web developer, I realized that I enjoyed the creative aspect of my work more,
                                    and I made a full transition into the field of design. Since then, I have worked as a
                                    freelancer on platforms like Upwork and collaborated with companies and clients on a
                                    full-time or contract basis.
                                </p>
                            </TextAnimate>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 gap-4">
                    <TextAnimate>
                        <Link href="/">
                            <FloatBtn className="bg-white text-sm md:text-base">Back to Home Page</FloatBtn>
                        </Link>
                    </TextAnimate>
                    <TextAnimate>
                        <div className="text-zinc-500 text-sm">Scroll to explore</div>
                    </TextAnimate>
                </div>
            </section>

            {/* Experience Section */}
            <section className="p-4 lg:p-5 py-16 md:py-24 bg-zinc-50">
                <TextAnimate>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase mb-8 md:mb-12">Experience</h2>
                </TextAnimate>
                
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <TextAnimate key={index}>
                            <div className="grid md:grid-cols-4 gap-4 pb-8 border-b border-black">
                                <div className="text-sm text-zinc-500">{exp.period}</div>
                                <div className="md:col-span-3">
                                    <div className="text-xl md:text-2xl font-semibold">{exp.role}</div>
                                    <div className="text-red-500 mb-2">{exp.company}</div>
                                    <p className="text-sm md:text-base text-zinc-600">{exp.description}</p>
                                </div>
                            </div>
                        </TextAnimate>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="p-4 lg:p-5 py-16 md:py-24">
                <TextAnimate>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase">Projects</h2>
                        <Link href="/project" className="text-sm text-zinc-500 hover:text-black transition-colors flex items-center gap-2">
                            View All <FaArrowRight className="text-xs" />
                        </Link>
                    </div>
                </TextAnimate>
                
                <div className="border-t border-b border-black divide-y divide-black">
                    {projectList.map((project, index) => (
                        <TextAnimate key={index}>
                            <a 
                                href={project.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-4 md:p-6 group text-black hover:bg-black hover:text-white transition-colors duration-300 bg-white items-center"
                            >
                                <div className="col-span-2 md:col-span-1 flex items-center gap-2">
                                    <span className="text-lg md:text-xl font-semibold">{project.name}</span>
                                    <FaArrowRight className="text-sm -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </div>
                                <div className="text-sm text-zinc-600 group-hover:text-zinc-300 hidden md:block">{project.tech}</div>
                                <div className="col-span-2 md:col-span-1 text-right text-sm text-zinc-400 group-hover:text-zinc-500">{project.date}</div>
                            </a>
                        </TextAnimate>
                    ))}
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="p-4 lg:p-5 py-16 md:py-24 bg-zinc-50">
                <TextAnimate>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase mb-4">My Tech Stacks</h2>
                    <p className="text-sm md:text-base text-zinc-600 max-w-2xl mb-8">
                        Technologies and tools I work with daily to build modern, performant, and user-friendly web applications.
                    </p>
                </TextAnimate>
                <MyTechs />
            </section>

            {/* Animated Title Section */}
            <section className="p-4 lg:p-5 py-16 md:py-24 overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <div className="flex items-center justify-center pb-6 md:pb-10">
                            <div className="text-3xl md:text-5xl lg:text-7xl uppercase text-center w-fit mx-auto font-semibold">
                                I am a <FlipWords words={whoAmI} />
                            </div>
                        </div>
                    }
                >
                    <div className="relative w-full h-full p-2">
                        <Image
                            src={portfolio}
                            alt="Portfolio showcase"
                            fill
                            className="mx-auto rounded-2xl object-cover object-center"
                            draggable={false}
                        />
                    </div>
                </ContainerScroll>
            </section>

            {/* CTA Section */}
            <section className="p-4 lg:p-5 py-16 md:py-24 bg-black text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <TextAnimate className="mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase mb-6">Let&apos;s Work Together</h2>
                    </TextAnimate>
                    <TextAnimate className="mx-auto">
                        <p className="text-base md:text-lg text-zinc-400 mb-8">
                            I&apos;m always excited to collaborate on new projects and bring creative ideas to life.
                        </p>
                    </TextAnimate>
                    <TextAnimate className="mx-auto">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <FloatBtn className="text-base md:text-lg bg-white text-black border-white hover:bg-transparent hover:text-white">
                                    Get In Touch
                                </FloatBtn>
                            </Link>
                            <Link href="/project">
                                <FloatBtn className="text-base md:text-lg border-white text-white hover:bg-white hover:text-black">
                                    View Projects
                                </FloatBtn>
                            </Link>
                        </div>
                    </TextAnimate>
                </div>
            </section>
        </Page>
    );
}
