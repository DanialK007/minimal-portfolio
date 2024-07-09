import React from 'react';
// import "/styles.scss";
import { motion } from 'framer-motion';

export default function Inner({ children }) {
    
    const anim = (variants) => {
        return {
            initial: "initial",
            animate: "animate",
            exit: "exit",
            variants
        }
    }

    const opacity = {
        initial: {
            opacity: 0 
        },
        animate: { 
            opacity: 1
        },
        exit: { 
            opacity: 1,
            transition : {
                durtaion : 1,
                ease: 'easeInOut'
            }
        }
    }

    const slide = {
        initial : {
            top : "100vh"
        },
        animate : {
            top : "100vh"
        },
        exit : {
            top : "0",
            transition : {
                duration : 1,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }

    const perspective = {
        initial : {
            y: 0,
            scale: 1,
            opacity: 1
        },
        animate : {
            y: 0,
            scale: 1,
            opacity: 1
        },
        exit : {
            y: -100,
            scale: 0.9,
            opacity: 0.2,
            transition : {
                duration : 1.1,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }

    return (
        <div className='inner'>
            <motion.div {...anim(slide)} className='slide'></motion.div>
            <motion.div {...anim(perspective)} className="page">
                <motion.div {...anim(opacity)}>
                    {children}
                </motion.div>
            </motion.div>
        </div>
    )
}