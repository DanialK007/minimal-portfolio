import Page from "@/components/page";
import Link from "next/link";
import FloatBtn from "@/components/FloatBtn.jsx";
import TextAnimate from "@/components/Layout/TextAnimate";
import { FaArrowRight } from "react-icons/fa";
import { LinkPreview } from "@/components/Preview";

const projectList = [
    { name: "Acme", url: "https://acme-online-shop.vercel.app", tech: "Next.js, Vercel, Tailwind", date: "July 2024", category: "E-commerce" },
    { name: "Leiga", url: "https://leiga.onrender.com", tech: "React, Tailwind, Lenis", date: "May 2024", category: "Web App" },
    { name: "Santonio", url: "https://santonio.vercel.app", tech: "Next.js, ShadcnUI, Tailwind", date: "June 2024", category: "E-commerce" },
    { name: "Portfolio", url: "https://danial-portfolio.onrender.com", tech: "Tailwind, Javascript", date: "December 2023", category: "Portfolio" },
    { name: "Pireal", url: "https://pireal.onrender.com", tech: "React, Tailwind", date: "April 2024", category: "Web App" },
    { name: "Gymnast", url: "https://gymnast.onrender.com", tech: "React, Tailwind", date: "March 2024", category: "Landing Page" },
    { name: "Marcus", url: "https://sample-portfolio-marcus.onrender.com", tech: "Tailwind, Javascript", date: "May 2024", category: "Portfolio" },
    { name: "Aireon", url: "https://aireon.onrender.com", tech: "Tailwind, Javascript", date: "November 2023", category: "Landing Page" },
    { name: "iOS 18", url: "https://ios18-controll-center.onrender.com", tech: "Tailwind, Javascript", date: "May 2024", category: "UI Clone" },
];

export default function Project() {
    return (
        <Page>
            <div className="pt-28 lg:pt-32 p-4 lg:p-5 flex flex-col justify-between w-full min-h-screen relative">
                <div className="">
                    <TextAnimate>
                        <div className="text-2xl lg:text-[3.4rem] leading-[1.22]">
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A collection of my work spanning
                            <span className="text-red-500"> web development, UI/UX design, and creative experiments.</span> Each project represents a unique challenge and solution.
                        </div>
                    </TextAnimate>
                </div>
                <div className="flex justify-between items-center pt-5">
                    <FloatBtn className="bg-white">
                        <Link className="" href="/">Back to Home Page</Link>
                    </FloatBtn>
                    <div className="text-zinc-500 text-sm">Scroll to explore</div>
                </div>
            </div>

            <div className="min-h-screen p-5 lg:pt-10">
                <div className="text-3xl lg:text-5xl uppercase">All Projects</div>
                <div className="border-t border-b border-black my-10 divide-y divide-black">
                    {projectList.map((project, index) => (
                        <div key={index} className="grid group text-black hover:bg-black hover:text-white duration-300 bg-white grid-cols-2 lg:grid-cols-4 p-6 items-center overflow-hidden">
                            <div className="text-xl group-hover:text-2xl duration-300 font-semibold col-span-1 flex gap-2 items-center">
                                <LinkPreview url={project.url}>
                                    <div className="w-fit flex gap-2 items-center text-black group-hover:text-white hover:text-black relative peer">
                                        <span className="z-1 peer">{project.name}</span>
                                        <span className="text-sm z-1 group-hover:text-xl hover:rotate-0 peer-hover:rotate-0 duration-500 -rotate-45"><FaArrowRight /></span>
                                    </div>
                                </LinkPreview>
                            </div>
                            <div className="py-1 hidden lg:block">{project.tech}</div>
                            <div className="py-1 hidden lg:block text-zinc-600 group-hover:text-zinc-400">{project.category}</div>
                            <div className="text-end">{project.date}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-5 lg:pt-10">
                <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
                    <TextAnimate>
                        <div className="text-center lg:text-left">
                            <div className="text-4xl lg:text-6xl font-light text-red-500">9+</div>
                            <div className="text-sm uppercase text-zinc-600 pt-2">Projects Completed</div>
                        </div>
                    </TextAnimate>
                    <TextAnimate>
                        <div className="text-center lg:text-left">
                            <div className="text-4xl lg:text-6xl font-light text-red-500">4+</div>
                            <div className="text-sm uppercase text-zinc-600 pt-2">Years Experience</div>
                        </div>
                    </TextAnimate>
                    <TextAnimate>
                        <div className="text-center lg:text-left">
                            <div className="text-4xl lg:text-6xl font-light text-red-500">10+</div>
                            <div className="text-sm uppercase text-zinc-600 pt-2">Happy Clients</div>
                        </div>
                    </TextAnimate>
                    <TextAnimate>
                        <div className="text-center lg:text-left">
                            <div className="text-4xl lg:text-6xl font-light text-red-500">100%</div>
                            <div className="text-sm uppercase text-zinc-600 pt-2">Satisfaction Rate</div>
                        </div>
                    </TextAnimate>
                </div>
            </div>

            <div className="p-5 py-20">
                <TextAnimate>
                    <div className="text-3xl lg:text-5xl uppercase pb-5">Have a Project in Mind?</div>
                    <div className="text-lg text-zinc-600 pb-8">I'm always looking for new challenges and interesting projects. Let's collaborate and create something amazing together.</div>
                    <div className="flex gap-4 flex-wrap">
                        <Link href="/contact">
                            <FloatBtn className="bg-black text-white border-black hover:bg-white hover:text-black">Start a Conversation</FloatBtn>
                        </Link>
                        <Link href="/service">
                            <FloatBtn className="bg-white">View Services</FloatBtn>
                        </Link>
                    </div>
                </TextAnimate>
            </div>
        </Page>
    )
}
