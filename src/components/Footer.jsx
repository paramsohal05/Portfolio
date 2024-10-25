import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
        
       <footer className='py-12 bg-pink-950 text-slate-300 mt-20'>
            <div className='max-w-screen-2xl container mx-auto  px-4  md:px-10'>
            
                <div className='flex flex-col justify-center items-center mt-5'>
                
                    <div className='flex space-x-3'>
                        <a href='https://www.facebook.com/profile.php?id=61560696437524&mibextid=ZbWKwL' target='_blank'><FaFacebook size={24}/></a>
                        <a href='' target='_blank'><FaInstagram size={24}/></a>
                        <a href='' target='_blank'><FaLinkedin size={24}/></a>
                        <a href='' target='_blank'><FaTwitter size={24}/></a>
                        
                        
                        
                    </div>
                    <div className='mt-8 border-t py-6 border-slate-400 space-y-3'>
                        <p className='text-sm'>&copy; 2024 Your Company All rights reserved</p>
                        <p className=' text-sm font-sans'>Website Developed by Param Sohal</p>
                    </div>
                </div>
            </div>
       </footer>
    </>
  )
}

export default Footer