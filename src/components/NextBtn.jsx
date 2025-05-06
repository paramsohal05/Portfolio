import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const NextBtn = ({link, title}) => {
  const newClass=twMerge(`self-end text-slate-300 bg-pink-900 my-5 px-2 py-1
            rounded-md w-fit flex gap-2 items-center hover:bg-white hover:text-pink-950 
            hover:scale-110 duration-200 hover:font-bold`)
  return (
    <Link to={link} className={newClass}>
             <FaArrowRightLong/>
              {title}
    </Link>
  )
}

export default NextBtn