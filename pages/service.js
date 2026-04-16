import Page from "@/components/page.jsx";
import Link from "next/link";
import FloatBtn from "@/components/FloatBtn.jsx";
import TextAnimate from "@/components/Layout/TextAnimate";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const services = [
    {
        title: "Web Development",
        description: "Building fast, responsive, and scalable web applications using modern technologies and best practices.",
        features: [
            "Custom Website Development",
            "Single Page Applications (SPA)",
            "Progressive Web Apps (PWA)",
            "Performance Optimization",
            "SEO-Friendly Architecture",
            "Cross-Browser Compatibility"
        ],
        tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
    },
    {
        title: "UI/UX Design",
        description: "Creating intuitive and visually appealing user interfaces that enhance user experience and engagement.",
        features: [
            "User Interface Design",
            "User Experience Research",
            "Wireframing & Prototyping",
            "Design System Creation",
            "Responsive Design",
            "Accessibility Standards"
        ],
        tech: ["Figma", "Adobe XD", "Framer", "Principle"]
    },
    {
        title: "Frontend Architecture",
        description: "Designing scalable component systems and establishing coding standards for long-term maintainability.",
        features: [
            "Component Library Development",
            "State Management Solutions",
            "Code Review & Optimization",
            "Technical Documentation",
            "Testing Strategies",
            "CI/CD Integration"
        ],
        tech: ["Git", "Jest", "Storybook", "Webpack"]
    },
    {
        title: "E-commerce Solutions",
        description: "Building complete online shopping experiences with secure payment integration and inventory management.",
        features: [
            "Product Catalog Systems",
            "Shopping Cart & Checkout",
            "Payment Gateway Integration",
            "Inventory Management",
            "Order Processing",
            "Customer Account Systems"
        ],
        tech: ["Stripe", "Shopify", "WooCommerce", "Sanity"]
    },
];

const process = [
    {
        step: "01",
        title: "Discovery",
        description: "Understanding your goals, target audience, and project requirements through detailed discussions."
    },
    {
        step: "02",
        title: "Planning",
        description: "Creating wireframes, defining technical architecture, and establishing project milestones."
    },
    {
        step: "03",
        title: "Design",
        description: "Crafting visual designs that align with your brand identity and user expectations."
    },
    {
        step: "04",
        title: "Development",
        description: "Building the solution with clean, maintainable code and regular progress updates."
    },
    {
        step: "05",
        title: "Testing",
        description: "Rigorous testing across devices and browsers to ensure quality and performance."
    },
    {
        step: "06",
        title: "Launch",
        description: "Deploying the project and providing support for a smooth transition to production."
    },
];

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer: "Project timelines vary based on complexity. A simple landing page might take 1-2 weeks, while a full web application could take 4-8 weeks. I'll provide a detailed timeline after our initial discussion."
    },
    {
        question: "Do you offer ongoing maintenance?",
        answer: "Yes, I offer ongoing maintenance and support packages to keep your website running smoothly, secure, and up-to-date with the latest technologies."
    },
    {
        question: "What technologies do you specialize in?",
        answer: "I specialize in React, Next.js, Tailwind CSS, and modern JavaScript. I'm also proficient in Node.js for backend development and various design tools like Figma."
    },
    {
        question: "How do we communicate during the project?",
        answer: "I maintain regular communication through email, video calls, and project management tools. You'll receive weekly updates and have direct access to ask questions anytime."
    },
];

