import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { ReactTyped,Typed } from "react-typed";
import pic from '../../public/homepic.jfif'


const Home = () => {
  return (
    <>
     <div name='Home' className='max-w-screen-2xl container mx-auto mt-16 px-4 bg-slate-300'>
        <div className='flex flex-col  md:flex-row'>
            
            <div className='md:w-1/2 mt-12 order-2 md:order-1 md:mt-18'>  
                <ReactTyped
                className='text-pink-950 font-bold text-xl'
                strings={["Welcome to Param's Portfolio !"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
                />
               
                <h1 className='text-3xl text-pink-700 font-extrabold mt-10 ml-10'>Param Sohal<br/> <span className='text-lg text-black'>a Frontend Developer</span></h1>
                <p className='mx-16 mt-7 text-lg font-sans text-black md:text-lg text-justify'>Hello, My name is Paramjeet Kaur commonly known as Param Sohal, passionate to work as Frontend developer. Developed experience of UI development through various projects.</p>

                <button className='bg-rose-800 text-white rounded-md p-2 ml-36 mt-10 md:ml-52 md:mt-6'>RESUME</button>
                {/* social media  icons */}
            
                <div className='mt-10 ml-10 mb-5 space-y-1 md:mt-4'>
                    <h3 className='font-bold text-lg'>Availabe on </h3>
                    <br/>
                    <ul className='flex space-x-3 text-4xl md:text-2xl cursor-pointer'>
                    
                    <li>
                        <a href='' target='_blank'>
                        <FaInstagram className='text-pink-900 hover:scale-110 duration-200 '/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/public-profile/settings' target='_blank'>
                            <FaLinkedin className='text-blue-900 hover:scale-110 duration-200'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/profile.php?id=61560696437524&mibextid=ZbWKwL' target='_blank'>
                        <FaFacebook className='text-blue-900 hover:scale-110 duration-200'/>
                        </a>
                    </li>
                    
                    </ul>
                </div>

            </div>
            <div className='md:w-1/2 mt-10 bg-black order-1 md:order-2 md:m-24'>

                <img className="mx-auto mt-10"src={pic} alt='Picture'/>
                <h1 className='text-pink-800 font-bold text-lg ml-12'>Param Sohal- Frontend Developer</h1>
                <div className='mt-10 mr-1 md:mt-2 mb-2 text-center'>
                    <h3 className='font-bold text-lg text-white '>Currently Working on </h3>
                    <br/>
                    <div className='flex  ml-36 space-x-3 text-4xl md:text-2xl cursor-pointer '>
                        <FaReact className='text-sky-500 hover:scale-110 duration-200 '/>
                        <TbBrandJavascript className='text-yellow-600 hover:scale-110 duration-200'/>
                        <RiTailwindCssFill className='text-sky-500 hover:scale-110 duration-200'/>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Home