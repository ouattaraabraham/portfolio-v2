import React ,{ useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import star from '../assets/Star.svg'
import { motion , AnimatePresence } from "framer-motion"
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
// import { FaTwitter,FaSquareGithub } from "react-icons/fa6";
// import { AiFillInstagram } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";



function NavBar() {
    const [open,setOpen]=useState(false)

    const fcOpen=()=>{
   setOpen(e=>!e)
   console.log("click");
    }

    const fcSetDown=()=>{
      setOpen(false)
    }

    const links=[
        // {id:1,link:'Home'},
        {id:0,link:'À propos'},
        {id:1,link:'Projects'},
        {id:2,link:'Témoignages'},
        {id:3,link:'Contact'},
    ]

    useEffect(()=>{
      if(open){
        document.getElementById('HBF').style.filter='blur(6px)'
      }else{
        document.getElementById('HBF').style.filter='blur(0)'

      }

    },[open])
  return (
    <div id='navBar'
      
     className=' z-10  flex fixed top-0 py-2 px-3 mobil:px-8 lg:px-20  md:py-[0.7rem]  w-full  justify-between items-center text-[#8d8d8d] '>
        <div  className='cursor-pointer flex  items-center z-10'>
         <Link  className='hidden md:block' to='Home' smooth duration={500}>
           <img className='w-[4rem] ' src={star} alt="Profil" />
         </Link>

         <Link onClick={fcSetDown}  className=' md:hidden' to='Home' smooth duration={500}>
           <img className='w-[3rem]' src={star} alt="Profil" />
         </Link>
         </div>

           <ul className='hidden md:flex gap-8 text-[#ccd6f6] pr-[14px]'>
                { links.map(({id,link})=>{
                  return (<li  className='tracking-[.07em] font-montrealI font-semibold py-5  hover:cursor-pointer hover:scale-90' key={id}>
                          <Link to={link} smooth duration={500}>{link}</Link>
                         </li>)
                }
              
                )
                }
            </ul>
          {/* mobil-bar */}
         <button onClick={fcOpen} className='md:hidden z-10 pr-[14px]'>
         {open?<RxCross2 size={30} color='white'/> :<HiOutlineBars3CenterLeft size={30} color='white'/>}
         </button>
         
      <AnimatePresence>

        {open && 
        <motion.div
          initial={{x:400 }}
          animate={{x:0}}
          transition={{delay: 0 , duration:0.3}}
          exit={{x:400}}
         className='bg-[#0D2847] text-[#ccd6f6] text-2xl  md:hidden  absolute flex flex-col  top-0 right-0 h-screen  w-[70vw] justify-center items-center '>

            <ul className='text-center w-full '>
                 {/* <div className='w-full h-[1px] bg-white'></div> */}
                 {/* <li className='py-4  cursor-pointer hover:scale-90 ' >
                <Link onClick={fcOpen}  to='Home' smooth duration={500}>Home</Link>
                 </li> */}
                 <li className='py-4  cursor-pointer hover:scale-90 ' >
                <Link onClick={fcOpen}  to='À propos' smooth duration={500}>À propos </Link>
                 </li>
                 <li className='py-4  cursor-pointer hover:scale-90 ' >
                <Link onClick={fcOpen}  to='Projects' smooth duration={500}>Projects</Link>
                 </li>
                 <li className='py-4  cursor-pointer hover:scale-90 ' >
                <Link onClick={fcOpen}  to='Témmoignages' smooth duration={500}>Témoignages</Link>
                 </li>
                 <li className='py-4  cursor-pointer hover:scale-90 ' >
                <Link onClick={fcOpen}  to='Contact' smooth duration={500}>Contact</Link>
                 </li>
            </ul>

        </motion.div>   
            }
      </AnimatePresence>

    </div>
  )
}

export default NavBar