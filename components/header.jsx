import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import TextAnimate from "./Layout/TextAnimate";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/project", label: "Projects" },
    { href: "/service", label: "Services" },
    { href: "/contact", label: "Contact" },
];

const socialLinks = [
    { href: "https://github.com/DanialK007", label: "GitHub" },
    { href: "https://www.linkedin.com/in/kaung-khant-kyaw-688141212/", label: "LinkedIn" },
    { href: "mailto:kaungkhantkyawdk@gmail.com", label: "Email" },
    { href: "https://t.me/DanialK007", label: "Telegram" },
    { href: "https://www.instagram.com/kaungkhantkyawdk/", label: "Instagram" },
];

const Header = () => {
    const router = useRouter();
    const [burmaTimeNow, setBurmaTimeNow] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const getBurmaTimeNow = () => {
            const d = new Date();
            const localTime = d.getTime();
            const localOffset = d.getTimezoneOffset() * 60000;
            const utc = localTime + localOffset;
            const offset = 6.5; // UTC offset for Myanmar (Burma)
            const burma = utc + (3600000 * offset);
            return new Date(burma).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        };

        setBurmaTimeNow(getBurmaTimeNow());

        const interval = setInterval(() => {
            setBurmaTimeNow(getBurmaTimeNow());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Close menu on route change
    useEffect(() => {
        const handleRouteChange = () => {
            setMenuOpen(false);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router]);

    const isActive = (href) => {
        return router.pathname === href;
    };

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="absolute top-0 left-0 z-[5] w-full p-4 lg:p-5 bg-white">
                <div className="flex justify-between border-b border-black pb-5 text-[0.75rem] lg:text-[0.9rem]">
                    <TextAnimate>
                        <div className="text-[0.7rem] lg:text-sm text-zinc-600 pb-1">Name</div>
                        <div className="leading-[0.8rem] lg:leading-5 uppercase">Kaung Khant Kyaw, 2024</div>
                        <div className="leading-[0.8rem] lg:leading-5">UTC +6:30 ({burmaTimeNow}, MM)</div>
                    </TextAnimate>
                    <TextAnimate>
                        <div className="text-[0.7rem] lg:text-sm text-zinc-600 pb-1">Status</div>
                        <div className="leading-[0.8rem] lg:leading-5 uppercase">Currently available for</div>
                        <div className="leading-[0.8rem] lg:leading-5 uppercase">freelance projects</div>
                    </TextAnimate>
                    <TextAnimate className="hidden lg:block">
                        <div className="text-[0.7rem] lg:text-sm text-zinc-600 pb-1">Sitemap</div>
                        <div className="leading-[0.8rem] lg:leading-5 uppercase">
                            {navLinks.slice(0, 3).map((link, index) => (
                                <span key={link.href}>
                                    <Link 
                                        className={classNames(
                                            "hover:underline transition-colors",
                                            isActive(link.href) && "text-red-500"
                                        )} 
                                        href={link.href}
                                    >
                                        {link.label}
                                    </Link>
                                    {index < 2 && ", "}
                                </span>
                            ))}
                        </div>
                        <div className="leading-[0.8rem] lg:leading-5 uppercase">
                            {navLinks.slice(3).map((link, index) => (
                                <span key={link.href}>
                                    <Link 
                                        className={classNames(
                                            "hover:underline transition-colors",
                                            isActive(link.href) && "text-red-500"
                                        )} 
                                        href={link.href}
                                    >
                                        {link.label}
                                    </Link>
                                    {index < 1 && ", "}
                                </span>
                            ))}
                        </div>
                    </TextAnimate>
                    <TextAnimate className="pe-6 hidden lg:block lg:pe-5">
                        <div className="text-[0.7rem] lg:text-sm text-zinc-600 pb-1">Let&apos;s Connect</div>
                        <div className="leading-[0.8rem] lg:leading-5 uppercase">
                            {socialLinks.slice(0, 3).map((link, index) => (
                                <span key={link.href}>
                                    <a 
                                        className="hover:underline" 
                                        href={link.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        {link.label}
                                    </a>
                                    {index < 2 && ", "}
                                </span>
                            ))}
                        </div>
                        <div className="leading-[0.8rem] lg:leading-5 uppercase">
                            {socialLinks.slice(3).map((link, index) => (
                                <span key={link.href}>
                                    <a 
                                        className="hover:underline" 
                                        href={link.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        {link.label}
                                    </a>
                                    {index < 1 && ", "}
                                </span>
                            ))}
                        </div>
                    </TextAnimate>
                </div>
            </nav>

            {/* Mobile Menu Button */}
            <div id="menuBtn" className="lg:hidden fixed bottom-5 right-5 z-50">
                <button 
                    onClick={toggleMenu} 
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    className={classNames(
                        menuOpen ? "bg-black text-white border-white" : "bg-white text-black border-black", 
                        "duration-300 border uppercase px-4 py-2 rounded-full text-sm font-medium"
                    )}
                >
                    {menuOpen ? "Close" : "Menu"}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                id="menu" 
                className={classNames(
                    menuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0", 
                    "lg:hidden fixed top-0 left-0 w-full h-full bg-black text-white z-[8] p-4 transition-all duration-500 ease-out overflow-y-auto"
                )}
            >
                {/* Mobile Header */}
                <div className="flex justify-between text-[0.75rem] border-b border-white/20 pb-5">
                    <div>
                        <div className="text-[0.7rem] text-zinc-500 pb-1">Name</div>
                        <div className="leading-[0.8rem] uppercase">Kaung Khant Kyaw, 2024</div>
                        <div className="leading-[0.8rem]">UTC +6:30 ({burmaTimeNow}, MM)</div>
                    </div>
                    <div>
                        <div className="text-[0.7rem] text-zinc-500 pb-1">Status</div>
                        <div className="leading-[0.8rem] uppercase">Currently available for</div>
                        <div className="leading-[0.8rem] uppercase">freelance projects</div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="mt-10">
                    <div className="text-lg text-zinc-500 pb-4 border-b border-white/20">Sitemap</div>
                    <nav className="py-4">
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link 
                                        href={link.href} 
                                        onClick={closeMenu}
                                        className={classNames(
                                            "text-2xl uppercase block hover:text-red-500 transition-colors",
                                            isActive(link.href) && "text-red-500"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Social Links */}
                <div className="mt-10">
                    <div className="text-lg text-zinc-500 pb-4 border-b border-white/20">Let&apos;s Connect</div>
                    <div className="grid grid-cols-2 gap-4 py-4">
                        {socialLinks.map((link) => (
                            <a 
                                key={link.href}
                                className="text-xl uppercase hover:text-red-500 transition-colors" 
                                href={link.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Email CTA */}
                <div className="mt-10 pt-6 border-t border-white/20">
                    <a 
                        href="mailto:kaungkhantkyawdk@gmail.com"
                        className="block text-center text-lg hover:text-red-500 transition-colors"
                    >
                        kaungkhantkyawdk@gmail.com
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;
