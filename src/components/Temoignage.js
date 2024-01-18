import React from 'react'
import {motion} from "framer-motion"
import Temoignage1 from "../assets/temoignage-1.jpg"
import Temoignage2 from "../assets/temoignage-2.jpg"

function Temoignage() {
  return (
    <div id='Témmoignages'  className='relative  max-w-[50rem] m-auto pt-[50px] pb-[80px]'>
      <motion.h2

      initial={{y:50 , opacity:0}}
      transition={{duration:.4}}
      whileInView={{y:0 , opacity:1}}
      viewport={{once:true}}

       className='font-bold text-center text-[#ccd6f6] text-2xl sm:text-4xl  mb-[50px]'>Témoignages</motion.h2>

      <motion.div
      initial={{y:50 , opacity:0}}
      transition={{duration:.4}}
      whileInView={{y:0 , opacity:1}}
      viewport={{once:true}}
       className='sm:flex bg-[#0D2847] p-4 mb-10'>
        <img className='object-cover' src={Temoignage1} alt="Temoignage1" />
        <p className='sm:ml-4 mt-4'>
         Abraham a des qualités exceptionnelles, il a réalisé notre site internet comme voulu, je suis rassuré dorénavant de travailler avec lui,
         je le recommande pour son efficacité sa coopération et sa flexibilité.        </p>
      </motion.div>

      <motion.div
      initial={{y:50 , opacity:0}}
      transition={{duration:.4}}
      whileInView={{y:0 , opacity:1}}
      viewport={{once:true}}
       className='sm:flex bg-[#0D2847] p-4 '>
        <img className='object-cover' src={Temoignage2} alt="Temoignage2" />
        <p className='sm:ml-4 mt-4'>
        C'est un réel plaisir pour moi de travailler avec Abraham qui a toujours été à la hauteur de mes attentes.
        Il est le type de développeur qui sait réellement ce qu'il fait.
        </p>
      </motion.div>
    </div>
  )
}

export default Temoignage