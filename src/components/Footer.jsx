import React from 'react'
import { FaGithub } from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa6'
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <>
        
       <footer className='py-2 bg-pink-950 text-slate-300 h-[10%]'>
            <div className='max-w-screen-2xl container mx-auto  px-4  md:px-10 '>
            
                <div className='flex flex-col justify-center items-center my-5 gap-3'>
                
                    <div className='flex space-x-3'>
                        <a href='https://www.linkedin.com/in/paramjeet-kaur-64252b2b0' target='_blank'>
                        
                          <FaLinkedin size={24}/>
                        </a>
                        <a href='https://github.com/paramsohal05/' target='_blank'>
                          <FaGithub size={24}/>
                        </a>
                        <a href='mailto:paramsohal05@gmail.com'>
                             <MdOutlineMail  size={26}/>
                        </a>
                    </div>
                    <p className=' text-sm font-sans'>Website Developed by Param Sohal</p>
                   
                </div>
            </div>
       </footer>
    </>
  )
}

export default Footer