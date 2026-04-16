import Page from "@/components/page";
import Image from "next/image";
import Link from "next/link";
import profile from "@/components/image/MyProfile.png";
import project from "@/components/image/leigaMockup.png";
import santonio from "@/components/image/santonio.png";
import portfolio from "@/components/image/portfolio.png";
import FloatBtn from "@/components/FloatBtn.jsx";
import TextAnimate from "@/components/Layout/TextAnimate";
import { MyTechs } from "@/components/MyTech";
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const featuredProjects = [
    { 
        name: "Leiga", 
        url: "https://leiga.onrender.com", 
        tech: "React, Tailwind, Lenis", 
        date: "May 2024",
        description: "A modern web application with smooth scrolling experience"
    },
    { 
        name: "Santonio", 
        url: "https://santonio.vercel.app", 
        tech: "Next.js, ShadcnUI, Tailwind", 
        date: "June 2024",
        description: "E-commerce platform with beautiful UI components"
    },
    { 
        name: "Acme Shop", 
        url: "https://acme-online-shop.vercel.app", 
        tech: "Next.js, Vercel, Tailwind", 
        date: "July 2024",
        description: "Full-featured online shopping experience"
    },
];

const services = [
    {
        title: "Web Development",
        description: "Building responsive, performant websites using modern frameworks like React and Next.js"
    },
    {
        title: "UI/UX Design",
        description: "Creating intuitive user interfaces with focus on user experience and accessibility"
    },
    {
        title: "Frontend Architecture",
        description: "Designing scalable component systems and establishing best practices"
    },
];

