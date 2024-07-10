import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

export default function TextAnimate({ children, className }) {
    const anim = (variants) => {
        return {
            initial: "initial",
            animate: "animate",
            variants
        }
    }

    const opacity = {
        initial: {
            y: 0
        },
        animate: {
            y: "-100%",
            transition: {
                duration: 0.8,
                delay: 0.5,
                ease: [0.85, 0, 0.15, 1]
            }
        }
    }

    return (
        <>
            <div className={classNames('w-fit h-fit overflow-hidden relative', className)}>
                <motion.div {...anim(opacity)} className='absolute w-full h-full z-10 bg-white'>
                </motion.div>
                {children}
            </div>
        </>
    )
}
