import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import js from '../assets/js.png'
import bootstrap from '../assets/bootstrap.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import node from '../assets/node1.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo1.png'
import mongoose from '../assets/mongoose.png'
import Container from '../components/Container'
import Heading from '../components/Heading'
import NextBtn from '../components/NextBtn'
import {motion} from 'motion/react'


const Skills = () => {
    const skillItems=[
        {
            id:1,
            logo:html,
            title:"HTML 5"
        },

        {
            id:2,
            logo:css,
            title:"CSS 3"
        },

        {
            id:3,
            logo:js,
            title:"JavaScript"
        },

        {
            id:4,
            logo:bootstrap,
            title:"BootStrap"
        },

        {
            id:5,
            logo:tailwind,
            title:"Tailwind CSS"
        },

        {
            id:6,
            logo:react,
            title:"React JS"
        },

        {
            id:7,
            logo:redux,
            title:"Redux"
        },
        {
            id:8,
            logo:git,
            title:"Git "
        },
        {
            id:9,
            logo:github,
            title:"GitHub "
        },
        {
            id:10,
            logo:node,
            title:"Node JS"
        },
        {
            id:11,
            logo:express,
            title:"Express JS"
        },
        {
            id:12,
            logo:mongo,
            title:"MongoDB"
        },
        {
            id:13,
            logo:mongoose,
            title:"Mongoose"
        }
    ]
  return (
    <Container>
        <div className='flex flex-col '>
        <Heading title='kills' firstLetter='S'/>
        <div className='grid grid-cols-2 sm:grid-cols-3 mx-auto md:grid-cols-5 lg:grid-cols-6 
            gap-4'>
            
            
            {skillItems.map(({id, logo, title})=>{
                return (
                    <motion.div 
                    animate={{
                        scale:[0.8, 1],
                        transition:{
                            duration:0.5,
                            ease:'easeInOut',

                        }
                    }}
                    key={id}
                    className='flex flex-col gap-2 justify-center shadow-2xl shadow-slate-400 p-4 
                    items-center  max-w-64 h-52 rounded-md hover:border border-pink-950 duration-200 group'>
                        <img src={logo} className='w-[90%] h-44 group-hover:scale-110 duration-200 '/>
                        <p className='text-pink-950 font-semibold'>{title}</p>
                    </motion.div>
                )
                
            })}
            
            
            
        </div>
        <NextBtn title='View Projects' link={'/projects'}/>
        </div>
    </Container>
  )
}

export default Skills