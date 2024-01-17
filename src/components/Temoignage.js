import React from 'react'
import {motion} from "framer-motion"
import Temoignage1 from "../assets/temoignage-1.jpg"
import Temoignage2 from "../assets/temoignage-2.jpg"

function Temoignage() {
  return (
    <div className='relative  max-w-[50rem] m-auto pb-[80px]'>
      <motion.h2

      initial={{y:50 , opacity:0}}
      transition={{duration:.4}}
      whileInView={{y:0 , opacity:1}}
      viewport={{once:true}}

       className='font-bold text-center text-[#ccd6f6] text-2xl sm:text-4xl  mb-[50px]'>Ce qu'on dit de moi</motion.h2>

      <motion.div
      initial={{y:50 , opacity:0}}
      transition={{duration:.4}}
      whileInView={{y:0 , opacity:1}}
      viewport={{once:true}}
       className='sm:flex bg-[#0D2847] p-4 mb-10'>
        <img className='object-cover' src={Temoignage1} alt="Temoignage1" />
        <p className='sm:ml-4 mt-4'>
        Abraham Ouattara a des qualités exceptionnels avec lui, nous avons pu réaliser notre site comme voulu, je suis rassuré dorénavant de travailler avec lui,
        Je le recommande pour son efficacité sa coopération et sa flexibilité.  
        </p>
      </motion.div>

      <motion.div
      initial={{y:50 , opacity:0}}
      transition={{duration:.4}}
      whileInView={{y:0 , opacity:1}}
      viewport={{once:true}}
       className='sm:flex bg-[#0D2847] p-4 '>
        <img className='object-cover' src={Temoignage2} alt="Temoignage2" />
        <p className='sm:ml-4 mt-4'>
         C'est un réel plaisir pour moi de travailler avec Abraham Ouattara qui a toujours été à la hauteur de mes attentes,
         c'est le genre de devellopeur qui sait réellement ce qu'il fait
        </p>
      </motion.div>
    </div>
  )
}

export default Temoignage