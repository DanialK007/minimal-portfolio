// components/Layout/Description/index.jsx

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './style.module.css'; // Your CSS file for styling

const phrases = [
    "Hello, I'm a developer",
    "Welcome to my portfolio",
    "Scroll down to learn more",
    "About my skills and projects",
];

const Index = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        phrases.forEach((phrase, index) => {
            gsap.from(`.animated-text-${index}`, {
                opacity: 0,
                x: -200, // Initial position off-screen to the left
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: `.animated-text-${index}`,
                    start: 'top 80%', // Adjust start position based on your layout
                    end: 'bottom 20%', // Adjust end position based on your layout
                    scrub: true,
                    markers: true, // For debugging, remove in production
                },
            });
        });

        // Clean up ScrollTrigger instances when component unmounts
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                trigger.kill();
            });
        };
    }, []);

    return (
        <div className={styles.container}>
            {phrases.map((phrase, index) => (
                <p key={index} className={`animated-text-${index} ${styles.animatedText}`}>
                    {phrase}
                </p>
            ))}
        </div>
    );
};

export default Index;
