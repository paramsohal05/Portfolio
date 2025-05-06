import React from 'react';
import tech from "../assets/techhouse11.png";
import curcon from "../assets/currency.png"
import eshop from "../assets/eshop.png"
import portfolio from "../assets/portfolio.png"
import link from "../assets/link.png"
import github from "../assets/github.png"
import amazon from "../assets/amazon.png"
import Container from '../components/Container'
import Heading from '../components/Heading';
import NextBtn from '../components/NextBtn';
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import {motion} from 'motion/react'

const cardItems=[
    {id:1,
        img:eshop,
        title:"eShop-E-commerce",
        skills:"#React #Tailwind #Node #Express #Firebase #Stripe.",
        href:"https://eshop-n5zy.vercel.app/",
        code:'https://github.com/paramsohal05/eshop',
        desc:`Online shopping platform (dummy) where users can search, order products. 
        It has the functunctionality to filter products category wise, login/signup page and 
        Add-to-Cart feature.`
    },
    {
        id:2,
        img:tech,
        title:"Param's Tech House",
        skills:"#HTML #Bootstrap",
        href:"https://paramsohal05.github.io/Param-s-Tech-House/",
        code:'https://github.com/paramsohal05/Param-s-Tech-House',
        desc:`This project seems like the service provider website where users visit for 
        various services such as Digital Marketing, Web Developments and 
        Graphic Designing. This dummy website is not functional.`
    },
    {
        id:3,
        img:portfolio,
        title:"Portfolio",
        skills:"#React #Tailwind",
        href:"https://portfolio-nine-self-69.vercel.app/",
        code:"https://github.com/paramsohal05/Portfolio",
        desc:`My portfolio describes profession and commitment to work. It shows my projects 
        skills, education, and Contact Information. Collection of projects reflect my 
        commitment to delivering top-tier web solutions.`
    },

    {
        id:4,
        img:curcon,
        title:"Param's Currency Converter",
        skills:"#HTML #CSS #JavaScript",
        href:"https://paramsohal05.github.io/Param-s-Currency-Converter/",
        code:"https://github.com/paramsohal05/Param-s-Currency-Converter",
        desc:`Currency Converter is a basic project which was developed using HTML5, CSS3 & 
        JavaScript. It determines the concept of understanding real DOM and Virtual DOM (which react provides)`
        
    },
    {
        id:5,
        img:amazon,
        title:"Amazon Clone",
        skills:"#HTML #CSS",
        href:"https://paramsohal05.github.io/Amazon-Clone/",
        code:"https://github.com/paramsohal05/Amazon-Clone",
        desc:`This Amazon UI Clone was built using HTML and CSS. This is not responsive, 
        only looks perfect on laptop & Desktop. Various CSS concepts were applied here like flexbox, 
        margin and other color & text properties`
    }
]

const Projects = () => {
   const [showNote, setShowNote]=useState(true)
    
  return (
    <Container className='relative'>

         {showNote && <Note setShowNote={setShowNote}/> }
         <div className='flex flex-col gap-4'>
        {/* Project Heading */}
            <Heading title='rojects' firstLetter='P'/>
            
        {/* Projects Content */}
            <div className='grid grid-cols-1 sm:grid-cols-2 mx-auto md:grid-cols-3 lg:grid-cols-4 
            gap-5'> 
                {cardItems.map(({id, title, desc, href, img, code, skills })=>(
                    <motion.div 
                    animate={{
                        x:[-10,0],
                        transition:{
                            duration:1,
                            delay:1,
                            ease:'easeOut'
                        }
                    }}
                    key={id} className='relative max-w-96 h-96 rounded-md shadow-2xl
                    flex flex-col p-2 gap-2 items-center group'>
                        <img src={img} alt={`${title}Image`} 
                        className='w-[90%] h-44 rounded-md'/>
                        <h2 className='text-sm text-pink-950 font-semibold text-center
                        group-hover:scale-105 duration-150'>{title}</h2>
                         <p className='text-xs h-32 text-gray-600'>
                            {desc}
                         </p>
                       
                        <p className='text-xs text-rose-950 font-medium text-center'>
                            {skills}
                        </p>
                        <div className='absolute top-4 right-4 flex gap-2 '>
                            <motion.a 
                             animate={{
                                scale:[1, 1.2],
                                transition:{
                                    duration:1,
                                    delay:1,
                                    repeat:Infinity
                                }
                               }}
                            href={href} target='_blank'  >
                            <img src={link} alt='View Project' className='w-9 h-9 rounded-full
                            border border-black hover:border-2' />
                            </motion.a>
                            <motion.a 
                           animate={{
                            scale:[1, 1.2],
                            transition:{
                                duration:1,
                                delay:1,
                                repeat:Infinity
                            }
                           }}
                            href={code} target='_blank'>
                            <img src={github} alt='View code' className='w-9 h-9 rounded-full
                            hover:border border-white' />
                            </motion.a>
                            
                        </div>
                     
                    </motion.div>
                )
                
                )} 
                     
            </div>
            <NextBtn title='Contact me' link={'/contact'}/>
        </div>  
    </Container>   
    
  )
}

export default Projects

const Note=({setShowNote, className})=>{
     const newClassName=twMerge(`flex flex-col gap-4 max-w-80 p-4 shadow-2xl bg-slate-300
            rounded-lg absolute top-12  hover:scale-105 duration-150`, className)
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/50 z-30 flex justify-center items-center'>
            <motion.div 
            animate={{
                scale:[0, 1],
                opacity:[0, 1]
            }}
            className={newClassName}>
            <div className='flex justify-between items-center'>
                <h2 className='text-pink-950 font-bold text-xl text-center ml-28'>NOTE!</h2>
                <IoMdClose size={"25px"} onClick={()=>setShowNote(false)} 
                    className='text-pink-800 hover:text-pink-900/90 hover:bg-slate-400 
                    rounded-full cursor-pointer'/>
            </div>
            <p className='text-left text-sm text-gray-600'>
                To view live project and project code, Kindly click on the link and github icon given on each project card respectively; 
             </p>
             <div className='flex justify-between items-center'>
             <h1 className='text-pink-950 font-bold text-lg '>Thanks!</h1>
             <motion.button 
              animate={{
                scale:[1, 1.2],
                transition:{
                    duration:1,
                    delay:1,
                    repeat:Infinity
                }
               }}
             className='bg-rose-900 py-1 px-2 rounded-md font-serif text-white'
             onClick={()=>setShowNote(false)}>Close</motion.button>
             </div>
        </motion.div>
    </div>
    )
}