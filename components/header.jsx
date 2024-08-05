import { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import TextAnimate from "./Layout/TextAnimate";

const Header = () => {
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
        }, 1000); // Update every second

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav className="absolute top-0 left-0 z-[5] w-full p-4 lg:p-5 bg-white">
                <div className="flex justify-between border-b border-black pb-5 text-[0.75rem] lg:text-[0.9rem]">
                    <TextAnimate>
                        <div className="text-[0.7rem] lg:text-sm text-zinc-600 pb-1">Name</div>
                        <div className="leading-[0.8rem] lg:leading-5 uppercase">Kaung Khant Kyaw™, 2024</div>
                        <div className="leading-[0.8rem] lg:leading-5 ">UTC +6:30 ({burmaTimeNow}, MM)</div>
                    </TextAnimate>
                    <TextAnimate>
                        <div className="text-[0.7rem] lg:text-sm text-zinc-600 pb-1">Status</div>
                        <div className="leading-[0.8rem] lg:leading-5 uppercase">Currently available for</div>
                        <div className="leading-[0.8rem] lg:leading-5 uppercase">freelance projects</div>
                    </TextAnimate>
                    <TextAnimate className="hidden lg:block">
                        <div className="text-[0.7rem] lg:text-sm text-zinc-600 pb-1">Sitemap</div>
                        <div className="leading-[0.8rem] lg:leading-5 uppercase">
                            <Link className="hover:underline" href="/" onClick={closeMenu}>Home</Link>,
                            <Link className="hover:underline" href="/about" onClick={closeMenu}> About</Link>,
                            <Link className="hover:underline" href="/about" onClick={closeMenu}> Project</Link>
                        </div>
                        <div className="leading-[0.8rem] lg:leading-5 uppercase">
                            <Link className="hover:underline" href="/about" onClick={closeMenu}>Services</Link>,
                            <Link className="hover:underline" href="/about" onClick={closeMenu}> Contact</Link>
                        </div>
                    </TextAnimate>
                    <TextAnimate className="pe-6 hidden lg:block lg:pe-5">
                        <div className="text-[0.7rem] lg:text-sm text-zinc-600 pb-1">Let's Connect</div>
                        <div className="leading-[0.8rem] lg:leading-5 uppercase">
                            <a className="hover:underline" href="https://github.com/DanialK007" target="_blank" rel="noopener noreferrer">GitHub</a>,
                            <a className="hover:underline" href="https://www.linkedin.com/in/kaung-khant-kyaw-688141212/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>,
                            <a className="hover:underline" href="mailto:kaungkhantkyawdk@gmail.com" target="_blank" rel="noopener noreferrer"> Email</a>
                        </div>
                        <div className="leading-[0.8rem] lg:leading-5 uppercase">
                            <a className="hover:underline" href="https://t.me/DanialK007" target="_blank" rel="noopener noreferrer">Telegram</a>,
                            <a className="hover:underline" href="https://www.instagram.com/kaungkhantkyawdk/" target="_blank" rel="noopener noreferrer"> Instagram</a>
                        </div>
                    </TextAnimate>
                </div>
            </nav>
            <div id="menuBtn" className="lg:hidden fixed bottom-5 right-5 z-50">
                <button onClick={toggleMenu} className={classNames(menuOpen ? "bg-black text-white border-white" : "bg-white text-black border-black", "duration-700 border uppercase px-2 py-1 rounded-s-full rounded-e-full")}>
                    {menuOpen ? "close" : "menu"}
                </button>
            </div>

            <div id="menu" className={classNames(menuOpen ? "top-0" : "top-full", "lg:hidden duration-300 ease-out fixed top-0 left-0 w-full h-full bg-black text-white z-[8] p-4")}>
                <div className="flex justify-between text-[0.75rem] lg:text-[0.9rem] border-b pb-5">
                    <div>
                        <div className="text-[0.7rem] lg:text-sm text-zinc-500 pb-1">Name</div>
                        <div className="leading-[0.8rem] lg:leading-5 uppercase">Kaung Khant Kyaw™, 2024</div>
                        <div className="leading-[0.8rem] lg:leading-5 ">UTC +6:30 ({burmaTimeNow}, MM)</div>
                    </div>
                    <div>
                        <div className="text-[0.7rem] lg:text-sm text-zinc-500 pb-1">Status</div>
                        <div className="leading-[0.8rem] lg:leading-5 uppercase">Currently available for</div>
                        <div className="leading-[0.8rem] lg:leading-5 uppercase">freelance projects</div>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="text-lg text-zinc-500 pb-4 border-b border-white/20">Sitemap</div>
                    <div className="text-xl uppercase grid grid-cols-2 gap-5 py-4">
                        <Link className="hover:underline" href="/" onClick={closeMenu}>Home</Link>
                        <Link className="hover:underline" href="/about" onClick={closeMenu}> About</Link>
                        <Link className="hover:underline" href="/about" onClick={closeMenu}>Project</Link>
                        <Link className="hover:underline" href="/about" onClick={closeMenu}> Services</Link>
                        <Link className="hover:underline" href="/about" onClick={closeMenu}> Contact</Link>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="text-lg text-zinc-500 pb-4 border-b border-white/20">Let's Connect</div>
                    <div className="text-xl uppercase grid grid-cols-2 gap-5 py-4">
                        <a className="hover:underline" href="https://github.com/DanialK007" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a className="hover:underline" href="https://www.linkedin.com/in/kaung-khant-kyaw-688141212/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a className="hover:underline" href="mailto:kaungkhantkyawdk@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                        <a className="hover:underline" href="https://t.me/DanialK007" target="_blank" rel="noopener noreferrer"> Telegram</a>
                        <a className="hover:underline" href="https://www.instagram.com/kaungkhantkyawdk/" target="_blank" rel="noopener noreferrer"> Instagram</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
