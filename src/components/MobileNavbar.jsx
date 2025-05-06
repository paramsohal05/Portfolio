import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { LuMenu } from "react-icons/lu";

const MobileNavbar = () => {
  return (
    
    <Menu>
      <MenuButton className='md:hidden flex outline-none'>
         <LuMenu size={"30px"}/>
      </MenuButton>
      <MenuItems anchor="bottom" as='ul' className='mt-4 z-30 flex flex-col gap-2 w-40 
      bg-slate-300 items-center p-2 rounded-md outline-none shadow-2xl'>
        <MenuItem as='li' className='shadow-xl rounded-md py-2 px-4 text-pink-900 text-lg '>
          <a className="block data-focus:bg-blue-100" href="/">
            Home
          </a>
        </MenuItem >
        <div className='border border-gray-400 w-full px-2'/>
        <MenuItem as='li' className='shadow-xl rounded-md py-2 px-4 text-pink-900 text-lg '>
          <a className="block data-focus:bg-blue-100" href="/about">
           About
          </a>
        </MenuItem>
        <div className='border  border-gray-400 w-full px-2'/>
        <MenuItem as='li' className='shadow-xl rounded-md py-2 px-4 text-pink-900 text-lg '>
          <a className="block data-focus:bg-blue-100" href="/skills">
            Skills
          </a>
        </MenuItem>
        <div className='border  border-gray-400 w-full px-2'/>
        <MenuItem as='li' className='shadow-xl rounded-md py-2 px-4 text-pink-900 text-lg '>
          <a className="block data-focus:bg-blue-100" href="/projects">
            Projects
          </a>
        </MenuItem>
        <div className='border  border-gray-400 w-full px-2'/>
        <MenuItem as='li' className='shadow-xl rounded-md py-2 px-4 text-pink-900 text-lg '>
          <a className="block data-focus:bg-blue-100" href="/contact">
           Contact
          </a>
        </MenuItem>
        <div className='border border-gray-400 w-full px-2'/>
      </MenuItems>
    </Menu>
  )
}

export default MobileNavbar