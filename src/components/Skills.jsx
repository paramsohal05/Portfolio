import React from 'react'
import html from '../../public/html.png'
import css from '../../public/css.png'
import js from '../../public/js.png'
import bootstrap from '../../public/bootstrap.png'
import tailwind from '../../public/tailwind.png'
import react from '../../public/react.png'
import redux from '../../public/redux.png'
import git from '../../public/git.png'
import github from '../../public/github.png'


const Skills = () => {
    const skillItems=[
        {
            id:1,
            logo:html,
            title:"HTML"
        },

        {
            id:2,
            logo:css,
            title:"CSS"
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
            title:"React"
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
        }
    ]
  return (
    <div name='Skills' className='max-w-screen-2xl container mx-auto mt-16 px-4 bg-slate-300'>
        <div className=' font-bold text-3xl text-center mb-10 text-pink-800 font-serif'>
            <h1><span className='text-pink-950 text-5xl font-extrabold font-serif'>S</span>kills <span className='text-pink-950 text-5xl font-extrabold font-serif'>& T</span>ools</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
            
            
            {skillItems.map(({id, logo, title})=>{
                return (<div className="w-[170px] h-[170px] items-center justify-center rounded-full border-[2px]  space-y-3  bg-slate-200 shadow-xl hover:scale-110 duration-300 hover:border-pink-800" key={id}>
                    <img className="w-[66px] rounded-full   ml-11 mt-5 text-2xl" src={logo}/>
                    <div className=' text-xl ml-8 text-pink-900 font-bold'>{title}</div>
                    
                </div>)
                
                
            })}
            
            
            
        </div>
        
    </div>
  )
}

export default Skills