export default function Home() {
    return (
        <Page>
            {/* Hero Section */}
            <section className="pt-28 lg:pt-32 p-4 lg:p-5 min-h-screen flex flex-col lg:flex-row justify-between">
                <div className="flex h-full flex-col justify-between flex-1">
                    <TextAnimate>
                        <h1 className="text-2xl md:text-4xl lg:text-6xl lg:leading-[4rem] lg:p-1 text-balance">
                            <span className="w-16 md:w-20 lg:w-28 inline-block"></span> 
                            My name is Kaung Khant Kyaw. I&apos;m a <span className="text-red-500">Freelance Frontend Developer</span> based in Mandalay (MM).
                        </h1>

                        <a href="mailto:kaungkhantkyawdk@gmail.com" className="block w-fit pt-6 md:pt-10">
                            <FloatBtn className="text-base md:text-lg">kaungkhantkyawdk@gmail.com</FloatBtn>
                        </a>
                    </TextAnimate>
                    
                    {/* Latest Project - Desktop */}
                    <div className="hidden lg:block mt-auto">
                        <TextAnimate>
                            <div className="text-lg pb-2">Latest Project</div>
                            <a href="https://santonio.vercel.app" target="_blank" rel="noopener noreferrer" className="p-5 group cursor-pointer flex border border-black w-fit">
                                <div className="relative h-[150px] w-[240px]">
                                    <Image alt="Leiga project preview" src={project} fill className="object-cover" placeholder="blur" />
                                </div>
                                <div className="ps-5">
                                    <div className="text-sm text-zinc-600">React App, Web Design, 2024</div>
                                    <div className="pt-2 uppercase text-lg">Leiga</div>
                                    <div className="mt-5">
                                        <FloatBtn className="text-sm group-hover:bg-black group-hover:text-white">View Case</FloatBtn>
                                    </div>
                                </div>
                            </a>
                        </TextAnimate>
                    </div>
                </div>
                
                {/* Profile Image */}
                <div className="w-full lg:w-[450px] lg:ps-10 mt-8 lg:mt-0 relative">
                    <TextAnimate>
                        <div className="relative w-[200px] md:w-[300px] lg:w-[400px] h-[240px] md:h-[360px] lg:h-[450px]">
                            <Image alt="Kaung Khant Kyaw profile" src={profile} fill className="object-cover"/>
                        </div>
                    </TextAnimate>
                    <div className="absolute -top-5 left-0 lg:top-auto lg:left-auto lg:bottom-0 lg:right-5 text-xs lg:text-sm text-zinc-500">
                        Use menu to explore
                    </div>
                </div>
                
                {/* Latest Project - Mobile */}
                <div className="lg:hidden mt-10">
                    <TextAnimate>
                        <div className="text-base pb-2">Latest Project</div>
                        <a href="https://santonio.vercel.app" target="_blank" rel="noopener noreferrer" className="p-4 group cursor-pointer flex flex-col sm:flex-row border border-black w-full">
                            <div className="relative h-[180px] sm:h-[120px] w-full sm:w-[180px] flex-shrink-0">
                                <Image alt="Leiga project preview" src={project} fill className="object-cover" placeholder="blur" />
                            </div>
                            <div className="pt-4 sm:pt-0 sm:ps-4">
                                <div className="text-xs text-zinc-600">React App, Web Design, 2024</div>
                                <div className="pt-1 uppercase text-base">Leiga</div>
                                <div className="mt-3">
                                    <FloatBtn className="text-xs">View Case</FloatBtn>
                                </div>
                            </div>
                        </a>
                    </TextAnimate>
                </div>
            </section>

            {/* About Section */}
            <section className="p-4 lg:p-5 py-16 md:py-24 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <TextAnimate>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase mb-6">About Me</h2>
                    </TextAnimate>
                    <div className="space-y-6">
                        <TextAnimate>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                                I&apos;m a freelance frontend developer who began my career in web and computer science in 2020. 
                                I later transitioned into frontend development, driven by a passion for <span className="text-red-500">web design, UI/UX, branding, and mobile application</span> projects.
                            </p>
                        </TextAnimate>
                        <TextAnimate>
                            <p className="text-sm md:text-base text-zinc-600 leading-relaxed uppercase">
                                As a developer, I realized that I enjoyed the creative aspect of my work, and I made a full transition into the field of design. 
                                I am currently a Frontend Developer based in Mandalay, working with companies and clients on freelance and contract basis.
                            </p>
                        </TextAnimate>
                        <TextAnimate>
                            <Link href="/about">
                                <FloatBtn className="text-sm md:text-base">Learn More About Me</FloatBtn>
                            </Link>
                        </TextAnimate>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="p-4 lg:p-5 py-16 md:py-24 lg:py-32 bg-zinc-50">
                <TextAnimate>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16 gap-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase">Featured Projects</h2>
                        <Link href="/project" className="text-sm md:text-base text-zinc-600 hover:text-black transition-colors flex items-center gap-2">
                            View All Projects <FaArrowRight className="text-xs" />
                        </Link>
                    </div>
                </TextAnimate>
                
                <div className="space-y-4">
                    {featuredProjects.map((project, index) => (
                        <TextAnimate key={index}>
                            <a 
                                href={project.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block border border-black p-4 md:p-6 group hover:bg-black hover:text-white transition-colors duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-xl md:text-2xl font-semibold">{project.name}</h3>
                                            <FaArrowRight className="text-sm -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </div>
                                        <p className="text-sm md:text-base text-zinc-600 group-hover:text-zinc-300 mt-2 hidden md:block">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 text-sm">
                                        <span className="text-zinc-500 group-hover:text-zinc-400">{project.tech}</span>
                                        <span className="text-zinc-400 group-hover:text-zinc-500">{project.date}</span>
                                    </div>
                                </div>
                            </a>
                        </TextAnimate>
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section className="p-4 lg:p-5 py-16 md:py-24 lg:py-32">
                <TextAnimate>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase mb-10 md:mb-16">What I Do</h2>
                </TextAnimate>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <TextAnimate key={index}>
                            <div className="border border-black p-6 md:p-8 h-full group hover:bg-black hover:text-white transition-colors duration-300">
                                <div className="text-4xl md:text-5xl lg:text-6xl font-light text-zinc-300 group-hover:text-zinc-700 mb-4">
                                    0{index + 1}
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-sm md:text-base text-zinc-600 group-hover:text-zinc-300">{service.description}</p>
                            </div>
                        </TextAnimate>
                    ))}
                </div>
                
                <TextAnimate className="mt-10">
                    <Link href="/service">
                        <FloatBtn className="text-sm md:text-base">View All Services</FloatBtn>
                    </Link>
                </TextAnimate>
            </section>

            {/* Tech Stack Section */}
            <section className="p-4 lg:p-5 py-16 md:py-24 lg:py-32 bg-zinc-50">
                <TextAnimate>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase mb-4">My Tech Stack</h2>
                    <p className="text-sm md:text-base text-zinc-600 max-w-2xl mb-8 md:mb-12">
                        Technologies and tools I use to bring ideas to life. Constantly learning and expanding my toolkit.
                    </p>
                </TextAnimate>
                <MyTechs />
            </section>

            {/* CTA Section */}
            <section className="p-4 lg:p-5 py-16 md:py-24 lg:py-32">
                <div className="text-center max-w-3xl mx-auto">
                    <TextAnimate className="mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase mb-6">Let&apos;s Work Together</h2>
                    </TextAnimate>
                    <TextAnimate className="mx-auto">
                        <p className="text-base md:text-lg text-zinc-600 mb-8">
                            Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing together.
                        </p>
                    </TextAnimate>
                    <TextAnimate className="mx-auto">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <FloatBtn className="text-base md:text-lg bg-black text-white border-black hover:bg-white hover:text-black">
                                    Get In Touch
                                </FloatBtn>
                            </Link>
                            <a href="mailto:kaungkhantkyawdk@gmail.com">
                                <FloatBtn className="text-base md:text-lg">
                                    kaungkhantkyawdk@gmail.com
                                </FloatBtn>
                            </a>
                        </div>
                    </TextAnimate>
                </div>
            </section>

            {/* Footer */}
            <footer className="p-4 lg:p-5 py-8 border-t border-black">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <TextAnimate>
                        <div className="text-sm text-zinc-600 text-center md:text-left">
                            <div className="uppercase">Kaung Khant Kyaw, 2024</div>
                            <div>Frontend Developer based in Mandalay, Myanmar</div>
                        </div>
                    </TextAnimate>
                    <TextAnimate>
                        <div className="flex items-center gap-6">
                            <a href="https://github.com/DanialK007" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-black transition-colors">
                                <FaGithub className="text-xl" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/kaung-khant-kyaw-688141212/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-black transition-colors">
                                <FaLinkedin className="text-xl" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="mailto:kaungkhantkyawdk@gmail.com" className="text-zinc-600 hover:text-black transition-colors">
                                <FaEnvelope className="text-xl" />
                                <span className="sr-only">Email</span>
                            </a>
                        </div>
                    </TextAnimate>
                </div>
            </footer>
        </Page>
    )
}
