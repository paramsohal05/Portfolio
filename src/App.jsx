import React from 'react'
import { ReactTyped} from "react-typed";
import Container from './components/Container';
import NextBtn from './components/NextBtn';
import {motion} from 'motion/react'


const App = () => {

  return (
    <>
     <Container className=''>
        <div className='flex flex-col'>
        <ReactTyped
                className={'text-pink-950 font-bold text-2xl'}
                strings={["Welcome to Param's Portfolio !"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
                />
        <div className='flex flex-col md:flex-row '>
            
            <div className='md:w-1/2 w-full order-1 mt-16 md:px-10'>  
               
                <motion.h1 className=' text-lg md:text-3xl text-pink-800 font-extrabold mt-6 ml-5'
                animate={{
                    x:[-300, 100, 0],
                    opacity:[0,1]
                }}
                 transition={{
                    duration:1,
                    ease:'easeOut'
                 }}
                 >
                    I'm Paramjeet Kaur<br/> 
                    <span className='text-lg text-black'>
                        a Full Stack Web Developer 
                    </span>
                    <p className='text-base text-black'># MERN Stack</p>
                </motion.h1>
                <p className=''></p>
            </div>
            <motion.div className='md:w-1/2 w-full md:h-[100%] order-2 md:mt-16 shadow-2xl rounded-3xl
            shadow-slate-400 p-8 group'
            animate={{
                x:[300, -100, 0],
            }}
             transition={{
                duration:1,
                ease:'easeOut'
             }}>
                <motion.p className='text-sm text-black md:text-sm text-left  group-hover:scale-105 duration-150'
                animate={{
                    y:[-10, 0],
                    opacity:[0,1]
                }}
                 transition={{
                    duration:1,
                    delay:0.2,
                    ease:'easeInOut'
                 }}>
                    I am a dedicated and passionate <span className='font-bold text-pink-950'>MERN </span>
                    developer with expertise in frontend, backend frameworks and databses.
                   Build websites with a focus on user experience , scalability, responsiveness and performance
                    using <span className='font-bold text-pink-950'>React.js </span> 
                    and <span className='font-bold text-pink-950'>Tailwind CSS  </span> for 
                    frontend development whereas  <span className='font-bold text-pink-950'>Node.js </span> and 
                    <span className='font-bold text-pink-950'> Express.js </span> for backend 
                    development and <span className='font-bold text-pink-950'>MongoDB </span>
                     for database.
                    <br/>
                    <br/>
                    I am always eager to convert real-world problems into Web applications.
                    
                </motion.p> 
            </motion.div>
           
            
        </div>
        <NextBtn title='About' link={'/about'}/>
        </div>
     </Container>
    </>
  )
}

export default App