export default function Service() {
    return (
        <Page>
            {/* Hero Section */}
            <section className="pt-28 lg:pt-32 p-4 lg:p-5 min-h-[60vh] flex flex-col justify-center">
                <TextAnimate>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl uppercase mb-4">Services</h1>
                </TextAnimate>
                <TextAnimate>
                    <p className="text-lg md:text-xl lg:text-2xl text-zinc-600 max-w-3xl">
                        I offer comprehensive <span className="text-red-500">web development and design services</span> to help businesses establish a strong digital presence and achieve their goals.
                    </p>
                </TextAnimate>
            </section>

            {/* Services Grid */}
            <section className="p-4 lg:p-5 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <TextAnimate key={index}>
                            <div className="border border-black p-6 md:p-8 h-full group hover:bg-black hover:text-white transition-colors duration-300">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <span className="text-5xl md:text-6xl font-light text-zinc-200 group-hover:text-zinc-700">
                                            0{index + 1}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-semibold mt-2">{service.title}</h3>
                                    </div>
                                    <FaArrowRight className="text-sm -rotate-45 group-hover:rotate-0 transition-transform duration-300 mt-2" />
                                </div>
                                <p className="text-sm md:text-base text-zinc-600 group-hover:text-zinc-300 mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="text-sm flex items-center gap-2">
                                            <FaCheck className="text-red-500 group-hover:text-red-400 text-xs flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {service.tech.map((tech, i) => (
                                        <span 
                                            key={i} 
                                            className="text-xs px-2 py-1 border border-zinc-300 group-hover:border-zinc-600 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </TextAnimate>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="p-4 lg:p-5 py-16 md:py-24 bg-zinc-50">
                <TextAnimate>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase mb-4">My Process</h2>
                    <p className="text-base md:text-lg text-zinc-600 max-w-2xl mb-12">
                        A structured approach to ensure every project is delivered on time and exceeds expectations.
                    </p>
                </TextAnimate>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {process.map((item, index) => (
                        <TextAnimate key={index}>
                            <div className="relative">
                                <div className="text-6xl md:text-7xl font-light text-zinc-200 absolute -top-2 -left-2">
                                    {item.step}
                                </div>
                                <div className="relative z-10 pt-12 pl-4">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm text-zinc-600">{item.description}</p>
                                </div>
                            </div>
                        </TextAnimate>
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section className="p-4 lg:p-5 py-16 md:py-24">
                <TextAnimate>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase mb-4">Pricing</h2>
                    <p className="text-base md:text-lg text-zinc-600 max-w-2xl mb-12">
                        Transparent pricing tailored to your project needs. All packages include responsive design and basic SEO.
                    </p>
                </TextAnimate>
                
                <div className="grid md:grid-cols-3 gap-6">
                    <TextAnimate>
                        <div className="border border-black p-6 md:p-8 h-full">
                            <div className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Starter</div>
                            <div className="text-4xl md:text-5xl font-light mb-4">$500+</div>
                            <p className="text-sm text-zinc-600 mb-6">Perfect for small businesses and personal projects.</p>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-red-500 text-xs" />
                                    <span>Landing Page (1-3 sections)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-red-500 text-xs" />
                                    <span>Mobile Responsive</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-red-500 text-xs" />
                                    <span>Contact Form</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-red-500 text-xs" />
                                    <span>1 Week Delivery</span>
                                </li>
                            </ul>
                        </div>
                    </TextAnimate>
                    <TextAnimate>
                        <div className="border-2 border-black p-6 md:p-8 h-full bg-black text-white relative">
                            <div className="absolute -top-3 right-4 bg-red-500 text-white text-xs px-3 py-1 uppercase">
                                Popular
                            </div>
                            <div className="text-sm text-zinc-400 uppercase tracking-wider mb-2">Professional</div>
                            <div className="text-4xl md:text-5xl font-light mb-4">$1500+</div>
                            <p className="text-sm text-zinc-400 mb-6">For businesses looking to establish a strong online presence.</p>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-red-400 text-xs" />
                                    <span>Multi-page Website (5-10 pages)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-red-400 text-xs" />
                                    <span>Custom Design & Animations</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-red-400 text-xs" />
                                    <span>CMS Integration</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-red-400 text-xs" />
                                    <span>SEO Optimization</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-red-400 text-xs" />
                                    <span>2-3 Weeks Delivery</span>
                                </li>
                            </ul>
                        </div>
                    </TextAnimate>
                    <TextAnimate>
                        <div className="border border-black p-6 md:p-8 h-full">
                            <div className="text-sm text-zinc-500 uppercase tracking-wider mb-2">Enterprise</div>
                            <div className="text-4xl md:text-5xl font-light mb-4">Custom</div>
                            <p className="text-sm text-zinc-600 mb-6">Large-scale applications with complex requirements.</p>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-red-500 text-xs" />
                                    <span>Full Web Application</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-red-500 text-xs" />
                                    <span>Custom Backend & API</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-red-500 text-xs" />
                                    <span>User Authentication</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-red-500 text-xs" />
                                    <span>Database Integration</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-red-500 text-xs" />
                                    <span>Ongoing Support</span>
                                </li>
                            </ul>
                        </div>
                    </TextAnimate>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="p-4 lg:p-5 py-16 md:py-24 bg-zinc-50">
                <TextAnimate>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase mb-12">FAQ</h2>
                </TextAnimate>
                
                <div className="max-w-3xl space-y-6">
                    {faqs.map((faq, index) => (
                        <TextAnimate key={index}>
                            <div className="border-b border-black pb-6">
                                <h3 className="text-lg md:text-xl font-semibold mb-3">{faq.question}</h3>
                                <p className="text-sm md:text-base text-zinc-600">{faq.answer}</p>
                            </div>
                        </TextAnimate>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="p-4 lg:p-5 py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <TextAnimate className="mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase mb-6">Ready to Start?</h2>
                    </TextAnimate>
                    <TextAnimate className="mx-auto">
                        <p className="text-base md:text-lg text-zinc-600 mb-8">
                            Let&apos;s discuss your project and find the best solution for your needs.
                        </p>
                    </TextAnimate>
                    <TextAnimate className="mx-auto">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <FloatBtn className="text-base md:text-lg bg-black text-white border-black hover:bg-white hover:text-black">
                                    Get a Free Quote
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

            {/* Back Navigation */}
            <section className="p-4 lg:p-5 py-8 flex justify-between items-center border-t border-black">
                <TextAnimate>
                    <Link href="/project">
                        <FloatBtn className="text-sm flex items-center gap-2">
                            <FaArrowRight className="text-xs rotate-180" /> View Projects
                        </FloatBtn>
                    </Link>
                </TextAnimate>
                <TextAnimate>
                    <Link href="/contact">
                        <FloatBtn className="text-sm flex items-center gap-2">
                            Contact Me <FaArrowRight className="text-xs" />
                        </FloatBtn>
                    </Link>
                </TextAnimate>
            </section>
        </Page>
    )
}
