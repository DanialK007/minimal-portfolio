import Page from "@/components/page.jsx";
import Link from "next/link";
import FloatBtn from "@/components/FloatBtn.jsx";
import TextAnimate from "@/components/Layout/TextAnimate";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import Portfolio from "@/components/Portfolio";

const services = [
    {
        title: "Web Development",
        description: "Building fast, responsive, and scalable web applications using modern technologies.",
        features: ["Custom Website Development", "Single Page Applications", "Progressive Web Apps", "Performance Optimization"]
    },
    {
        title: "UI/UX Design",
        description: "Creating intuitive and visually appealing user interfaces that enhance user experience.",
        features: ["User Interface Design", "Wireframing & Prototyping", "Design System Creation", "Responsive Design"]
    },
    {
        title: "Frontend Architecture",
        description: "Designing scalable component systems and establishing coding standards.",
        features: ["Component Library Development", "State Management Solutions", "Code Review & Optimization", "Technical Documentation"]
    },
    {
        title: "E-commerce Solutions",
        description: "Building complete online shopping experiences with secure payment integration.",
        features: ["Product Catalog Systems", "Shopping Cart & Checkout", "Payment Gateway Integration", "Inventory Management"]
    },
];

const process = [
    { step: "01", title: "Discovery", description: "Understanding your goals, target audience, and project requirements." },
    { step: "02", title: "Planning", description: "Creating wireframes, defining technical architecture, and milestones." },
    { step: "03", title: "Design", description: "Crafting visual designs that align with your brand identity." },
    { step: "04", title: "Development", description: "Building the solution with clean, maintainable code." },
    { step: "05", title: "Testing", description: "Rigorous testing across devices and browsers." },
    { step: "06", title: "Launch", description: "Deploying the project and providing support." },
];

