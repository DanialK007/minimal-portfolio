import React from 'react'
import { motion } from 'framer-motion';

function Stairs({ children }) {
    const anim = (variants, custom) => {
        return {
            initial: "initial",
            animate: "animate",
            exit: "exit",
            variants,
            custom
        }
    }

    const expand = {
        initial: {
            top: 0
        },
        animate: (i) => ({
            top: "100%",
            height: "100%",
            transition: {
                duration: 0.4,
                delay: 0.05 * i
            },
            transitionEnd: {
                height: 0,
                top: 0
            }
        }),
        exit : (i) => ({
            height: "100%",
            transition: {
                duration: 0.4,
                delay: 0.05 * i
            }
        })
    }

    const overlay = {
        initial: {
            opacity: 0.5,
        },
        animate: {
            opacity: 1,
        },
        exit: {
            opacity: 0.5,
        }
    }

    const nbOfColumns = 8;

    return (
        <>
            <div className='page stairs'>
                <div className='transition-container'>
                    {
                        [...Array(nbOfColumns)].map((_, i) => {
                            return <motion.div {...anim(expand, nbOfColumns - i)} key={i} />
                        })
                    }
                </div>
                <motion.div {...anim(overlay)} className="content">
                    {children}
                </motion.div>
            </div>
        </>
    )
}

export default Stairs
