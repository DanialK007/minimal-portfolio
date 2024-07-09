import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaTelegram, FaTwitter } from "react-icons/fa"
import GsapMagnetic from './Layout/GsapMagnetic'
import FramerMagnetic from './Layout/FramerMagnetic'

function Social() {
  return (
    <div className='flex justify-between items-center w-fit gap-2 lg:gap-5 pt-2 lg:py-5'>
        <GsapMagnetic>    
            <a href="#" className='block lg:p-2 group'>
                <FaFacebook className='text-xl lg:text-[2.4rem] group-hover:text-red-500' />
            </a>
        </GsapMagnetic>    
        <GsapMagnetic>    
            <a href="#" className='bloclg:k p-2 group'>
                <FaGithub className='text-xl lg:text-[2.4rem] group-hover:text-red-500' />
            </a>
        </GsapMagnetic>    
        <GsapMagnetic>    
            <a href="#" className='block pe-2 lg:p-2 group'>
                <FaLinkedin className='text-xl lg:text-[2.4rem] group-hover:text-red-500' />
            </a>
        </GsapMagnetic>    
        <GsapMagnetic>    
            <a href="#" className='block lg:p-2 group'>
                <FaTelegram className='text-xl lg:text-[2.4rem] group-hover:text-red-500' />
            </a>
        </GsapMagnetic>    
    </div>
  )
}

export default Social
