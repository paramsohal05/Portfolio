import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <div className='min-h-screen bg-slate-300'>
      <Navbar/>
      <div className='min-h-[80%]'>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout