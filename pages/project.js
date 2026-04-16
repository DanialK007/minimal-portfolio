import Page from "@/components/page";
import Image from "next/image";
import Link from "next/link";
import FloatBtn from "@/components/FloatBtn.jsx";
import TextAnimate from "@/components/Layout/TextAnimate";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { LinkPreview } from "@/components/Preview";
import leiga from "@/components/image/leigaMockup.png";
import santonio from "@/components/image/santonio.png";
import portfolio from "@/components/image/portfolio.png";

const projectList = [
    { 
        name: "Acme Shop", 
        url: "https://acme-online-shop.vercel.app", 
        tech: "Next.js, Vercel, Tailwind", 
        date: "July 2024",
        category: "E-commerce",
        description: "A full-featured online shopping experience with product catalog, cart management, and checkout flow.",
        featured: true
    },
    { 
        name: "Leiga", 
        url: "https://leiga.onrender.com", 
        tech: "React, Tailwind, Lenis", 
        date: "May 2024",
        category: "Web App",
        description: "A modern web application featuring smooth scrolling animations and elegant user interface design.",
        featured: true
    },
    { 
        name: "Santonio", 
        url: "https://santonio.vercel.app", 
        tech: "Next.js, ShadcnUI, Tailwind", 
        date: "June 2024",
        category: "E-commerce",
        description: "Beautiful e-commerce platform with modern UI components and seamless shopping experience.",
        featured: true
    },
    { 
        name: "Portfolio", 
        url: "https://danial-portfolio.onrender.com", 
        tech: "Tailwind, Javascript", 
        date: "December 2023",
        category: "Portfolio",
        description: "Personal portfolio website showcasing my work and skills with custom animations."
    },
    { 
        name: "Pireal", 
        url: "https://pireal.onrender.com", 
        tech: "React, Tailwind", 
        date: "April 2024",
        category: "Web App",
        description: "Interactive web application built with React featuring modern design patterns."
    },
    { 
        name: "Gymnast", 
        url: "https://gymnast.onrender.com", 
        tech: "React, Tailwind", 
        date: "March 2024",
        category: "Landing Page",
        description: "Fitness-focused landing page with engaging visuals and responsive design."
    },
    { 
        name: "Marcus", 
        url: "https://sample-portfolio-marcus.onrender.com", 
        tech: "Tailwind, Javascript", 
        date: "May 2024",
        category: "Portfolio",
        description: "Clean portfolio template with minimalist design and smooth interactions."
    },
    { 
        name: "Aireon", 
        url: "https://aireon.onrender.com", 
        tech: "Tailwind, Javascript", 
        date: "November 2023",
        category: "Landing Page",
        description: "Modern landing page with creative layouts and attention to detail."
    },
    { 
        name: "iOS 18 Control Center", 
        url: "https://ios18-controll-center.onrender.com", 
        tech: "Tailwind, Javascript", 
        date: "May 2024",
        category: "UI Clone",
        description: "Recreation of iOS 18 control center interface with interactive elements."
    },
];

const categories = ["All", "E-commerce", "Web App", "Portfolio", "Landing Page", "UI Clone"];

