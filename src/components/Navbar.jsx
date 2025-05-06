import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const pathname=useLocation().pathname
  
  const navItems=[
    {
      id:1,
      text:"Home",
      link:'/',

    },
    {
      id:2,
      text:"About",
       link:'/about',
    },
    {
      id:3,
      text:"Skills",
       link:'/skills',
      
    },
    {
      id:4,
      text:"Projects",
       link:'/projects',
       
    },
    {
      id:5,
      text:"Contact",
      link:'/contact'
    }
  ]
  return (
    <>
    {/* <header className='py-4  text-slate-300  bg-pink-800 h-[10%]'> */}
    <div className='max-w-screen-[2000px]  flex justify-between sm:space-x-20  
     items-center mx-auto h-[10%] bg-pink-800
    z-20 px-4 py-4
   md:px-20  text-slate-300 shadow-md fixed top-0 left-0 right-0 
   '>
        
        <div className='text-black font-bold  text-xl sm:text-4xl font-serif'>
             <h1>P<span className='text-slate-300 '>ort</span>F<span className='text-slate-300'>olio</span></h1>
        </div>
  { /* desktop navbar */}
        <div className='font-medium'>
           <ul className='hidden md:flex md:space-x-6 lg:space-x-10'>
            {navItems.map(({id, text, link})=>(
              <li className={`${link===pathname? "border border-white": ''} 
              hover:scale-110 duration-200 cursor-pointer p-2 border-black rounded`} 
              key={id}>
                <Link to={link}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass='active'
                >{text}</Link></li>
            ))}
           </ul> 
           <div className='block md:hidden px-2'>
           <MobileNavbar/>
           </div>
          
        </div>
    </div>  
  {/* </header> */}
    </>
  )
}

export default Navbar