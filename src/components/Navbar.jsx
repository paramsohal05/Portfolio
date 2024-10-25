import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menu, setMenu]=useState(false)
  const navItems=[
    {
      id:1,
      text:"Home"
    },
    {
      id:2,
      text:"About"
    },
    {
      id:3,
      text:"Skills"
    },
    {
      id:4,
      text:"Projects"
    },
    {
      id:5,
      text:"Contact"
    }
  ]
  return (
    <>
    <div className='flex justify-between max-w-screen-2xl items-center container space-x-48  px-4 py-4 mx-auto md:px-20 bg-pink-800 text-slate-300 shadow-md fixed top-0 left-0 right-0'>
        
        <div className='text-black font-bold  text-4xl font-serif' >
             <h1>P<span className='text-slate-300 '>ort</span>F<span className='text-slate-300'>olio</span></h1>
        </div>
{/* desktop navbar */}
        <div className='font-medium'>
           <ul className='hidden md:flex space-x-10'>
            {navItems.map(({id, text})=>(
              <li className='hover:scale-150 duration-200 cursor-pointer p-2 border-black rounded' key={id}>
                <Link to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass='active'
                >{text}</Link></li>
            ))}
           </ul> 
          <div className='md:hidden items-center text-2xl' onClick={()=>setMenu(!menu)}>
            {menu? <IoCloseSharp />: <LuMenu /> }
            
          </div>
           
        </div>
    </div>
{/* Mobile Navbar */}
  {menu && (<div className='max-w-screen h-full bg-pink-800 text-slate-300 mt-16 ml-64 '>
          <ul className='md:hidden flex flex-col  items-center  justify-center text-2xl space-y-5 '>
          {navItems.map(({id, text})=>(
              <li  className="mt-4"key={id}>
                <Link 
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass='active'
                >{text}</Link></li>
            ))}
           </ul> 
        </div>
      )}
    </>
  )
}

export default Navbar