export default function Project() {
    return (
        <Page>
            {/* Hero Section */}
            <section className="pt-28 lg:pt-32 p-4 lg:p-5 min-h-[60vh] flex flex-col justify-center">
                <TextAnimate>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl uppercase mb-4">Projects</h1>
                </TextAnimate>
                <TextAnimate>
                    <p className="text-lg md:text-xl lg:text-2xl text-zinc-600 max-w-3xl">
                        A collection of my work spanning <span className="text-red-500">web development, UI/UX design, and creative experiments</span>. Each project represents a unique challenge and solution.
                    </p>
                </TextAnimate>
                <TextAnimate className="mt-8">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                        <span>Scroll to explore</span>
                        <FaArrowRight className="rotate-90" />
                    </div>
                </TextAnimate>
            </section>

            {/* Featured Projects */}
            <section className="p-4 lg:p-5 py-16 md:py-24">
                <TextAnimate>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase mb-8 md:mb-12">Featured Work</h2>
                </TextAnimate>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectList.filter(p => p.featured).map((project, index) => (
                        <TextAnimate key={index}>
                            <a 
                                href={project.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group block border border-black overflow-hidden"
                            >
                                <div className="relative h-[200px] md:h-[240px] w-full bg-zinc-100 overflow-hidden">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                                    <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-sm uppercase">
                                        {project.name}
                                    </div>
                                </div>
                                <div className="p-4 md:p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <span className="text-xs text-red-500 uppercase tracking-wider">{project.category}</span>
                                            <h3 className="text-xl md:text-2xl font-semibold mt-1 group-hover:text-red-500 transition-colors">
                                                {project.name}
                                            </h3>
                                        </div>
                                        <FaArrowRight className="text-sm -rotate-45 group-hover:rotate-0 transition-transform duration-300 flex-shrink-0 mt-2" />
                                    </div>
                                    <p className="text-sm text-zinc-600 mt-3 line-clamp-2">{project.description}</p>
                                    <div className="flex items-center gap-4 mt-4 text-xs text-zinc-500">
                                        <span>{project.tech}</span>
                                        <span>{project.date}</span>
                                    </div>
                                </div>
                            </a>
                        </TextAnimate>
                    ))}
                </div>
            </section>

            {/* All Projects List */}
            <section className="p-4 lg:p-5 py-16 md:py-24 bg-zinc-50">
                <TextAnimate>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase mb-8 md:mb-12">All Projects</h2>
                </TextAnimate>
                
                <div className="border-t border-b border-black divide-y divide-black">
                    {projectList.map((project, index) => (
                        <TextAnimate key={index}>
                            <a 
                                href={project.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 p-4 md:p-6 group text-black hover:bg-black hover:text-white transition-colors duration-300 bg-white items-center"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-lg md:text-xl font-semibold">{project.name}</span>
                                    <FaArrowRight className="text-sm -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </div>
                                <div className="text-xs sm:text-sm text-zinc-500 group-hover:text-zinc-400">
                                    {project.category}
                                </div>
                                <div className="text-xs sm:text-sm text-zinc-600 group-hover:text-zinc-300 hidden md:block">
                                    {project.tech}
                                </div>
                                <div className="text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-500 text-right hidden sm:block">
                                    {project.date}
                                </div>
                            </a>
                        </TextAnimate>
                    ))}
                </div>
            </section>

            {/* Project Stats */}
            <section className="p-4 lg:p-5 py-16 md:py-24">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    <TextAnimate>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-light text-red-500">9+</div>
                            <div className="text-sm md:text-base text-zinc-600 mt-2 uppercase">Projects Completed</div>
                        </div>
                    </TextAnimate>
                    <TextAnimate>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-light text-red-500">4+</div>
                            <div className="text-sm md:text-base text-zinc-600 mt-2 uppercase">Years Experience</div>
                        </div>
                    </TextAnimate>
                    <TextAnimate>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-light text-red-500">10+</div>
                            <div className="text-sm md:text-base text-zinc-600 mt-2 uppercase">Happy Clients</div>
                        </div>
                    </TextAnimate>
                    <TextAnimate>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-light text-red-500">100%</div>
                            <div className="text-sm md:text-base text-zinc-600 mt-2 uppercase">Satisfaction Rate</div>
                        </div>
                    </TextAnimate>
                </div>
            </section>

            {/* CTA Section */}
            <section className="p-4 lg:p-5 py-16 md:py-24 bg-black text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <TextAnimate className="mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase mb-6">Have a Project in Mind?</h2>
                    </TextAnimate>
                    <TextAnimate className="mx-auto">
                        <p className="text-base md:text-lg text-zinc-400 mb-8">
                            I&apos;m always looking for new challenges and interesting projects. Let&apos;s collaborate and create something amazing together.
                        </p>
                    </TextAnimate>
                    <TextAnimate className="mx-auto">
                        <Link href="/contact">
                            <FloatBtn className="text-base md:text-lg bg-white text-black border-white hover:bg-transparent hover:text-white">
                                Start a Conversation
                            </FloatBtn>
                        </Link>
                    </TextAnimate>
                </div>
            </section>

            {/* Back Navigation */}
            <section className="p-4 lg:p-5 py-8 flex justify-between items-center">
                <TextAnimate>
                    <Link href="/">
                        <FloatBtn className="text-sm">Back to Home</FloatBtn>
                    </Link>
                </TextAnimate>
                <TextAnimate>
                    <Link href="/service">
                        <FloatBtn className="text-sm flex items-center gap-2">
                            View Services <FaArrowRight className="text-xs" />
                        </FloatBtn>
                    </Link>
                </TextAnimate>
            </section>
        </Page>
    )
}
