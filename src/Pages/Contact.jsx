import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import contact from '../assets/contact2.png'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import Container from '../components/Container';
import Heading from '../components/Heading';
import NextBtn from '../components/NextBtn';
import { MdOutlineMail } from "react-icons/md";
import { motion } from 'motion/react';

const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const userInfo={
      name:data.name,
      email:data.email,
      message:data.message

    }

    try{
      await axios.post('https://getform.io/f/azyyllkb',userInfo);
      toast.success("Your Message has been sent")
    }catch(error){
      toast.error("Something went Wrong")
    }
  }

  return (
    <>
    <Container>
        <div className='flex flex-col gap-1'>
          {/* Contact me Heading */}
         <Heading firstLetter='C' title='ontact'/>
         {/* conatct page */}
         <div className='flex gap-2 md:flex-row flex-col '>
          <div className='order-1 md:w-1/2 w-full md:px-20'>
            <motion.h1 className='text-3xl font-bold text-center text-pink-950'
            animate={{
              y:[-20, 0],
              opacity:[0, 1]
            }}
            transition={{
              
              delay:0.5,
              ease:'easeOut'
            }}>
              Get in Touch
            </motion.h1>
            <motion.p className='text-center text-gray-500 md:text-left mt-2'
             animate={{
              y:[20, 0],
              opacity:[0,1]
             }}
             transition={{
              
              delay:0.5,
              ease:'easeOut'
             }}
             >
              I am open to work as a freelancer and
              on-site & remote job opportunities, feel free to contact me.
            </motion.p>
            
          </div>
         <motion.div animate={{ x: [300, 0] }} transition={{duration:1}}
         className='relative mt-4 md:mt-0 order-2 md:w-1/2 w-full flex items-center justify-center'>
           <img src={contact} alt='contactImage' className='w-full min-h-80 rounded-lg border 
           border-pink-950'/>
           <div className='absolute top-4 right-2 left-4'>
           <motion.p className='mt-4 text-pink-950'
            animate={{
              y:[null, -20, 0],
              opacity:[0, 1]
            }}
            transition={{
              duration:2,
              delay:0.5,
              ease:'easeInOut'
            }}>
            Email: {""}
              <span className='font-medium'>paramsohal05@gmail.com</span>
            </motion.p>
            <div className='flex gap-4 mt-4 self-end flex-col sm:flex-row '>
            <motion.a href='https://www.linkedin.com/in/paramjeet-kaur-64252b2b0' target='_blank'
            className='bg-pink-950 py-1 px-2 flex gap-1 items-center text-white
            font-serif rounded-md border-2 border-white/70 hover:border-white w-fit'
            animate={{
              y:[null, -20, 0],
              opacity:[0,1]
            }}
            transition={{
              duration:2,
              delay:1,
              ease:'circOut'
            }}>
              <span>LINKEDIN</span>
              <FaLinkedin size={"25px"} />
            </motion.a>
           
            <motion.a href='https://github.com/paramsohal05/' target='_blank'
            className='bg-pink-950 py-1 px-2 flex gap-1 items-center text-white
            font-serif rounded-md border-2 border-white/70 hover:border-white w-fit'
            animate={{
              y:[null, -20, 0],
              opacity:[0,1]
            }}
            transition={{
              duration:2,
              delay:1,
              ease:'circOut'
            }}>
              <span>GITHUB</span>
              <FaGithub size={"25px"} />
            </motion.a>
            <motion.a href='mailto:paramsohal05@gmail.com'
            className='bg-pink-950 py-1 px-2 flex gap-1 items-center text-white
            font-serif rounded-md border-2 border-white/70 hover:border-white w-fit'
            animate={{
              y:[null, -20, 0],
              opacity:[0,1]
            }}
            transition={{
              duration:2,
              delay:1,
              ease:'circOut'
            }}>
              <span>Email</span>
              <MdOutlineMail size={"25px"} />
            </motion.a>
            </div>
           </div>
         </motion.div>
         </div>
         <div className='flex flex-col md:flex-row justify-between items-center'>
         <h2 className=' md:text-5xl font-bold text-pink-950 font-serif text-xl'>
          Thanks! for visiting here</h2>
          {/* nextpage btn */}
          <NextBtn title='Back to Home Page' link={'/'}/>
         </div>
        
        </div>
    </Container>
    </>
    
  )
}

export default Contact