import React from 'react'
import {motion}  from "framer-motion"
import { BiAward } from "react-icons/bi";
import ImgSkills from "../assets/img-skills.svg"

import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs , TbBrandThreejs  } from "react-icons/tb";
import { LuFigma } from "react-icons/lu";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Apropos() {
  return (
    <div
     id='À propos'  className='relative max-w-[72rem] m-auto pt-[100px] pb-[80px] sm:py-[80px]'>
      <motion.h2
       initial={{y:50 , opacity:0}}
      transition={{duration:.4}}
      whileInView={{y:0 , opacity:1}}
      viewport={{once:true}}
       className='font-bold text-center text-[#ccd6f6] text-2xl sm:text-4xl mb-[50px]'>À propos </motion.h2>

      <motion.div
       initial={{y:50 , opacity:0}}
      transition={{duration:.4}}
      whileInView={{y:0 , opacity:1}}
      viewport={{once:true}}
       className='sm:grid grid-cols-2 items-center'>
        <div className='pb-10'>
            <p className='mb-4 lg:text-lg'>
            Bienvenue dans mon monde de développeur Web professionnel. Je m'appelle Abraham et je suis un développeur expérimenté spécialisé dans la création de solution frontend de haute qualité, efficace et visuellement attrayante.
            </p>
            <p className='mb-4 lg:text-lg'>
            Grâce à mon expertise, j'aide les entreprises et les organisations à atteindre leurs objectifs en ligne et à se démarquer dans le paysage numérique concurrentiel.
            </p>
            {/* Technologie using */}
            <div className='mt-5 '>
                <h2 className='lg:text-lg'>
                 Voici quelques technologies avec lesquelles j’ai travaillé récemment :                </h2>
                <div className='flex items-center mt-5 text-[#ccd6f6]'>
                    <div className='mr-12'>
                        <p className='flex items-center mb-2.5'>
                        <BiLogoJavascript color='#70B8FF'/>  <span className='pl-2'>JavaScript (ES6+)</span>
                        </p>
                        <p className='flex items-center mb-2.5'>
                        <BiLogoTypescript color='#70B8FF'/>  <span className='pl-2'>TypeScript</span>
                        </p>
                        <p className='flex items-center mb-2.5'>
                        <FaReact color='#70B8FF'/>  <span className='pl-2'>React</span>
                        </p>
                        <p className='flex items-center mb-2.5'>
                        <TbBrandNextjs color='#70B8FF'/>  <span className='pl-2'>Next js</span>
                        </p>
                    </div>
                    <div>
                        <p className='flex items-center mb-2.5'>
                        <TbBrandThreejs color='#70B8FF'/>  <span className='pl-2'>tree js</span>
                        </p>
                        <p className='flex items-center mb-2.5'>
                        <SiTailwindcss color='#70B8FF'/>  <span className='pl-2'>tailwind</span>
                        </p>
                        <p className='flex items-center mb-2.5'>
                        <LuFigma color='#70B8FF'/>  <span className='pl-2'>figma</span>
                        </p>
                        <p className='flex items-center mb-2.5'>
                        <FaGithub color='#70B8FF'/>  <span className='pl-2'>github</span>
                        </p>
                    </div>
                </div>
            
            </div>
        </div>
        {/* img */}
        <div className='flex justify-center'>
            <img src={ImgSkills} alt="skills" />
        </div>
         
      </motion.div>
    </div>
  )
}

export default Apropos