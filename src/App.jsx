import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <div className='bg-slate-300'>
    <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    <Toaster/>
      
    </>
  )
}

export default App