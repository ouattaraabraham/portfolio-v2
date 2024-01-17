import React from 'react'
import {motion}  from "framer-motion"
import { FaTwitter,FaSquareGithub } from "react-icons/fa6"
import { AiFillInstagram } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

function Contacter() {
  return (
    <div id='Contact' className='text-center flex flex-col items-center relative max-w-[72rem] m-auto py-[80px]'>
       <motion.h2
        initial={{y:50 , opacity:0}}
        transition={{duration:.4}}
        whileInView={{y:0 , opacity:1}}
        viewport={{once:true}}
        className='font-bold text-center text-[#ccd6f6] text-2xl sm:text-4xl  mb-8'><span className='text-[#0086ed] text-xl sm:text-3xl '>0.3 </span>Contacter</motion.h2>

       <p className='mb-6 sm:text-lg'>N'hésitez pas à me contacter par email ou via mes réseaux sociaux.</p>
          {/* contact link */}
          <div className=' flex flex-wrap text-white  justify-center'>
                     <a href="https://github.com/ouattaraabraham" className='flex items-center h-fit px-2 py-1 mr-2 mt-2 sm:mt-2 rounded-lg bg-[#0086ed] hover:bg-[rgba(0,134,237,0.8)] transition duration-300 ease-in-out'>
                     <FaLinkedinIn className='mr-2'/>
                      Linkedin
                     </a>
                     <a href="https://web.facebook.com/AbwebDeveloperDesigne/" className='flex items-center h-fit px-2 py-1 mr-2 mt-2 sm:mt-2 rounded-lg bg-[#0086ed] hover:bg-[rgba(0,134,237,0.8)] transition duration-300 ease-in-out'>
                     <FaTwitter className='mr-2'/>
                     Twitter
                     </a>
                     <a href="https://www.instagram.com/abrahamcodeur/" className='flex items-center h-fit px-2 py-1 mr-2 mt-2 sm:mt-2 rounded-lg bg-[#0086ed] hover:bg-[rgba(0,134,237,0.8)] transition duration-300 ease-in-out'>
                     <AiFillInstagram className='mr-2'/>
                     Instagram
                     </a>
                     <a href="https://github.com/ouattaraabraham" className='flex items-center h-fit px-2 py-1 mr-2 mt-2 sm:mt-2 rounded-lg bg-[#0086ed] hover:bg-[rgba(0,134,237,0.8)] transition duration-300 ease-in-out'>
                     <FaSquareGithub className='mr-2'/>
                     Github
                     </a>
              
           </div>   
    </div>
  )
}

export default Contacter