export default function Service() {
    return (
        <Page>
            <div className="pt-28 lg:pt-32 p-4 lg:p-5 flex flex-col justify-between w-full min-h-screen relative">
                <div className="">
                    <TextAnimate>
                        <div className="text-2xl lg:text-[3.4rem] leading-[1.22]">
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I offer comprehensive
                            <span className="text-red-500"> web development and design services</span> to help businesses establish a strong digital presence and achieve their goals.
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
                <div className="text-3xl lg:text-5xl uppercase pb-10">What I Do</div>
                <div className="grid lg:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <TextAnimate key={index}>
                            <div className="border border-black p-6 lg:p-8 h-full group hover:bg-black hover:text-white duration-300">
                                <div className="flex items-start justify-between pb-4">
                                    <div className="text-5xl lg:text-6xl font-light text-zinc-200 group-hover:text-zinc-700">0{index + 1}</div>
                                    <span className="text-sm -rotate-45 group-hover:rotate-0 duration-500"><FaArrowRight /></span>
                                </div>
                                <div className="text-xl lg:text-2xl font-semibold pb-3">{service.title}</div>
                                <div className="text-zinc-600 group-hover:text-zinc-300 pb-5">{service.description}</div>
                                <ul className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="text-sm flex items-center gap-2">
                                            <FaCheck className="text-red-500 group-hover:text-red-400 text-xs" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TextAnimate>
                    ))}
                </div>
            </div>

            <div className="p-5 lg:pt-10 bg-zinc-50">
                <div className="text-3xl lg:text-5xl uppercase pb-5">My Process</div>
                <div className="text-lg text-zinc-600 pb-10">A structured approach to ensure every project is delivered on time and exceeds expectations.</div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {process.map((item, index) => (
                        <TextAnimate key={index}>
                            <div className="relative">
                                <div className="text-6xl lg:text-7xl font-light text-zinc-200 absolute -top-2 -left-2">{item.step}</div>
                                <div className="relative z-10 pt-12 pl-4">
                                    <div className="text-lg lg:text-xl font-semibold pb-2">{item.title}</div>
                                    <div className="text-sm text-zinc-600">{item.description}</div>
                                </div>
                            </div>
                        </TextAnimate>
                    ))}
                </div>
            </div>

            <div className="p-5 lg:pt-10">
                <div className="text-3xl lg:text-5xl uppercase pb-5">Pricing</div>
                <div className="text-lg text-zinc-600 pb-10">Transparent pricing tailored to your project needs.</div>
                <div className="grid lg:grid-cols-3 gap-6">
                    <TextAnimate>
                        <div className="border border-black p-6 lg:p-8 h-full">
                            <div className="text-sm text-zinc-500 uppercase pb-2">Starter</div>
                            <div className="text-4xl lg:text-5xl font-light pb-4">$500+</div>
                            <div className="text-sm text-zinc-600 pb-6">Perfect for small businesses and personal projects.</div>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-2"><FaCheck className="text-red-500 text-xs" /><span>Landing Page (1-3 sections)</span></li>
                                <li className="flex items-center gap-2"><FaCheck className="text-red-500 text-xs" /><span>Mobile Responsive</span></li>
                                <li className="flex items-center gap-2"><FaCheck className="text-red-500 text-xs" /><span>Contact Form</span></li>
                                <li className="flex items-center gap-2"><FaCheck className="text-red-500 text-xs" /><span>1 Week Delivery</span></li>
                            </ul>
                        </div>
                    </TextAnimate>
                    <TextAnimate>
                        <div className="border-2 border-black p-6 lg:p-8 h-full bg-black text-white relative">
                            <div className="absolute -top-3 right-4 bg-red-500 text-white text-xs px-3 py-1 uppercase">Popular</div>
                            <div className="text-sm text-zinc-400 uppercase pb-2">Professional</div>
                            <div className="text-4xl lg:text-5xl font-light pb-4">$1500+</div>
                            <div className="text-sm text-zinc-400 pb-6">For businesses looking to establish a strong online presence.</div>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-2"><FaCheck className="text-red-400 text-xs" /><span>Multi-page Website (5-10 pages)</span></li>
                                <li className="flex items-center gap-2"><FaCheck className="text-red-400 text-xs" /><span>Custom Design & Animations</span></li>
                                <li className="flex items-center gap-2"><FaCheck className="text-red-400 text-xs" /><span>CMS Integration</span></li>
                                <li className="flex items-center gap-2"><FaCheck className="text-red-400 text-xs" /><span>SEO Optimization</span></li>
                                <li className="flex items-center gap-2"><FaCheck className="text-red-400 text-xs" /><span>2-3 Weeks Delivery</span></li>
                            </ul>
                        </div>
                    </TextAnimate>
                    <TextAnimate>
                        <div className="border border-black p-6 lg:p-8 h-full">
                            <div className="text-sm text-zinc-500 uppercase pb-2">Enterprise</div>
                            <div className="text-4xl lg:text-5xl font-light pb-4">Custom</div>
                            <div className="text-sm text-zinc-600 pb-6">Large-scale applications with complex requirements.</div>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-2"><FaCheck className="text-red-500 text-xs" /><span>Full Web Application</span></li>
                                <li className="flex items-center gap-2"><FaCheck className="text-red-500 text-xs" /><span>Custom Backend & API</span></li>
                                <li className="flex items-center gap-2"><FaCheck className="text-red-500 text-xs" /><span>User Authentication</span></li>
                                <li className="flex items-center gap-2"><FaCheck className="text-red-500 text-xs" /><span>Database Integration</span></li>
                                <li className="flex items-center gap-2"><FaCheck className="text-red-500 text-xs" /><span>Ongoing Support</span></li>
                            </ul>
                        </div>
                    </TextAnimate>
                </div>
            </div>

            <div className="p-5 py-20">
                <TextAnimate>
                    <div className="text-3xl lg:text-5xl uppercase pb-5">Ready to Start?</div>
                    <div className="text-lg text-zinc-600 pb-8">Let's discuss your project and find the best solution for your needs.</div>
                    <div className="flex gap-4 flex-wrap">
                        <Link href="/contact">
                            <FloatBtn className="bg-black text-white border-black hover:bg-white hover:text-black">Get a Free Quote</FloatBtn>
                        </Link>
                        <a href="mailto:kaungkhantkyawdk@gmail.com">
                            <FloatBtn className="bg-white">kaungkhantkyawdk@gmail.com</FloatBtn>
                        </a>
                    </div>
                </TextAnimate>
            </div>
        </Page>
    )
}
