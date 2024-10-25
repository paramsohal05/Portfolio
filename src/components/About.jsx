import React, { useState } from 'react'
import { ReactTyped,Typed } from "react-typed";

const About = () => {
    const [color, setColor]=useState("true")
  return (
    <>
        <div name='About' className='max-w-screen-2xl container mx-auto mt-16 px-4 bg-slate-300'>
        {/* About Heading */}
        <div className='flex flex-col '>
            <div className=' font-bold text-3xl text-center mb-10 text-pink-800 font-serif'>
                <h1><span className='text-pink-950 text-5xl font-extrabold font-serif'>A</span>bout</h1>
                
            </div>
             {/* about Content */}
             <div className='flex flex-col  md:space-y-7 '>
                {/* row1 */}
                <div className='flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-16 md:ml-6'>
                    {/* Personal Details */}
                    <div className='w-full md:w-1/2   h-60 p-2 rounded-xl shadow-2xl'>
                        <h2 className='text-center font-bold text-xl mt-2'>Personal Information</h2>
                        <ul className='my-7 mx-7 space-y-2 text-sm '>
                            <li>Name : <span>Paramjeet Kaur</span></li>
                            <li>Date Of Birth : <span>05 October 2000</span></li>
                            <li>Marital Status : Unmarried</li>
                            <li>Nationality : Indian</li>
                            <li>Languages Known : English, Hindi & Punjabi</li>
                        </ul>
                    </div>
                    {/* Education Details  */}
                    <div className='w-full md:w-1/2  h-60 p-2 rounded-xl shadow-2xl'>
                        <h2 className='text-center font-bold text-xl mt-2'>Education</h2>
                        <ul className='my-7 mx-7 space-y-2 text-sm list-disc'>
                            <li>Intermediate-2017-2018  <span className='text-xs'>CBSC</span></li>
                            <li>Bachelor Of Science-2020-2023  <span className='text-xs'>MJPR University</span></li>
                            <li>Frontend Development-2023-2024  <span className='text-xs'>Self Studied </span></li>
                            
                        </ul>
                    </div>
                </div>
                 {/* row 2  */}
                 <div className='flex flex-col  items-center space-y-6 md:space-y-0 md:flex-row md:space-x-16 md:ml-6'>
                    {/* Interests */}
                    <div className='w-full md:w-1/2 p-2 rounded-xl shadow-2xl'>
                        <h2 className='text-center font-bold text-xl mt-2'>Experience </h2>
                        <p className='p-5 mt-4 text-sm '>As i mentioned above that i learnt frontend development bt self. Although,  i do not have any professional experience, but i developed deep understanding of various tools <span>[Git & Github]</span> and skills <span>[React, Tailwind, etc]</span> through building various projects. Currently, seeking for Internship to acquire  real life experience.  </p>
                            
                        
                    </div> 

                    {/* POther Info */}
                    <div className='w-full md:w-1/2   p-2 rounded-xl shadow-2xl'>
                        <h2 className='text-center font-bold text-xl mt-2'>Mission</h2>
                        <p className='p-5 mt-4 text-sm '>My mission is to leverage my skills and creativity to deliiver innovative web solutions that exceed client expectations and contribute positivel to the digital landscape. I am committed to the continous learning and growth, always seeking new challenges and opportunities to expand my horizon. </p>
                    </div> 
                </div>   
            </div>
        </div>
        </div>
        
        
    </>
    
           
                    
               

        
        
    
  )
}

export default About