import React from 'react'
import { twMerge } from 'tailwind-merge'
import {motion} from 'motion/react';

const Heading = ({className, title, firstLetter}) => {
  const newClassName=twMerge(`font-bold text-3xl text-center mb-5 text-pink-800 bg-slate-300 z-20
    font-serif shadow shadow-2xl sticky top-24 md:top-24 lg:top-20 w-fit self-center py-2 px-4 rounded-md`, className)
  return (
    <motion.h1 className={newClassName}
      animate={{
       y:[null, -100, 0],
       opacity:[0,3]
      }}
      transition={{
        duration:1,
        ease:'easeInOut'
      }}>
       <span className='text-pink-950 text-5xl font-extrabold font-serif'>{firstLetter}</span>
       {title}
    </motion.h1>
  )
}

export default Heading