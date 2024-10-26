import React from 'react';
import tech from "../assets/techhouse11.png";
import weather from  "../assets/weather.jfif";
import curcon from "../assets/currency.png"
import todo from "../assets/todo.jfif"
import shopping from "../assets/shopping.jfif"
import YT from "../assets/YT.png"
import amazon from "../assets/amazon.png"


const Projects = () => {
    const cardItems=[
        {
            id:1,
            img:tech,
            title:"Param's Tech House",
            description:"It was made by using Bootstrap and HTML",
            href:"https://paramsohal05.github.io/Param-s-Tech-House/?#contactus"
        },

        {
            id:2,
            img:weather,
            title:"Weather App",
            description:"It was made by using React ",
            href:"https://paramsohal05.github.io/Param-s-Tech-House/?#contactus"
        },

        {
            id:3,
            img:curcon,
            title:"Param's Currency Converter",
            description:"It was made by using HTML, CSS & JavaScript",
            href:"https://paramsohal05.github.io/Param-s-Currency-Converter/"
        },

        {
            id:4,
            img:todo,
            title:"To Do List App",
            description:"It was made by using React",
            href:"https://paramsohal05.github.io/Param-s-Tech-House/?#contactus"
        },

        {
            id:5,
            img:shopping,
            title:"E Shoping",
            description:"It was made by using React & Tailwind",
            href:"https://paramsohal05.github.io/Param-s-Tech-House/?#contactus"
        },

        {
            id:6,
            img:YT,
            title:"You Tube Clone",
            description:"It was made by using React, Tailwind & Rapid Api",
            href:"https://paramsohal05.github.io/Param-s-Tech-House/?#contactus"
        },

        {
            id:7,
            img:amazon,
            title:"Amazon Clone",
            description:"It was made by using React, Tailwind & Rapid Api",
            href:"https://paramsohal05.github.io/Amazon-Clone/"
        }
    ]
  return (
    <div name="Projects" className='max-w-screen-2xl mx-auto container mt-16 px-4 md:px-20'>
        <div className='flex flex-col'>
        {/* Project Heading */}
            <div className=' font-bold text-3xl text-center mb-10 text-pink-800 font-serif'>
                <h1><span className='text-pink-950 text-5xl font-extrabold font-serif'>P</span>rojects </h1>
            </div>
        {/* Projects Content */}
            <div className='grid grid-col-1  mx-auto md:grid-cols-3 gap-20'> 
                {cardItems.map(({id, title, description, href, img})=>(
                     <div className='flex flex-col items-center space-y-3 rounded-xl w-[400px] md:w-[270px] h-[370px] bg-pink-200 p-3 shadow-xl hover:scale-100 duration-300 hover:border border-pink-900 cursor-pointer'>
                     <img src={img} alt='' className='h-[150px] w-[150px] rounded-full mt-2'/>
                     
                        <h1 className='font-semibold font-serif text-xl md:text-lg'>{title}</h1>
                        <p className='text-gray-800 md:text-sm font-serif text-lg'>{description}</p>
                     
                     
                     <a href={href} className='font-semibold font-serif bg-pink-800 text-slate-300 p-3 rounded-lg ' target='_blank'>View Project</a>
                 
                     </div>
                )
                   
                )}
                     
            </div>
        </div>     
    </div>   
    
  )
}

export default Projects