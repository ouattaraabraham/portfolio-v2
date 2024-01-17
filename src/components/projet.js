import React from 'react'
import {motion} from "framer-motion"
import ImgProjet1 from "../assets/projet-img-1.jpg"
import ImgProjet2 from "../assets/projet-img-2.jpg"

function projet() {
  return (
    <div id='Project'  className='relative max-w-[72rem] m-auto py-[50px] sm:py-[80px]'>
      <motion.h1
      initial={{y:50 , opacity:0}}
      transition={{duration:.4}}
      whileInView={{y:0 , opacity:1}}
      viewport={{once:true}}
       className='font-bold text-center text-[#ccd6f6] text-2xl sm:text-4xl  mb-[50px] lg:mb-[70px] '><span className='text-[#0086ed] text-xl sm:text-3xl '>0.2 </span>Quelques projets réalisés</motion.h1>

      <div
       >
        <motion.div
        initial={{y:50 , opacity:0}}
        transition={{duration:.4}}
        whileInView={{y:0 , opacity:1}}
        viewport={{once:true}}
         className='sm:grid grid-cols-2 items-center gap-12 mb-14 sm:mb-8 lg:mb-28  '>
            <img src={ImgProjet1} alt="projet 1" />
            <div className='text-center sm:text-start py-7'>
                <h2 className='font-bold pb-6 text-[#ccd6f6] text-lg lg:text-2xl'> Lux hôtel </h2>
                <p className='pb-6 lg:text-lg'>
                Lux hôtel est un site d'hôtel que j'ai créé en utilisant les technologies telles
                 que react js , taiwind css , le site contient plusieurs pages, accueil, réservation, et contacter .                </p>
               <a target='blank' href=' https://ouattaraabraham.github.io/lux-hotel/'>
               <button className='text-white transition duration-300 ease-in-out bg-[#0086ed] hover:bg-[rgba(0,134,237,0.8)] px-12 py-2 text-sm'>
                    EXPLORER
                </button>
               </a>
            </div>
        </motion.div>

        <motion.div
          initial={{y:50 , opacity:0}}
          transition={{duration:.4}}
          whileInView={{y:0 , opacity:1}}
          viewport={{once:true}}
         className='sm:grid grid-cols-2 items-center gap-12 mb-14 sm:mb-8 lg:mb-28  '>
            <img src={ImgProjet2} alt="projet 2" />
            <div className='text-center sm:text-start py-7'>
                <h2 className='font-bold pb-6 text-[#ccd6f6] text-lg lg:text-2xl'> Event-fiesta</h2>
                <p className='pb-6 lg:text-lg'>
                Event-fiesta est une application permettant 
                de trouver des lieux pour son événement (team building, soirée privée, mariage, etc.) Selon les critères, la typographie du lieu souhaité               
                </p>
                <a target='blank' href='https://ouattaraabraham.github.io/event-fiesta/'>
                  <button className='text-white transition duration-300 ease-in-out bg-[#0086ed] hover:bg-[rgba(0,134,237,0.8)] px-12 py-2 text-sm'>
                      EXPLORER
                  </button>
                </a>
            </div>
        </motion.div>

      </div>
    </div>
  )
}

export default projet