import React from 'react'
import {motion}  from "framer-motion"
import { MdEmail } from "react-icons/md";
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
        className='font-bold text-center text-[#ccd6f6] text-2xl sm:text-4xl  mb-8'>Contact</motion.h2>

       <p className='mb-6 sm:text-lg'>N'hésitez pas à me contacter par email ou via mes réseaux sociaux.</p>
          {/* contact link */}
          <div className=' flex flex-wrap text-white  justify-center'>
                     <a target='blank' href="mailto:abraham.dev2024@gmail.com" className='flex items-center h-fit px-2 py-1 mr-2 mt-2 sm:mt-2 rounded-lg bg-[#0086ed] hover:bg-[rgba(0,134,237,0.8)] transition duration-300 ease-in-out'>
                     <MdEmail className='mr-2'/>
                      E-mail
                     </a>
                     <a target='blank' href="https://www.linkedin.com/in/abraham-ouattara-8ba4a522b/" className='flex items-center h-fit px-2 py-1 mr-2 mt-2 sm:mt-2 rounded-lg bg-[#0086ed] hover:bg-[rgba(0,134,237,0.8)] transition duration-300 ease-in-out'>
                     <FaLinkedinIn className='mr-2'/>
                      Linkedin
                     </a>
                     <a target='blank' href="https://twitter.com/AbrahamOua49761" className='flex items-center h-fit px-2 py-1 mr-2 mt-2 sm:mt-2 rounded-lg bg-[#0086ed] hover:bg-[rgba(0,134,237,0.8)] transition duration-300 ease-in-out'>
                     <FaTwitter className='mr-2'/>
                     Twitter
                     </a>
                     <a target='blank' href="https://www.instagram.com/abrahamcodeur/" className='flex items-center h-fit px-2 py-1 mr-2 mt-2 sm:mt-2 rounded-lg bg-[#0086ed] hover:bg-[rgba(0,134,237,0.8)] transition duration-300 ease-in-out'>
                     <AiFillInstagram className='mr-2'/>
                     Instagram
                     </a>
                     <a target='blank' href="https://github.com/ouattaraabraham" className='flex items-center h-fit px-2 py-1 mr-2 mt-2 sm:mt-2 rounded-lg bg-[#0086ed] hover:bg-[rgba(0,134,237,0.8)] transition duration-300 ease-in-out'>
                     <FaSquareGithub className='mr-2'/>
                     Github
                     </a>
              
           </div>   
    </div>
  )
}

export default Contacter