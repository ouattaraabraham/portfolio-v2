import React from 'react'
import { motion } from "framer-motion"
import { MdEmail } from "react-icons/md";
import { FaTwitter,FaSquareGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Hero from '../assets/hero-4.png'

// import star from '../assets/Star.svg'

function Home() {

  return (
    <div name='Home' className="relative sm:pt-[5rem] w-full min-h-screen flex ">
        <div className='m-auto sm:h-[90vh] max-w-[72rem]  items-center  flex flex-col  sm:gap-0 sm:grid sm:grid-cols-3  '> 
            {/* hero */}
            <div className=' mt-20 mb-10 sm:my-0 sm:order-2 animate-heroAnimation relative overflow-hidden rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] max-w-[500px] max-h-[500px] w-[90vw] h-[90vw] mobil-sm:w-[18rem] mobil-sm:h-[18rem] sm:w-[14rem] sm:h-[14rem] md:w-[18rem] md:h-[18rem] lg:w-[22rem] lg:h-[22rem] '>
              <img className=' border-[60%_40%_30%_70%/60%_30%_70%_40%] object-cover z-20 w-full h-full object-top' src={Hero} alt="Hero" />
            </div>  

            <div className=' col-span-2 sm:order-1 sm:pb-10'>
                <div>
                 <div >
                   <motion.p
                    initial={{y:50 , opacity:0,}}
                    animate={{y:0 , opacity:1,}}
                    transition={{ duration:0.3}}
                    className='text-2xl text-[#ccd6f6]'>👋 Salut, je suis   <span className='text-white'>Abraham</span></motion.p>
                   <motion.h1
                    initial={{y:50 , opacity:0,}}
                    animate={{y:0 , opacity:1,}}
                    transition={{delay:0.2 , duration:0.3}}
                    className="[font-size:_clamp(3rem,5vw+1rem,6.2rem)] leading-[1.1] text-[#70B8FF] font-bold">Frontend Developer.</motion.h1>
                   <motion.p
                    initial={{y:50 , opacity:0,}}
                    animate={{y:0 , opacity:1,}}
                    transition={{delay:0.3 , duration:0.3}}
                    className=" text-[#ccd6f6] [font-size:_clamp(1.5rem,1.3vw+1rem,2.6rem)] pb-4 mt-2 sm:mt-8">
                       Spécialisé dans la création de sites web attrayants et efficaces pour des clients partout dans le monde.                    </motion.p>
                   {/* contact link */}
                   <motion.div
                    initial={{y:50 , opacity:0,}}
                    animate={{y:0 , opacity:1,}}
                    transition={{delay:0.4 , duration:0.3}}
                    className=' flex flex-wrap text-white '>
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
              
                   </motion.div>
                 </div>
                </div>
               {/* blur chadow */}
               {/* <div className=' absolute bg-[#1b344e] top-[50%] left-[50%] shadow-[28px_70px_368px_105px_#274f76] z-10 w-1 h-1 rounded-full'>
                </div> */}
               
            </div>
            {/* img */}
            {/* <motion.div
              initial={{y:50 , opacity:0,}}
              animate={{y:0 , opacity:1,}}
              transition={{delay:0.5, duration:0.3}}
               className='pt-[17vw] sm:pt-0'>
              <div className='relative bg-[#cdcdcd] rotate-[6deg] border-2 w-[13em] h-[16em] sm:w-[13em] sm:h-[21em] lg:w-[25vw] lg:h-[33vw] max-w-[380px] max-h-[500px] mx-auto overflow-hidden'>
                <div  className='absolute  top-[-200px] w-full h-screen grid grid-cols-5	gap-1'>
                  <motion.div
                  initial={{skewY:'0deg',background:"#141414"}}
                  animate={{skewY:'90deg',}}
                  transition={{ duration:0.7 ,delay:0.4}}
                   className='bg-slate-200 skew-y-[100deg] w-full h-full'>.</motion.div>
                  <motion.div
                  initial={{skewY:'0deg',background:"#141414"}}
                  animate={{skewY:'90deg',}}
                  transition={{ duration:0.7,delay:0.4}}
                   className='bg-slate-200 skew-y-[100deg]'>.</motion.div>
                  <motion.div
                  initial={{skewY:'0deg',background:"#141414"}}
                  animate={{skewY:'90deg',}}
                  transition={{ duration:0.7,delay:0.4}}
                   className='bg-slate-200 skew-y-[100deg]'>.</motion.div>
                  <motion.div
                  initial={{skewY:'0deg',background:"#141414"}}
                  animate={{skewY:'90deg',}}
                  transition={{ duration:0.7,delay:0.4}}
                   className='bg-slate-200 skew-y-[100deg]'>.</motion.div>
                  <motion.div
                  initial={{skewY:'0deg',background:"#141414"}}
                  animate={{skewY:'90deg',}}
                  transition={{ duration:0.7,delay:0.4}}
                   className='bg-slate-200 skew-y-[100deg]'>.</motion.div>
                
                </div>
                <motion.div
                  initial={{opacity:0}}
                  whileInView={{opacity:1}}
                  transition={{ delay:0.6,duration:0.2}}
                 className='absolute z-30 bg-[#111927]  w-[25px]  md:w-[35px]'><img className='w-full h-full' src={star} alt="star d'abraham" />
                 </motion.div>
                <img className='object-cover z-20 w-full h-full object-top lg:object-center	' src={Hero} alt="Hero" />
              </div>
            </motion.div>     */}


            {/* <div className='animate-heroAnimation relative overflow-hidden rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] mt-20 sm:mt-0 max-w-[500px] max-h-[500px] w-[90vw] h-[90vw]  mobil:w-[22rem] mobil:h-[22rem] sm:w-[14rem] sm:h-[14rem] md:w-[18rem] md:h-[18rem] lg:w-[30vw] lg:h-[30vw] '>
              <img className=' border-[60%_40%_30%_70%/60%_30%_70%_40%] object-cover z-20 w-full h-full object-top lg:object-center	' src={Hero} alt="Hero" />
            </div> */}

        </div>
    </div>
  )
}

export default Home