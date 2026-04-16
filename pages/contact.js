import { useState } from "react";
import Page from "@/components/page";
import Link from "next/link";
import FloatBtn from "@/components/FloatBtn.jsx";
import TextAnimate from "@/components/Layout/TextAnimate";
import { FaArrowRight, FaGithub, FaLinkedin, FaTelegram, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

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
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <Page>
            <div className="pt-28 lg:pt-32 p-4 lg:p-5 flex flex-col justify-between w-full min-h-screen relative">
                <div className="">
                    <TextAnimate>
                        <div className="text-2xl lg:text-[3.4rem] leading-[1.22]">
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Have a project in mind or just want to say hello?
                            <span className="text-red-500"> I'd love to hear from you.</span> Let's create something amazing together.
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
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    <div>
                        <div className="text-3xl lg:text-5xl uppercase pb-10">Send a Message</div>
                        
                        {submitted ? (
                            <TextAnimate>
                                <div className="border border-black p-8 text-center">
                                    <div className="text-3xl lg:text-4xl pb-4">Thank you!</div>
                                    <div className="text-zinc-600 pb-6">Your message has been received. I'll get back to you within 24-48 hours.</div>
                                    <button 
                                        onClick={() => setSubmitted(false)}
                                        className="text-sm underline hover:text-red-500 duration-300"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            </TextAnimate>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <TextAnimate>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm uppercase pb-2">Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full border border-black p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 duration-300"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm uppercase pb-2">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full border border-black p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 duration-300"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>
                                </TextAnimate>
                                
                                <TextAnimate>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm uppercase pb-2">Subject *</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full border border-black p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 duration-300"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="UI/UX Design">UI/UX Design</option>
                                            <option value="E-commerce">E-commerce</option>
                                            <option value="Consultation">Consultation</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </TextAnimate>
                                
                                <TextAnimate>
                                    <div>
                                        <label htmlFor="message" className="block text-sm uppercase pb-2">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full border border-black p-3 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 duration-300 resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                </TextAnimate>
                                
                                <TextAnimate>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group relative border overflow-hidden border-black uppercase px-6 py-3 rounded-s-full rounded-e-full hover:bg-black hover:text-white duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                </TextAnimate>
                            </form>
                        )}
                    </div>
                    
                    <div>
                        <div className="text-3xl lg:text-5xl uppercase pb-10">Contact Info</div>
                        
                        <div className="space-y-6 pb-12">
                            <TextAnimate>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 border border-black flex items-center justify-center flex-shrink-0">
                                        <FaEnvelope className="text-lg" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-zinc-500 uppercase pb-1">Email</div>
                                        <a href="mailto:kaungkhantkyawdk@gmail.com" className="text-lg hover:text-red-500 duration-300">
                                            kaungkhantkyawdk@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </TextAnimate>
                            <TextAnimate>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 border border-black flex items-center justify-center flex-shrink-0">
                                        <FaPhone className="text-lg" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-zinc-500 uppercase pb-1">Phone</div>
                                        <a href="tel:+959255599863" className="text-lg hover:text-red-500 duration-300">
                                            (+95) 925 559 9863
                                        </a>
                                    </div>
                                </div>
                            </TextAnimate>
                            <TextAnimate>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 border border-black flex items-center justify-center flex-shrink-0">
                                        <FaMapMarkerAlt className="text-lg" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-zinc-500 uppercase pb-1">Location</div>
                                        <div className="text-lg">Mandalay, Myanmar</div>
                                    </div>
                                </div>
                            </TextAnimate>
                        </div>
                        
                        <div className="text-xl uppercase pb-6">Follow Me</div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            {socialLinks.map((social, index) => (
                                <TextAnimate key={index}>
                                    <a 
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 border border-black hover:bg-black hover:text-white duration-300 group"
                                    >
                                        <social.icon className="text-xl" />
                                        <span className="text-sm uppercase">{social.label}</span>
                                        <FaArrowRight className="text-xs -rotate-45 group-hover:rotate-0 duration-500 ml-auto" />
                                    </a>
                                </TextAnimate>
                            ))}
                        </div>
                        
                        <TextAnimate className="mt-10">
                            <div className="border border-black p-6">
                                <div className="flex items-center gap-3 pb-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-sm uppercase text-zinc-500">Current Status</span>
                                </div>
                                <div className="text-xl font-semibold pb-2">Available for Projects</div>
                                <div className="text-sm text-zinc-600">I'm currently accepting new freelance projects. Typical response time is within 24 hours.</div>
                            </div>
                        </TextAnimate>
                    </div>
                </div>
            </div>

            <div className="p-5 py-20 bg-zinc-50">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <TextAnimate>
                        <div>
                            <div className="text-3xl lg:text-5xl uppercase pb-4">Based in Myanmar</div>
                            <div className="text-lg text-zinc-600 pb-6">Working remotely with clients around the world. Available for virtual meetings across different time zones.</div>
                            <div className="text-sm text-zinc-500">
                                <div className="pb-2">Local Time: UTC +6:30 (MMT)</div>
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
            </div>
        </Page>
    )
}
