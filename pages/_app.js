import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import logo from "@/components/image/K-logo.svg";

import "./global.css";
import "./output.css";

const App = ({ Component, pageProps }) => {
    const router = useRouter();
    const lenisRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        lenisRef.current = lenis;

        // RAF callback for Lenis
        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        // Clean up Lenis on component unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <title>Portfolio</title>
            <link rel="icon" href={logo} />

            <div className="fixed flex items-center justify-center top-0 left-0 w-full h-full bg-white -z-10 opacity-0 loading">
                <div className="w-10 h-10 bg-black animate-spin rounded-md"></div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div key={router.pathname}>
                    <Component {...pageProps} />

                    {/* <motion.div
                        className="slide-in"
                        initial={{scaleY: 0}}
                        animate={{scaleY: 0}}
                        exit={{scaleY: 1}}
                        transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
                    ></motion.div>
                    <motion.div
                        className="slide-out"
                        initial={{scaleY: 1}}
                        animate={{scaleY: 0}}
                        exit={{scaleY: 0}}
                        transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
                    ></motion.div> */}
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default App;
