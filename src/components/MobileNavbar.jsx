import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { LuMenu } from "react-icons/lu";
import { Link } from 'react-router-dom';

const MobileNavbar = () => {
  return (
    
    <Menu>
      <MenuButton className='md:hidden flex outline-none'>
         <LuMenu size={"30px"}/>
      </MenuButton>
      <MenuItems anchor="bottom" as='ul' className='mt-4 z-30 flex flex-col gap-2 w-40 
      bg-slate-300 items-center p-2 rounded-md outline-none shadow-2xl'>
        <MenuItem as='li' className='shadow-xl rounded-md py-2 px-4 text-pink-900 text-lg '>
          <Link className="block data-focus:bg-blue-100" to="/">
            Home
          </Link>
        </MenuItem >
        <div className='border border-gray-400 w-full px-2'/>
        <MenuItem as='li' className='shadow-xl rounded-md py-2 px-4 text-pink-900 text-lg '>
          <Link className="block data-focus:bg-blue-100" to="/about">
           About
          </Link>
        </MenuItem>
        <div className='border  border-gray-400 w-full px-2'/>
        <MenuItem as='li' className='shadow-xl rounded-md py-2 px-4 text-pink-900 text-lg '>
          <Link className="block data-focus:bg-blue-100" to="/skills">
            Skills
          </Link>
        </MenuItem>
        <div className='border  border-gray-400 w-full px-2'/>
        <MenuItem as='li' className='shadow-xl rounded-md py-2 px-4 text-pink-900 text-lg '>
          <Link className="block data-focus:bg-blue-100" to="/projects">
            Projects
          </Link>
        </MenuItem>
        <div className='border  border-gray-400 w-full px-2'/>
        <MenuItem as='li' className='shadow-xl rounded-md py-2 px-4 text-pink-900 text-lg '>
          <Link className="block data-focus:bg-blue-100" to="/contact">
           Contact
          </Link>
        </MenuItem>
        <div className='border border-gray-400 w-full px-2'/>
      </MenuItems>
    </Menu>
  )
}

export default MobileNavbar