import { useState } from "react";
import Page from "@/components/page";
import Link from "next/link";
import FloatBtn from "@/components/FloatBtn.jsx";
import TextAnimate from "@/components/Layout/TextAnimate";
import { FaArrowRight, FaGithub, FaLinkedin, FaTelegram, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
    {
        icon: FaEnvelope,
        label: "Email",
        value: "kaungkhantkyawdk@gmail.com",
        href: "mailto:kaungkhantkyawdk@gmail.com"
    },
    {
        icon: FaPhone,
        label: "Phone",
        value: "(+95) 925 559 9863",
        href: "tel:+959255599863"
    },
    {
        icon: FaMapMarkerAlt,
        label: "Location",
        value: "Mandalay, Myanmar",
        href: null
    },
];

const socialLinks = [
    { icon: FaGithub, label: "GitHub", href: "https://github.com/DanialK007" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kaung-khant-kyaw-688141212/" },
    { icon: FaTelegram, label: "Telegram", href: "https://t.me/DanialK007" },
    { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/kaungkhantkyawdk/" },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        budget: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", budget: "", message: "" });
    };

    return (
        <Page>
            {/* Hero Section */}
            <section className="pt-28 lg:pt-32 p-4 lg:p-5 min-h-[50vh] flex flex-col justify-center">
                <TextAnimate>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl uppercase mb-4">Get In Touch</h1>
                </TextAnimate>
                <TextAnimate>
                    <p className="text-lg md:text-xl lg:text-2xl text-zinc-600 max-w-3xl">
                        Have a project in mind or just want to say hello? <span className="text-red-500">I&apos;d love to hear from you</span>. Let&apos;s create something amazing together.
                    </p>
                </TextAnimate>
            </section>

            {/* Contact Content */}
            <section className="p-4 lg:p-5 py-16 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <div>
                        <TextAnimate>
                            <h2 className="text-2xl md:text-3xl uppercase mb-8">Send a Message</h2>
                        </TextAnimate>
                        
                        {submitted ? (
                            <TextAnimate>
                                <div className="border border-black p-8 text-center">
                                    <div className="text-4xl mb-4">Thank you!</div>
                                    <p className="text-zinc-600 mb-6">
                                        Your message has been received. I&apos;ll get back to you within 24-48 hours.
                                    </p>
                                    <button 
                                        onClick={() => setSubmitted(false)}
                                        className="text-sm underline hover:text-red-500 transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            </TextAnimate>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <TextAnimate>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm uppercase mb-2">Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full border border-black p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm uppercase mb-2">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full border border-black p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>
                                </TextAnimate>
                                
                                <TextAnimate>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="subject" className="block text-sm uppercase mb-2">Subject *</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full border border-black p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="Web Development">Web Development</option>
                                                <option value="UI/UX Design">UI/UX Design</option>
                                                <option value="E-commerce">E-commerce</option>
                                                <option value="Consultation">Consultation</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="budget" className="block text-sm uppercase mb-2">Budget Range</label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="w-full border border-black p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow"
                                            >
                                                <option value="">Select budget</option>
                                                <option value="$500 - $1,000">$500 - $1,000</option>
                                                <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                                                <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                                                <option value="$5,000+">$5,000+</option>
                                            </select>
                                        </div>
                                    </div>
                                </TextAnimate>
                                
                                <TextAnimate>
                                    <div>
                                        <label htmlFor="message" className="block text-sm uppercase mb-2">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full border border-black p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                </TextAnimate>
                                
                                <TextAnimate>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full sm:w-auto group relative border overflow-hidden border-black uppercase px-8 py-3 rounded-s-full rounded-e-full hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                </TextAnimate>
                            </form>
                        )}
                    </div>
                    
                    {/* Contact Info */}
                    <div>
                        <TextAnimate>
                            <h2 className="text-2xl md:text-3xl uppercase mb-8">Contact Info</h2>
                        </TextAnimate>
                        
                        <div className="space-y-6 mb-12">
                            {contactInfo.map((info, index) => (
                                <TextAnimate key={index}>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 border border-black flex items-center justify-center flex-shrink-0">
                                            <info.icon className="text-lg" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-zinc-500 uppercase mb-1">{info.label}</div>
                                            {info.href ? (
                                                <a 
                                                    href={info.href} 
                                                    className="text-lg hover:text-red-500 transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <div className="text-lg">{info.value}</div>
                                            )}
                                        </div>
                                    </div>
                                </TextAnimate>
                            ))}
                        </div>
                        
                        <TextAnimate>
                            <h3 className="text-xl uppercase mb-6">Follow Me</h3>
                        </TextAnimate>
                        
                        <div className="grid grid-cols-2 gap-4">
                            {socialLinks.map((social, index) => (
                                <TextAnimate key={index}>
                                    <a 
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 border border-black hover:bg-black hover:text-white transition-colors group"
                                    >
                                        <social.icon className="text-xl" />
                                        <span className="text-sm uppercase">{social.label}</span>
                                        <FaArrowRight className="text-xs -rotate-45 group-hover:rotate-0 transition-transform ml-auto" />
                                    </a>
                                </TextAnimate>
                            ))}
                        </div>
                        
                        {/* Availability Status */}
                        <TextAnimate className="mt-12">
                            <div className="border border-black p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-sm uppercase text-zinc-500">Current Status</span>
                                </div>
                                <div className="text-xl font-semibold mb-2">Available for Projects</div>
                                <p className="text-sm text-zinc-600">
                                    I&apos;m currently accepting new freelance projects. Typical response time is within 24 hours.
                                </p>
                            </div>
                        </TextAnimate>
                    </div>
                </div>
            </section>

            {/* Map/Location Section */}
            <section className="p-4 lg:p-5 py-16 md:py-24 bg-zinc-50">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <TextAnimate>
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase mb-4">Based in Myanmar</h2>
                            <p className="text-base md:text-lg text-zinc-600 mb-6">
                                Working remotely with clients around the world. Available for virtual meetings across different time zones.
                            </p>
                            <div className="text-sm text-zinc-500">
                                <div className="mb-2">Local Time: UTC +6:30 (MMT)</div>
                                <div>Best hours: 9:00 AM - 6:00 PM MMT</div>
                            </div>
                        </div>
                    </TextAnimate>
                    <TextAnimate>
                        <div className="aspect-video bg-zinc-200 flex items-center justify-center border border-black">
                            <div className="text-center">
                                <FaMapMarkerAlt className="text-4xl text-red-500 mx-auto mb-4" />
                                <div className="text-lg font-semibold">Mandalay, Myanmar</div>
                                <div className="text-sm text-zinc-500">Working Globally</div>
                            </div>
                        </div>
                    </TextAnimate>
                </div>
            </section>

            {/* Back Navigation */}
            <section className="p-4 lg:p-5 py-8 flex justify-between items-center border-t border-black">
                <TextAnimate>
                    <Link href="/service">
                        <FloatBtn className="text-sm flex items-center gap-2">
                            <FaArrowRight className="text-xs rotate-180" /> View Services
                        </FloatBtn>
                    </Link>
                </TextAnimate>
                <TextAnimate>
                    <Link href="/">
                        <FloatBtn className="text-sm flex items-center gap-2">
                            Back to Home <FaArrowRight className="text-xs" />
                        </FloatBtn>
                    </Link>
                </TextAnimate>
            </section>
        </Page>
    )
}
